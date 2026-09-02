import adapter from '@sveltejs/adapter-static';

// Normalize BASE_PATH for SvelteKit's kit.paths.base
const rawBase = process.argv.includes('dev') ? '' : (process.env.BASE_PATH ?? '');
let normalizedBase = rawBase;
if (normalizedBase && normalizedBase !== '') {
	if (!normalizedBase.startsWith('/')) normalizedBase = '/' + normalizedBase;
	if (normalizedBase.endsWith('/')) normalizedBase = normalizedBase.slice(0, -1);
}

const config = {
	kit: {
		adapter: adapter(),
		paths: {
			base: normalizedBase
		}
	}
};

export default config;