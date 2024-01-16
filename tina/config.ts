import { AUTHORS } from '../src/data/authors.ts'
import { CATEGORIES } from '../src/data/categories.ts'
import { ISSUES } from '../src/data/issues.ts'
import { defineConfig } from 'tinacms'

const issueNames = ISSUES.map((issue) => issue.name)
const authorNames = AUTHORS.map((author) => author.name)

// Your hosting provider likely exposes this as an environment variable
const branch = process.env.HEAD || process.env.VERCEL_GIT_COMMIT_REF || 'main'

export default defineConfig({
	branch,
	clientId: process.env.PUBLIC_TINACMS_CLIENTID,
	token: process.env.PUBLIC_TINACMS_CONTENT_TOKEN,

	build: {
		outputFolder: 'admin',
		publicFolder: 'public'
	},
	media: {
		tina: {
			mediaRoot: '/src/assets/images',
			publicFolder: ''
		}
	},
	schema: {
		collections: [
			{
				name: 'post',
				label: 'Blog Post',
				path: 'src/content/blog',
				format: 'mdx',
				fields: [
					{
						type: 'image',
						label: 'Cover Image',
						required: true,
						name: 'heroImage',
						description: 'The image used for the cover of the post'
					},
					{
						type: 'string',
						label: 'Alt Description',
						required: true,
						name: 'alt',
						description: 'A short description of cover image of the post for accessibility purposes'
					},
					{
						type: 'string',
						label: 'Photo Credis',
						required: true,
						name: 'photoCredits',
						description:
							'The name of the photographer or image credits for the cover image of the post'
					},
					{
						type: 'string',
						required: true,
						name: 'author',
						label: 'Author',
						description: 'Select the author for this post',
						options: [...authorNames]
					},
					{
						type: 'string',
						required: true,
						name: 'category',
						label: 'Category',
						description: 'Select an category for this post',
						options: [...CATEGORIES]
					},
					{
						type: 'string',
						required: true,
						name: 'issue',
						label: 'Issue',
						description: 'Select an issue date for this post',
						options: [...issueNames]
					},
					{
						type: 'string',
						label: 'description',
						required: true,
						name: 'description',
						description: 'A short description of the post'
					},
					{
						name: 'draft',
						label: 'Draft',
						type: 'boolean',
						description: 'If this is checked the post will not be published'
					},
					{
						type: 'string',
						name: 'tags',
						required: true,
						label: 'Tags',
						description: 'Tags for this post',
						list: true,
						ui: {
							component: 'tags'
						}
					},
					{
						type: 'string',
						name: 'title',
						label: 'Title',
						isTitle: true,
						required: true
					},
					{
						type: 'rich-text',
						label: 'Body',
						name: 'SButton',
						isBody: true,
						templates: [
							// Custom Components
							{
								label: 'SButton',
								name: 'SButton',
								fields: [
									{
										type: 'rich-text',
										label: 'SButton',
										name: 'children',
										isBody: true
									}
								]
							}
						]
					}
				]
			}
		]
	},
	search: {
		tina: {
			indexerToken: process.env.PUBLIC_TINACMS_SEARCH_TOKEN,
			stopwordLanguages: ['eng']
		},
		indexBatchSize: 100,
		maxSearchIndexFieldLength: 100
	}
})
