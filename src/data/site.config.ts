interface SiteConfig {
	author: string
	title: string
	description: string
	lang: string
	ogLocale: string
	paginationSize: number
}

export const siteConfig: SiteConfig = {
	author: 'Surya T',
	title: 'VPCI Panther Press',
	description: 'The official student newspaper of VPCI.',
	lang: 'en-CA',
	ogLocale: 'en_CA',
	paginationSize: 2 // Number of posts to show per page
}
