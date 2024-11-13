import { defineCollection, z } from 'astro:content'
import { CATEGORIES } from '@/data/categories'
import { ISSUES } from '@/data/issues'
import { getAuthors } from '@/data/authors'
import { desc } from 'framer-motion/client'

const issueNames: string[] = ISSUES.map((issue) => issue.name)
if (issueNames.length === 0) {
	issueNames.push('No issues found')
}

const allAuthors = await getAuthors()

const blog = defineCollection({
	schema: ({ image }) =>
		z.object({
			title: z.string().max(80),
			description: z.string(),
			heroImage: image(),
			alt: z.string(),
			photoCredits: z.string(),
			category: z.enum(CATEGORIES),
			issue: z.enum(issueNames as [string, ...string[]]),
			author: z.array(z.enum(allAuthors as [string, ...string[]])),
			tags: z.array(z.string()).max(3),
			draft: z.boolean().default(false)
		})
})

const authors = defineCollection({
	schema: ({ image }) =>
		z.object({
			name: z.string(),
			bio: z.string().optional(),
			avatar: image().optional(),
			alumni: z.boolean().default(false)
		})
})

const issues = defineCollection({
	schema: ({ image }) =>
		z.object({
			name: z.string(),
			coverImage: image(),
			description: z.string(),
			issuuLink: z.number(),
			archived: z.boolean().default(false)
		})
})

export const collections = { blog, authors, issues }
