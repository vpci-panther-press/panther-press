import { getCollection } from 'astro:content'

export const getCategories = async () => {
	const posts = await getCollection('blog')
	const categories = new Set(posts.map((post) => post.data.category))
	return Array.from(categories)
}

export const getIssues = async () => {
	const posts = await getCollection('blog')
	const issues = new Set(posts.map((post) => post.data.issue))
	return Array.from(issues)
}

export const getPosts = async (max?: number) => {
	const posts = await getCollection('blog')

	const sortedPosts = posts
		.filter((post) => !post.data.draft)
		.sort((a, b) => {
			const issueDateA = new Date(`1 ${a.data.issue}`)
			const issueDateB = new Date(`1 ${b.data.issue}`)

			return issueDateB.getTime() - issueDateA.getTime()
		})
		.slice(0, max)

	return sortedPosts
}

export const getTags = async () => {
	const posts = await getCollection('blog')
	const tags = new Set(posts.map((post) => post.data.tags).flat())
	return Array.from(tags)
}

export const getPostByTag = async (tag: string) => {
	const posts = await getPosts()
	return posts.filter((post) => post.data.tags.includes(tag))
}

export const filterPostsByIssue = async (issue: string) => {
	const posts = await getPosts()
	return posts.filter((post) => post.data.issue === issue)
}

export const filterPostsByAuthor = async (author: string) => {
	const posts = await getPosts()
	return posts.filter((post) => post.data.author.includes(author))
}

export const filterPostsByCategory = async (category: string) => {
	const posts = await getPosts()
	return posts.filter((post) => post.data.category.toLowerCase() === category)
}
