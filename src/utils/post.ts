import { getCollection, getEntry } from 'astro:content'
import type { CollectionEntry } from 'astro:content'
import { sluglify } from './sluglify'

export const getPosts = async (max?: number) => {
	const posts = await getCollection('blog')

	return sortPostsByDate(posts, max)
}

export const getNonArchivedPosts = async (max?: number) => {
	const posts = await getCollection('blog')
	let nonArchivedPosts = []
	for (let post of posts) {
		// console.log('Processing post:', post.slug, 'Issue:', post.data?.issue);
		const issue = await getEntry('issues', sluglify(post.data.issue).toLowerCase())
		if (!issue!.data.archived) {
			nonArchivedPosts.push(post)
		}
	}
	return sortPostsByDate(nonArchivedPosts, max)
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

export const sortIssuesByDate = (issues: CollectionEntry<'issues'>[]) => {
	// idk why this only works when reversed but it works
	return issues
		.sort((b, a) => {
			const aDate = toDate(a.data.name)
			const bDate = toDate(b.data.name)
			return bDate.getTime() - aDate.getTime()
		})
		.reverse()
}

export const toDate = (issue: string) => {
	const seasonToMonth = {
		spring: 2,
		summer: 5,
		autumn: 8,
		fall: 8,
		winter: 11
	}
	const findSeason = /\b(spring|summer|autumn|fall|winter)\b/gi
	const season = issue.split('-')[0].toLowerCase()

	return findSeason.test(issue)
		? //@ts-ignore
			new Date(parseInt(issue.slice(-4)), seasonToMonth[season], 1)
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
