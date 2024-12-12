import { defineCollection, z } from 'astro:content'
import { CATEGORIES } from '@/data/categories'
import { glob } from 'astro/loaders'

// No validation of authors and issues is due to input validation in the CMS and bc using promises to define enum doesn't seem to work

const blog = defineCollection({
	loader: glob({ pattern: '**/*.mdx', base: './src/content/blog' }),
	schema: ({ image }) =>
		z.object({
			title: z.string().max(80),
			description: z.string(),
			// pubDate: z
			// 	.string()
			// 	.or(z.date())
			// 	.transform((val) => new Date(val)),
			heroImage: image(),
			alt: z.string(),
			photoCredits: z.string(),
			category: z.enum(CATEGORIES),
			// issue: z.enum(issueNames as [string, ...string[]]),
			issue: z.string(),
			// author: z.array(z.enum(authorNames as [string, ...string[]])),
			author: z.array(z.string()),
			tags: z.array(z.string()).max(3),
			draft: z.boolean().default(false)
		})
})
const authors = defineCollection({
	loader: glob({ pattern: '*.yaml', base: './src/content/authors' }),
	schema: ({ image }) =>
		z.object({
			name: z.string(),
			bio: z.string().optional(),
			photo: image().optional(),
			alumni: z.boolean().default(false)
		})
})
const issues = defineCollection({
	loader: glob({ pattern: '*.yaml', base: './src/content/issues' }),
	schema: ({ image }) =>
		z.object({
			name: z.string(),
			coverImage: image(),
			description: z.string(),
			issuuLink: z.string().url(),
			archived: z.boolean().default(false)
		})
})

export const collections = { blog, authors, issues }
