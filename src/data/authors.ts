type Author = Readonly<
	{
		name: string
		bio: string
		pfp: string
	}[]
>
export const AUTHORS: Author = [
	{
		name: 'Zaina Khan',
		bio: 'Ever since birth, Zaina Khan has been devoured by the books to the point that she may no longer be existing in reality. She has decided that she will now use the same mechanism to ensnare other innocent souls.',
		pfp: ''
	},
	{
		name: 'Ellen Zhang',
		bio: 'Ellen Zhang is a Grade 10 student and a writer on the News Board for Panther Press. She covers athletics at VPCI. Ellen was previously an editor of the school newspaper at her elementary school. Aside from writing, she also enjoys drawing, singing, playing soccer, and skating. You can contact her @ellenczhang on Instagram.',
		pfp: '/author/ellen.png'
	},
	{
		name: 'Subu Bhattarai',
		bio: '',
		pfp: ''
	},
	{
		name: 'Ayaa Al-Sultany',
		bio: 'As soon as she opened her eyes, Ayaa Al-Sultany knew she was destined to become a writer. Consuming whatever media the world had to offer, hunger never ceasing as she basks in the realm of fiction. She put her pen to her paper and wrote word after word day and night. She is a cog in the machine of stories, pumping out masterful pieces.',
		pfp: '/author/ayaa.jpg'
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
		bio: 'Something funny.',
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
		pfp: '/author/science-club.png'
	},
	{
		name: 'Shreyaa Subaeasan',
		bio: '',
		pfp: ''
	},
	{
		name: 'Manal Hussain',
		bio: '',
		pfp: ''
	},
	{
		name: 'Mariam Hussain',
		bio: 'Mariam is highly cynical, sometimes pessimistic and a very avid reader. Don’t be let down if she doesn’t always respond to you since she’s often taking a vacation to the Victorian era with a new book she’s reading.',
		pfp: ''
	},
	{
		name: 'Zahraa Jahangir',
		bio: '',
		pfp: ''
	},
	{
		name: 'Eshan Kiritharan',
		bio: '',
		pfp: ''
	},
	{
		name: 'Cora Tian',
		bio: '',
		pfp: ''
	},
	{
		name: 'VP Lit',
		bio: "Victoria Park's Literature Club",
		pfp: ''
	}
] as const

export function getAuthor(name: string) {
	return AUTHORS.find((author) => author.name === name)
}

export function getAuthors() {
	return AUTHORS.map((author) => author.name)
}

export function getAuthorsData(props: string[]) {
	return props.map((author) => AUTHORS.find((a) => a.name === author))
}
