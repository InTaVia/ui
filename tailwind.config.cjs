/** @typedef {import('tailwindcss').Config} TailwindConfig */

const preset = require("./public/tailwind-preset.config.cjs");

/** @type {TailwindConfig} */
const config = {
	content: ["./src/**/*.@(css|ts|tsx)"],
	darkMode: ["class", '[data-color-scheme="dark"]'],
	plugins: [],
	presets: [preset],
	theme: {
		extend: {
			fontFamily: {
				sans: ["InterVariable", "ui-sans-serif", "system-ui", "sans-serif"],
			},
		},
	},
};

module.exports = config;
