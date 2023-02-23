/** @typedef {import('tailwindcss').Config} TailwindConfig */

// @ts-expect-error Missing module declaration.
const animatePlugin = require("tailwindcss-animate");
const lineClampPlugin = require("@tailwindcss/line-clamp");
const colors = require("tailwindcss/colors");

const neutral = { 0: colors.white, ...colors.slate, 1000: colors.black };
const negative = colors.red;

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
	darkMode: ["class", '[data-color-scheme="dark"]'],
	plugins: [animatePlugin, lineClampPlugin],
	theme: {
		extend: {
			colors: {
				neutral,
				negative,
			},
			fontFamily: {
				sans: ["InterVariable", "ui-sans-serif", "system-ui", "sans-serif"],
			},
			keyframes: {
				"accordion-down": {
					from: { height: "0" },
					to: { height: "var(--radix-accordion-content-height)" },
				},
				"accordion-up": {
					from: { height: "var(--radix-accordion-content-height)" },
					to: { height: "0" },
				},
			},
			animation: {
				"accordion-down": "accordion-down 0.2s ease-out",
				"accordion-up": "accordion-up 0.2s ease-out",
			},
		},
	},
};

module.exports = config;
