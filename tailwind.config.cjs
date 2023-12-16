/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
	darkMode: 'class',
	content: ['./src/**/*.{astro,html,js,md,mdx,ts}'],
	theme: {
		extend: {
			backgroundSize: {
				'size-200': '200% 150%',
			},
			backgroundPosition: {
				'pos-0': '0% 0%',
				'pos-100': '100% 100%',
			},
			colors: {
				white: '#f8f9fa',
				primary: '#d62828',
				secondary: '#fcbf49',
				tertiary: '#f77f00'
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
	plugins: [require('@tailwindcss/typography')],
}
