import type { Meta, StoryObj } from '@storybook/react'

import { type CheckBoxProps, CheckBox } from '@/checkbox'

const meta: Meta<CheckBoxProps> = {
	component: CheckBox,
	title: 'Components/CheckBox',
}

export default meta

export const Default: StoryObj<CheckBoxProps> = {
	args: {
		children: 'Check me',
	},
}

export const Required: StoryObj<CheckBoxProps> = {
	args: {
		...Default.args,
		isRequired: true,
	},
}

export const Disabled: StoryObj<CheckBoxProps> = {
	args: {
		...Default.args,
		isDisabled: true,
	},
}

export const WithHelpText: StoryObj<CheckBoxProps> = {
	args: {
		...Default.args,
		description: 'Consider clicking me',
	},
}

export const WithErrorMessage: StoryObj<CheckBoxProps> = {
	args: {
		...Default.args,
		errorMessage: 'This might be incorrect',
		validationState: 'invalid',
	},
}
