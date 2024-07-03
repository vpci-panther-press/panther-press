import { toString } from 'mdast-util-to-string'

/**
 * Injects `minutesRead` into frontmatter processed by Remark.
 */
export function remarkReadingTime() {
	return function (tree: unknown, { data }: any) {
		const textOnPage = tree ? toString(tree) : ''
		const WORDS_PER_MINUTE = 200
		let wordCount = 0
		const regex = /\w+/g
		wordCount = textOnPage.match(regex)!.length
		const time = wordCount ? Math.ceil(wordCount / WORDS_PER_MINUTE) : 0
		const timeText = `${time} minute read`
		data.astro.frontmatter.minutesRead = timeText
	}
}
