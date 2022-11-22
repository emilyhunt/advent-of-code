import adapter from '@sveltejs/adapter-static';

const dev = process.env.NODE_ENV === 'development';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	kit: {
		adapter: adapter({
			pages: 'docs',
			assets: 'docs'
		}),
		/* Not convinced that I need the below? */
		// paths: {
		// 	base: dev ? '' : 'aoc.emilydoesastro.com',
		// },
	}
};

export default config;