// keystatic.config.ts
import { config, fields, collection } from '@keystatic/core'
import { wrapper } from '@keystatic/core/content-components'
import { CATEGORIES } from 'src/data/categories.ts'
// import { ISSUES } from 'src/data/issues.ts'
// import { AUTHORS } from 'src/data/authors.ts'

//const issueNames = ISSUES.map((issue) => ({ label: issue.name, value: issue.name }))
//const authorNames = AUTHORS.map((author) => ({ label: author.name, value: author.name }))
// const currentIssueImageFolder = 'src/assets/images/' + '**'
const categoryNames = CATEGORIES.map((category) => ({ label: category, value: category }))

export default config({
	storage: {
		kind: 'github',
		repo: 'vpci-panther-press/panther-press'
	},
	collections: {
		posts: collection({
			label: 'Blog',
			slugField: 'title',
			path: 'src/content/blog/*',
			format: { contentField: 'content' },
			schema: {
				title: fields.slug({
					name: {
						label: 'Title',
						description: 'The title of the post (max 80 characters)',
						validation: { isRequired: true }
					}
				}),
				description: fields.text({
					label: 'Description',
					description: 'A short, one sentence description of the post',
					validation: { isRequired: true }
				}),
				heroImage: fields.image({
					label: 'Cover Image',
					description: 'The image used for the cover of the post',
					directory: '/src/assets/images/',
					publicPath: '/src/assets/images/',
					validation: { isRequired: true }
				}),
				alt: fields.text({
					label: 'Alt Description',
					description: 'A short description of cover image of the post for accessibility purposes',
					validation: { isRequired: true }
				}),
				photoCredits: fields.text({
					label: 'Photo Credits',
					description:
						'The name of the photographer or image credits for the cover image of the post',
					validation: { isRequired: true }
				}),
				author: fields.multiRelationship({
					label: 'Authors',
					collection: 'authors',
					description: 'Select the author(s) for this post',
					validation: { length: { min: 1 } }
				}),
				issue: fields.relationship({
					label: 'Issue',
					description: 'Select the issue for this post',
					collection: 'issues',
					validation: { isRequired: true }
				}),
				category: fields.select({
					label: 'Category',
					description: 'Select the category for this post',
					options: categoryNames,
					defaultValue: categoryNames[0].value
				}),
				tags: fields.array(fields.text({ label: 'Tag' }), {
					label: 'Tag',
					description: 'Add tags to the post. Max 3 tags.',
					itemLabel: (props) => props.value,
					validation: { length: { min: 1, max: 3 } }
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
		}),
		authors: collection({
			label: 'Authors',
			slugField: 'name',
			path: 'src/content/authors/*',

			schema: {
				name: fields.slug({
					name: {
						label: 'Name',
						validation: { isRequired: true }
					}
				}),
				bio: fields.text({ label: 'Bio' }),
				photo: fields.image({
					label: 'Profile Picture',
					description: "The image used for the author's profile picture",
					directory: '/src/assets/authors/',
					publicPath: '/src/assets/authors/'
				}),
				alumni: fields.checkbox({
					label: 'Alumni',
					description: 'If ticked, the author will have an alumni badge on their profile',
					defaultValue: false
				})
			}
		}),
		issues: collection({
			label: 'Issues',
			slugField: 'name',
			path: 'src/content/issues/*',
			schema: {
				name: fields.slug({
					name: {
						label: 'Name',
						validation: { isRequired: true }
					}
				}),
				description: fields.text({ label: 'Description' }),
				coverImage: fields.image({
					label: 'Cover Image',
					description: "The issue's cover image",
					directory: '/src/assets/covers/',
					publicPath: '/src/assets/covers/',
					validation: { isRequired: true }
				}),
				issuuLink: fields.url({ label: 'Issuu Link', validation: { isRequired: true } }),
				archived: fields.checkbox({
					label: 'Archived',
					description: 'If ticked, the issue will be hidden on the website',
					defaultValue: false
				})
			}
		})
	}
})
