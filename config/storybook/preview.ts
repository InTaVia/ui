import '@fontsource/noto-sans-display/variable-full.css'
import '@fontsource/noto-sans-display/variable-full-italic.css'
import 'tailwindcss/tailwind.css'
import './preview.css'

import type { Parameters as StorybookParameters } from '@storybook/react'

export const parameters: StorybookParameters = {
	actions: {
		argTypesRegex: '^on[A-Z].*',
	},
	controls: {
		matchers: {
			color: /(background|color)$/i,
			date: /Date$/,
		},
	},
}
