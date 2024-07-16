import { defineCollection, z } from 'astro:content'
import { CATEGORIES } from '@/data/categories'
import { ISSUES } from '@/data/issues'
import { AUTHORS } from '@/data/authors'
const issueNames: string[] = ISSUES.map((issue) => issue.name)
if (issueNames.length === 0) {
	issueNames.push('No issues found')
}
const authorNames: string[] = AUTHORS.map((author) => author.name)
if (authorNames.length === 0) {
	authorNames.push('No authors found')
}

const blog = defineCollection({
	// Type-check frontmatter using a schema
	schema: ({ image }) =>
		z.object({
			title: z.string().max(80),
			description: z.string(),
			// // Transform string to Date object
			// pubDate: z
			// 	.string()
			// 	.or(z.date())
			// 	.transform((val) => new Date(val)),
			heroImage: image(),
			alt: z.string(),
			photoCredits: z.string(),
			category: z.enum(CATEGORIES),
			issue: z.enum(issueNames as [string, ...string[]]),
			author: z.array(z.enum(authorNames as [string, ...string[]])),
			tags: z.array(z.string()).max(3),
			draft: z.boolean().default(false)
		})
})

export const collections = { blog }
