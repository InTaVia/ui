/** @typedef {import('tailwindcss').Config} TailwindConfig */

/** @type {TailwindConfig} */
const config = {
	content: ['./src/**/*.@(css|ts|tsx)'],
	plugins: [],
	presets: [require('./tailwind-preset.config.cjs')],
	theme: {
		extend: {},
	},
}

module.exports = config
