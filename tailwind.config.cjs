/** @typedef {import('tailwindcss').Config} TailwindConfig */

/** @type {TailwindConfig} */
const config = {
	content: ["./src/**/*.@(css|ts|tsx)"],
	darkMode: ["class", '[data-color-scheme="dark"]'],
	plugins: [],
	presets: [require("./tailwind-preset.config.cjs")],
	theme: {
		extend: {
			fontFamily: {
				sans: ["InterVariable", "ui-sans-serif", "system-ui", "sans-serif"],
			},
		},
	},
};

module.exports = config;
