import rss from '@astrojs/rss'
import { siteConfig } from '@/site-config'
import { getPosts, toDate } from '@/utils'

export async function GET() {
	const posts = await getPosts()
	return rss({
		title: siteConfig.title,
		description: siteConfig.description,
		site: import.meta.env.SITE,
		items: posts.map((post) => ({
			title: post.title,
			description: post.description,
			pubDate: toDate(post.issue.name),
			link: `articles/${post.slug}/`
		}))
	})
}
