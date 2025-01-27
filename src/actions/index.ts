import { readItem, updateItem } from '@directus/sdk'
import { defineAction } from 'astro:actions'
import { z } from 'astro:schema'
import directus from 'src/lib/directus'

export const server = {
	getLikes: defineAction({
		input: z.object({
			id: z.number()
		}),
		handler: async (input) => {
			const post = await directus.request(readItem('post', input.id))
			return post.likes
		}
	}),
	addLike: defineAction({
		input: z.object({
			id: z.number()
		}),
		handler: async (input) => {
			const post = await directus.request(readItem('post', input.id))
			await directus.request(updateItem('post', input.id, { likes: post.likes + 1 }))
			return post.likes + 1
		}
	}),
	removeLike: defineAction({
		input: z.object({
			id: z.number()
		}),
		handler: async (input) => {
			const post = await directus.request(readItem('post', input.id))
			await directus.request(updateItem('post', input.id, { likes: post.likes - 1 }))
			return post.likes - 1
		}
	})
}
