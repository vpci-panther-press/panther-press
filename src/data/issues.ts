export const ISSUES = [
	{
		name: 'October 2023',
		description: 'This is the description for the October 2023 issue',
		coverImage: '/oct2023/cover.jpg',
		issuuLink: 'https://issuu.com/vp.antherpress/docs/q54gt79wurf'
	},

	{
		name: 'November 2023',
		description: 'This is the description for the November 2023 issue',
		coverImage: '/nov2023/cover.png',
		issuuLink: 'https://issuu.com/vp.antherpress/docs/panther_press_november_recap_2023-compressed'
	}
] as const

export function getIssue(name: string) {
	return ISSUES.find((issue) => issue.name === name)
}
