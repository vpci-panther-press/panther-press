const defaultTheme = require('tailwindcss/defaultTheme')
const colors = require('tailwindcss/colors')
const { default: flattenColorPalette } = require('tailwindcss/lib/util/flattenColorPalette')

const colours = {
	Spring: ['#69893e', '#92b573', '#a482a3'],
	// inspired by the colours of flowers
	Summer: ['#BF70B3', '#EBB3DF', '#568A36'],
	// shades of pink/purple and green: to be changed(?)
	Autumn: ['#d62828', '#fcbf49', '#f77f00'],
	// original panther press colours since we started in autumn
	Winter: ['#3394b7', '#acccd8', '#d04763']
	// shades of blue and teritary red
}

function getSeason(date = new Date()) {
	let year = date.getFullYear()
	const currentTime = date.getTime()
	const seasons = {
		Spring: new Date(Date.UTC(year, 2, 20)).getTime(), // March 20
		Summer: new Date(Date.UTC(year, 5, 21)).getTime(), // June 21
		Autumn: new Date(Date.UTC(year, 8, 23)).getTime(), // September 23
		Winter: new Date(Date.UTC(year, 11, 21)).getTime() // December 21
	}
	if (currentTime >= seasons.Spring && currentTime < seasons.Summer) {
		return 'Spring'
	} else if (currentTime >= seasons.Summer && currentTime < seasons.Autumn) {
		return 'Summer'
	} else if (currentTime >= seasons.Autumn && currentTime < seasons.Winter) {
		return 'Autumn'
	} else {
		return 'Winter'
	}
}

/** @type {import('tailwindcss').Config} */
module.exports = {
	darkMode: 'class',
	content: [
		'./src/**/*.{astro,html,js,md,mdx,ts,tsx}',
		'./src/**/**/*.{astro,html,js,md,mdx,ts,tsx}'
	],
	theme: {
    	extend: {
    		backgroundSize: {
    			'size-200': '200% 150%'
    		},
    		backgroundPosition: {
    			'pos-0': '0% 0%',
    			'pos-100': '100% 100%'
    		},
			boxShadow:{
				input: `0px 2px 3px -1px rgba(0,0,0,0.1), 0px 1px 0px 0px rgba(25,28,33,0.02), 0px 0px 0px 1px rgba(25,28,33,0.08)`,
			},
    		colors: {
    			white: '#f8f9fa',
    			cs: {
					primary: colours[getSeason()][0],
					secondary: colours[getSeason()][1],
					tertiary: colours[getSeason()][2]
    			},
    			background: 'hsl(var(--background))',
    			foreground: 'hsl(var(--foreground))',
    			card: {
    				DEFAULT: 'hsl(var(--card))',
    				foreground: 'hsl(var(--card-foreground))'
    			},
    			popover: {
    				DEFAULT: 'hsl(var(--popover))',
    				foreground: 'hsl(var(--popover-foreground))'
    			},
    			primary: {
    				DEFAULT: 'hsl(var(--primary))',
    				foreground: 'hsl(var(--primary-foreground))'
    			},
    			secondary: {
    				DEFAULT: 'hsl(var(--secondary))',
    				foreground: 'hsl(var(--secondary-foreground))'
    			},
    			muted: {
    				DEFAULT: 'hsl(var(--muted))',
    				foreground: 'hsl(var(--muted-foreground))'
    			},
    			accent: {
    				DEFAULT: 'hsl(var(--accent))',
    				foreground: 'hsl(var(--accent-foreground))'
    			},
    			destructive: {
    				DEFAULT: 'hsl(var(--destructive))',
    				foreground: 'hsl(var(--destructive-foreground))'
    			},
    			border: 'hsl(var(--border))',
    			input: 'hsl(var(--input))',
    			ring: 'hsl(var(--ring))',
    			chart: {
    				'1': 'hsl(var(--chart-1))',
    				'2': 'hsl(var(--chart-2))',
    				'3': 'hsl(var(--chart-3))',
    				'4': 'hsl(var(--chart-4))',
    				'5': 'hsl(var(--chart-5))'
    			}
    		},
    		fontFamily: {
    			sans: [
    				'Inter',
                    ...defaultTheme.fontFamily.sans
                ],
    			atkinson: [
    				'Atkinson Hyperlegible',
                    ...defaultTheme.fontFamily.sans
                ],
    			manrope: [
    				'Manrope',
                    ...defaultTheme.fontFamily.sans
                ]
    		},
    		gridTemplateColumns: {
    			list: 'repeat(auto-fill, minmax(400px, max-content))'
    		},
    		borderRadius: {
    			lg: 'var(--radius)',
    			md: 'calc(var(--radius) - 2px)',
    			sm: 'calc(var(--radius) - 4px)'
    		}
    	}
    },

	plugins: [require('@tailwindcss/typography'), addVariablesForColors]
}

// This plugin adds each Tailwind color as a global CSS variable for only custom colours (cs = color scheme)
function addVariablesForColors({ addBase, theme }) {
	let allColors = flattenColorPalette(theme('colors.cs'))
	let newVars = Object.fromEntries(Object.entries(allColors).map(([key, val]) => [`--${key}`, val]))
	addBase({
		':root': newVars
	})
}
