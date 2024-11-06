import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import tailwind from '@astrojs/tailwind';
import { remarkReadingTime } from './src/utils/readTime.ts';
import react from "@astrojs/react";
import keystatic from '@keystatic/astro'

import netlify from "@astrojs/netlify";
import { nodePolyfills } from 'vite-plugin-node-polyfills'
import pagefind from "astro-pagefind";


// https://astro.build/config
export default defineConfig({
  site: 'https://pantherpress.ca',
  base: '/',
  build: {
    format: "file",
  },
  vite: {
    plugins: [nodePolyfills()],
    ssr: {
      noExternal: ["node:process", "@keystatic/core", "@keystatic/astro", "@keystatic/astro/dist/keystatic-astro-ui.js"]
    }
  },
  markdown: {
    remarkPlugins: [remarkReadingTime],
    drafts: true,
    shikiConfig: {
      theme: 'material-theme-palenight',
      wrap: true
    }
  },
  integrations: [mdx({
    syntaxHighlight: 'shiki',
    shikiConfig: {
      theme: 'material-theme-palenight',
      wrap: true
    },
    drafts: true
  }), sitemap(), tailwind(), react(), keystatic(), pagefind()],
  output: "hybrid",
  adapter: netlify(),
  vite: {
    define: {
      'process.env': process.env,
    }
  }
});