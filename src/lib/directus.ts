import { createDirectus, rest } from '@directus/sdk'

type Author = {
	id: number
	name: string
	slug: string
	bio: string | null
	photo?: string | null
	alumni: boolean
	post?: number[] | Post_Author[]
}

type Issue = {
	id: number
	name: string
	slug: string
	coverImage: string
	description: string
	issuuLink: string
	archived: boolean
}

type Post = {
	id: number
	title: string
	slug: string
	description: string
	heroImage: string
	alt: string
	photoCredits: string
	category: string
	issue: Issue
	authors: Post_Author[]
	tags: string[]
	content: string
	readTime: string
}

interface Post_Author {
	id: number
	post_id: string | Post
	author_id: number | Author
}

type Schema = {
	post: Post[]
	author: Author[]
	issue: Issue[]
}

const directus = createDirectus<Schema>('https://directus.picafe.me').with(rest())
const directusAssetsUrl = 'https://directus.picafe.me/assets/'

export default directus
export { directusAssetsUrl }
export type { Post, Author, Issue, Post_Author }
