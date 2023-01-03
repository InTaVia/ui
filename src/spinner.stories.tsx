import type { Meta, StoryObj } from '@storybook/react'

import { type SpinnerProps, Spinner } from '@/spinner'

const meta: Meta<SpinnerProps> = {
	component: Spinner,
	title: 'Components/Spinner',
}

export default meta

export const Default: StoryObj<SpinnerProps> = {}

export const Small: StoryObj<SpinnerProps> = {
	args: {
		size: 'small',
	},
}

export const Medium: StoryObj<SpinnerProps> = {
	args: {
		size: 'medium',
	},
}

export const Large: StoryObj<SpinnerProps> = {
	args: {
		size: 'large',
	},
}
