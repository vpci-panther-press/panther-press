
const defaultTheme = require('tailwindcss/defaultTheme')
const colors = require("tailwindcss/colors");
const {
  default: flattenColorPalette,
} = require("tailwindcss/lib/util/flattenColorPalette");

/** @type {import('tailwindcss').Config} */
module.exports = {
	darkMode: 'class',
	content: ['./src/**/*.{astro,html,js,md,mdx,ts,tsx}', './src/**/**/*.{astro,html,js,md,mdx,ts,tsx}'],
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
	plugins: [require('@tailwindcss/typography'), addVariablesForColors],
}

// This plugin adds each Tailwind color as a global CSS variable, e.g. var(--gray-200).
function addVariablesForColors({ addBase, theme }) {
	let allColors = flattenColorPalette(theme("colors"));
	let newVars = Object.fromEntries(
	  Object.entries(allColors).map(([key, val]) => [`--${key}`, val])
	);
   
	addBase({
	  ":root": newVars,
	});
  }
