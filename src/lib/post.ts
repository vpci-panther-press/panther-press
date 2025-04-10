import directus, { type Issue, type Post } from 'src/lib/directus'
import { readItem, readItems } from '@directus/sdk'

export const getPosts = async (max?: number): Promise<Post[]> => {
	const posts = await directus.request(
		readItems('post', {
			fields: [
				'id',
				'title',
				'description',
				'slug',
				//@ts-expect-error
				'authors.*',
				'issue',
				'heroImage',
				'alt',
				'photoCredits',
				'category',
				'tags',
				'readTime',
				{ issue: ['*'] }
			],
			limit: max ? max : -1
		})
	)

	return sortPostsByDate(posts, max)
}

export const sortPostsByDate = (posts: Post[], max?: number) => {
	return posts
		.sort((a, b) => {
			const aDate = toDate(a.issue.name)
			const bDate = toDate(b.issue.name)
			return bDate.getTime() - aDate.getTime()
		})
		.slice(0, max)
}

export const getNonArchivedPosts = async (max?: number) => {
	const posts = await getPosts()
	let nonArchivedPosts = []
	for (let post of posts) {
		const issue = await directus.request(readItem('issue', post.issue.id))
		if (!issue.archived) {
			nonArchivedPosts.push(post)
		}
	}
	return sortPostsByDate(nonArchivedPosts, max)
}

export const sortIssuesByDate = (issues: Issue[]) => {
	// idk why this only works when reversed but it works
	return issues
		.sort((b, a) => {
			const aDate = toDate(a.name)
			const bDate = toDate(b.name)
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
	const posts = await getPosts()
	const tags = new Set(posts.map((post) => post.tags).flat())
	return Array.from(tags)
}

export const getPostByTag = async (tag: string) => {
	const posts = await getPosts()
	return posts.filter((post) => post.tags.includes(tag))
}
