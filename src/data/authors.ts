export const AUTHORS: Readonly<
	{
		name: string
		bio: string
		pfp: string
	}[]
> = [
	{
		name: 'Author 1',
		bio: 'This is the bio for Author 1',
		pfp: '/author/default.jpg'
	},
	{
		name: 'Author 2',
		bio: '',
		pfp: '/author/default.jpg'
	},
	{
		name: 'Author 3',
		bio: 'This is the bio for Author 3',
		pfp: '/author/default.jpg'
	}
] as const

export function getAuthor(name: string) {
	return AUTHORS.find((author) => author.name === name)
}
