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
			colors: {
				white: '#f8f9fa',
				cs: {
					primary: colours[getSeason()][0],
					secondary: colours[getSeason()][1],
					tertiary: colours[getSeason()][2]
				}
			},
			fontFamily: {
				sans: ['Inter', ...defaultTheme.fontFamily.sans],
				atkinson: ['Atkinson Hyperlegible', ...defaultTheme.fontFamily.sans],
				manrope: ['Manrope', ...defaultTheme.fontFamily.sans]
			},
			gridTemplateColumns: {
				list: 'repeat(auto-fill, minmax(400px, max-content))'
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
