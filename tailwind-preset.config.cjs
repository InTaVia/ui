/** @typedef {import('tailwindcss').Config} TailwindConfig */

const colors = require('tailwindcss/colors')
const fontSizes = require('tailwindcss/defaultTheme').fontSize

/** @type {TailwindConfig} */
const config = {
	content: [],
	corePlugins: {
		backgroundOpacity: false,
		borderOpacity: false,
		divideOpacity: false,
		placeholderOpacity: false,
		ringOpacity: false,
		textOpacity: false,
	},
	plugins: [],
	theme: {
		extend: {
			borderRadius: {
				sm: '3px',
			},
			colors: {
				neutral: { 0: colors.white, ...colors.neutral, 1000: colors.black },
				brand: colors.neutral,
				negative: colors.red,
				positive: colors.green,
			},
			fontFamily: {
				sans: ['Noto Sans DisplayVariable', 'ui-sans-serif', 'system-ui', 'sans-serif'],
			},
			fontSize: {
				xs: ['0.625rem', { lineHeight: '0.875rem' }],
				sm: fontSizes.xs,
				base: fontSizes.sm,
				lg: fontSizes.base,
				xl: fontSizes.lg,
				'2xl': fontSizes.xl,
				'3xl': fontSizes['2xl'],
				'4xl': fontSizes['3xl'],
				'5xl': fontSizes['4xl'],
				'6xl': fontSizes['5xl'],
				'7xl': fontSizes['6xl'],
				'8xl': fontSizes['7xl'],
				'9xl': fontSizes['8xl'],
				'10xl': fontSizes['9xl'],
			},
		},
	},
}

module.exports = config
