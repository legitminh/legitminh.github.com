import fs from 'node:fs';
import path from 'node:path';
import { parse } from 'svelte/compiler';
import { projects, pwaInstallation, nativeInstallation, discreteInstallation } from '../src/lib/data/projects.ts';
import { contentScreens } from '../src/lib/data/screens.ts';

const catalog = JSON.parse(fs.readFileSync('src/lib/locales/vi.json', 'utf8'));
for (const name of fs.readdirSync('src/lib/locales/screens')) Object.assign(catalog, JSON.parse(fs.readFileSync(`src/lib/locales/screens/${name}`, 'utf8')));
const needed = new Set();
const neutral = new Set(['minh.website', 'github ↗']);
const normalize = text => text.replace(/\s+/g, ' ').trim();
function data(value, key = '') {
  if (['code', 'href', 'id', 'github', 'app', 'src'].includes(key)) return;
  if (typeof value === 'string') needed.add(normalize(value));
  else if (Array.isArray(value)) value.forEach(x => data(x, key));
  else if (value) Object.entries(value).forEach(([key, x]) => data(x, key));
}
data(projects); data(pwaInstallation); data(nativeInstallation); data(discreteInstallation);
Object.values(contentScreens).forEach(screen => needed.add(screen.name));
const raw = [];
function scan(file) {
  const source = fs.readFileSync(file, 'utf8');
  const ast = parse(source);
  function calls(node) {
    if (!node || typeof node !== 'object') return;
    if (node.type === 'CallExpression' && node.callee?.name === 't' && typeof node.arguments?.[0]?.value === 'string') needed.add(normalize(node.arguments[0].value));
    Object.values(node).forEach(value => Array.isArray(value) ? value.forEach(calls) : calls(value));
  }
  calls(ast);
  function text(node, skip = false) {
    if (!node || typeof node !== 'object' || ['Script', 'Style', 'Comment', 'Attribute'].includes(node.type)) return;
    for (const attribute of node.attributes ?? []) {
      if ((['alt', 'title', 'aria-label', 'placeholder'].includes(attribute.name) || (node.name === 'Card' && attribute.name === 'name')) && attribute.value?.length === 1 && attribute.value[0].type === 'Text') needed.add(normalize(attribute.value[0].data));
    }
    const blocked = skip || ['code', 'pre', 'script', 'style'].includes(node.name);
    if (node.type === 'Text' && !blocked && /[a-z]/i.test(node.data) && !neutral.has(normalize(node.data))) raw.push(`${file}: ${normalize(node.data)}`);
    for (const key of ['children', 'html', 'nodes', 'fragment', 'body', 'else', 'then', 'catch', 'pending']) {
      const value = node[key];
      if (Array.isArray(value)) value.forEach(x => text(x, blocked)); else text(value, blocked);
    }
  }
  text(ast.html);
}
function walk(directory) {
  for (const entry of fs.readdirSync(directory, { withFileTypes: true })) {
    const file = path.join(directory, entry.name);
    if (entry.isDirectory()) walk(file); else if (file.endsWith('.svelte')) scan(file);
  }
}
walk('src');
const missing = [...needed].filter(key => !catalog[key]);
if (missing.length || raw.length) {
  console.error(JSON.stringify({ missing, unlocalizedText: raw }, null, 2));
  process.exit(1);
}
console.log(`Vietnamese coverage verified for ${needed.size} source strings; ${Object.keys(catalog).length} catalog entries.`);
