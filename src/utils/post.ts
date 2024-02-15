import { getCollection } from 'astro:content'
import type { CollectionEntry } from 'astro:content'

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

	return sortPostsByDate(posts, max)
}

export const sortPostsByDate = (posts: CollectionEntry<'blog'>[], max?: number) => {
	return posts
		.filter((post) => !post.data.draft)
		.sort((a, b) => {
			const aDate = toDate(a.data.issue)
			const bDate = toDate(b.data.issue)
			return bDate.getTime() - aDate.getTime()
		})
		.slice(0, max)
}

const toDate = (issue: string) => {
	const seasonToMonth = {
		spring: 4,
		summer: 8,
		autumn: 10,
		fall: 10,
		winter: 2
	}
	const findSeason = /\b(spring|summer|autumn|fall|winter)\b/gi
	const season = issue.split(' ')[0]
	// @ts-expect-error
	return findSeason.test(issue)
		? new Date(parseInt(issue.slice(-4)), seasonToMonth[season], 1)
		: new Date(`1 ${issue}`)
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
