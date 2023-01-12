import type { Meta, StoryObj } from '@storybook/react'

import { type TextFieldProps, TextField } from '@/text-field'

const meta: Meta<TextFieldProps> = {
	component: TextField,
	title: 'Components/TextField',
}

export default meta

export const Default: StoryObj<TextFieldProps> = {
	args: {},
}

export const WithLabel: StoryObj<TextFieldProps> = {
	args: {
		label: 'Name',
	},
}

export const Required: StoryObj<TextFieldProps> = {
	args: {
		...WithLabel.args,
		isRequired: true,
	},
}

export const Disabled: StoryObj<TextFieldProps> = {
	args: {
		...WithLabel.args,
		isDisabled: true,
	},
}

export const WithHelpText: StoryObj<TextFieldProps> = {
	args: {
		...WithLabel.args,
		description: 'Consider clicking me',
	},
}

export const WithErrorMessage: StoryObj<TextFieldProps> = {
	args: {
		...WithLabel.args,
		errorMessage: 'This might be incorrect',
		validationState: 'invalid',
	},
}
