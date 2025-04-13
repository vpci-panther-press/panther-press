/** @type {import("prettier").Config} */
module.exports = {
	// i am just using the standard config, change if you need something else
	...require('prettier-config-standard'),
	printWidth: 100,
	semi: false,
	singleQuote: true,
	jsxSingleQuote: true,
	tabWidth: 2,
	useTabs: true,
	tailwindStylesheet: './src/styles/global.css',
	tailwindFunctions: ['clsx'],

	plugins: [
		require.resolve('prettier-plugin-astro'),
		require.resolve('prettier-plugin-tailwindcss')
	],
	overrides: [
		{
			files: '*.astro',
			options: {
				parser: 'astro'
			}
		}
	]
}
