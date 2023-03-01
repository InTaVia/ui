import type { StorybookConfig } from "@storybook/react-vite";

const config: StorybookConfig = {
	addons: [
		"@storybook/addon-essentials",
		"@storybook/addon-interactions",
		"@storybook/addon-a11y",
		"@storybook/addon-links",
	],
	docs: {
		autodocs: true,
	},
	framework: {
		name: "@storybook/react-vite",
		options: {},
	},
	// staticDirs: ["../../public/"],
	stories: ["../../src/**/*.stories.@(ts|tsx)"],
};

export default config;
