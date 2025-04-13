import { defineConfig } from 'astro/config'
import sitemap from '@astrojs/sitemap'
import tailwindcss from '@tailwindcss/vite'
import react from '@astrojs/react'

import cloudflare from '@astrojs/cloudflare'

// https://astro.build/config
export default defineConfig({
	site: 'https://pantherpress.ca',
	base: '/',
	// build: {
	// 	format: 'file'
	// },

	integrations: [sitemap(), react()],
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
				'react-dom/server': 'react-dom/server.edge'
			}
		},
		plugins: [tailwindcss()]
	}
})
