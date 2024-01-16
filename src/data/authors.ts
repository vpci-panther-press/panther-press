export const AUTHORS: Readonly<
	{
		name: string
		bio: string
		pfp: string
	}[]
> = [
	{
		name: 'Zaina Khan',
		bio: '',
		pfp: ''
	},
	{
		name: 'Ellen Zhang',
		bio: '',
		pfp: ''
	},
	{
		name: 'Subu Bhattarai',
		bio: '',
		pfp: ''
	},
	{
		name: 'Ayaa Al-Sultany',
		bio: '',
		pfp: ''
	},
	{
		name: 'Thomas Li',
		bio: '',
		pfp: ''
	},
	{
		name: 'Lucy Chen',
		bio: '',
		pfp: ''
	},
	{
		name: 'Jeffrey Zhao',
		bio: '',
		pfp: ''
	},
	{
		name: 'Gloria Chen',
		bio: '',
		pfp: ''
	},
	{
		name: 'Jasmine Chen',
		bio: '',
		pfp: ''
	},
	{
		name: 'Science Club',
		bio: '',
		pfp: ''
	},
	{
		name: 'Shreyaa Subaeasan',
		bio: '',
		pfp: ''
	}
] as const

export function getAuthor(name: string) {
	return AUTHORS.find((author) => author.name === name)
}
