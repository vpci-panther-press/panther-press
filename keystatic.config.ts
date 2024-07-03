// keystatic.config.ts
import { config, fields, collection } from '@keystatic/core'
import { wrapper } from '@keystatic/core/content-components'
import { AUTHORS } from 'src/data/authors.ts'
import { CATEGORIES } from 'src/data/categories.ts'
import { ISSUES } from 'src/data/issues.ts'

const issueNames = ISSUES.map((issue) => ({ label: issue.name, value: issue.name }))
const authorNames = AUTHORS.map((author) => ({ label: author.name, value: author.name }))
const categoryNames = CATEGORIES.map((category) => ({ label: category, value: category }))
const currentIssueImageFolder = 'src/assets/images/' + ISSUES[ISSUES.length - 1].folder + '/**'

export default config({
	storage: {
		kind: 'local'
	},
	collections: {
		posts: collection({
			label: 'Blog',
			slugField: 'title',
			path: 'src/content/blog/*',
			format: { contentField: 'content' },
			schema: {
				title: fields.slug({
					name: { label: 'Title', description: 'The title of the post (max 80 characters)' }
				}),
				description: fields.text({
					label: 'Description',
					description: 'A short, one sentence description of the post'
				}),
				heroImage: fields.pathReference({
					label: 'Cover Image',
					description: 'The image used for the cover of the post',
					pattern: currentIssueImageFolder
				}),
				alt: fields.text({
					label: 'Alt Description',
					description: 'A short description of cover image of the post for accessibility purposes'
				}),
				photoCredits: fields.text({
					label: 'Photo Credits',
					description:
						'The name of the photographer or image credits for the cover image of the post'
				}),

				author: fields.multiselect({
					label: 'Authors',
					options: authorNames,
					description: 'Select the author(s) for this post'
				}),
				issue: fields.select({
					label: 'Issue',
					description: 'Select the issue for this post',
					options: issueNames,
					defaultValue: issueNames[issueNames.length - 1].value
				}),
				category: fields.select({
					label: 'Category',
					description: 'Select the category for this post',
					options: categoryNames,
					defaultValue: categoryNames[0].value
				}),
				tags: fields.array(fields.text({ label: 'Tag' }), {
					label: 'Tag',
					description: 'Add tags to the post',
					itemLabel: (props) => props.value
				}),
				content: fields.mdx({
					label: 'Content',
					components: {
						Centered: wrapper({
							label: 'Centered',
							schema: {
								content: fields.text({ label: 'Content' })
							}
						})
					}
				})
			}
		})
	}
})
