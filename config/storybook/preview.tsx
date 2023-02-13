import "@fontsource/inter/variable-full.css";
import "tailwindcss/tailwind.css";
import "~/config/storybook/preview.css";

import type { Decorator, Parameters as StorybookParameters } from "@storybook/react";

import { Main } from "@/decorators/main.decorator";

export const decorators: Array<Decorator> = [Main];

export const globalTypes = {
	colorScheme: {
		name: "color-scheme",
		description: "Toggle color scheme",
		defaultValue: "light",
		toolbar: {
			icon: "mirror",
			items: ["light", "dark"],
		},
	},
};

export const parameters: StorybookParameters = {
	actions: {
		argTypesRegex: "^on[A-Z].*",
	},
	backgrounds: {
		disable: true,
	},
	controls: {
		matchers: {
			color: /(background|color)$/i,
			date: /Date$/,
		},
	},
};
