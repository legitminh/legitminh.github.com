import adapter from '@sveltejs/adapter-static';
import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vite';

// Ensure Vite's base matches the deployed subpath. VITE uses a trailing slash for base;
// if BASE_PATH is provided (e.g. '/archive.legitminh.github.com'), append a trailing slash for Vite.
const basePath = process.env.BASE_PATH ?? '/';
const viteBase = basePath === '' || basePath === '/' ? '/' : (basePath.endsWith('/') ? basePath : `${basePath}/`);

export default defineConfig({
	base: viteBase,
	plugins: [
		sveltekit({
			compilerOptions: {
				// Force runes mode for the project, except for libraries. Can be removed in svelte 6.
				runes: ({ filename }) =>
					filename.split(/[/\\]/).includes('node_modules') ? undefined : true
			},

			// Use adapter-static for static site builds (GitHub Pages).
			adapter: adapter()
		})
	],

});
