import { defineConfig } from 'astro/config'
// import mdx from '@astrojs/mdx'
import sitemap from '@astrojs/sitemap'
import tailwind from '@astrojs/tailwind'
import react from '@astrojs/react'
// import keystatic from '@keystatic/astro'

import cloudflare from '@astrojs/cloudflare'

// https://astro.build/config
export default defineConfig({
	site: 'https://pantherpress.ca',
	base: '/',
	build: {
		format: 'file'
	},
	// markdown: {
	// 	remarkPlugins: [remarkReadingTime],
	// 	drafts: true,
	// 	shikiConfig: {
	// 		theme: 'material-theme-palenight',
	// 		wrap: true
	// 	}
	// },
	integrations: [
		// mdx({
		// 	syntaxHighlight: 'shiki',
		// 	shikiConfig: {
		// 		theme: 'material-theme-palenight',
		// 		wrap: true
		// 	},
		// 	drafts: true
		// }),
		sitemap(),
		tailwind(),
		react(),
		// keystatic()
	],
	output: 'static',
	adapter: cloudflare(),
	vite: {
		define: {
			'process.env': process.env
		},
		resolve: {
			// Use react-dom/server.edge instead of react-dom/server.browser for React 19.
			// Without this, MessageChannel from node:worker_threads needs to be polyfilled.
			alias: import.meta.env.PROD && {
			  "react-dom/server": "react-dom/server.edge",
			},
		},
	}
})
