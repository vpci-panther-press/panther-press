import oct2023CoverImage from '../assets/images/oct2023/cover.jpg'
import nov2023CoverImage from '../assets/images/nov2023/cover.png'
import win2023CoverImage from '../assets/images/win2023/cover.png'

export const ISSUES = [
	{
		name: 'October 2023',
		description: 'A recap of October 2023 at Victoria Park CI, our first issue!',
		coverImage: oct2023CoverImage,
		issuuLink: 'https://issuu.com/vp.antherpress/docs/q54gt79wurf'
	},

	{
		name: 'November 2023',
		description:
			'A recap of November 2023 at Victoria Park CI, with many articles featuring Remembrance Day.',
		coverImage: nov2023CoverImage,
		issuuLink: 'https://issuu.com/vp.antherpress/docs/panther_press_november_recap_2023-compressed'
	},

	{
		name: 'Winter 2023-2024',
		description:
			'A recap of the Winter 2023/2024 at Victoria Park CI, with articles featuring the winter concert, exams, and more!',
		coverImage: win2023CoverImage,
		issuuLink: ''
	}
] as const

export function getIssue(name: string) {
	return ISSUES.find((issue) => issue.name === name)
}
