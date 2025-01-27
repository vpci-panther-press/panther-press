import rss from '@astrojs/rss'
import { siteConfig } from '@/site-config'
import { getPosts, toDate } from '@/utils'
import directus from 'src/lib/directus'
import { readItems } from '@directus/sdk'

export async function GET() {
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
				'date_created',
				{ issue: ['*'] }
			]
		})
	)
	return rss({
		title: siteConfig.title,
		description: siteConfig.description,
		site: import.meta.env.SITE,
		items: posts.map((post) => ({
			title: post.title,
			description: post.description,
			pubDate: post.date_created,
			link: `articles/${post.slug}/`,
			categories: post.tags
		}))
	})
}
