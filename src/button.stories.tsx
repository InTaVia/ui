import Icon from '@heroicons/react/24/outline/StopIcon'
import type { Meta, StoryObj } from '@storybook/react'

import { type ButtonProps, Button } from '@/button'

const meta: Meta<ButtonProps> = {
	component: Button,
	title: 'Components/Button',
	args: {
		children: 'Click me',
	},
	argTypes: {
		onClick: { action: 'click' },
	},
}

export default meta

export const Default: StoryObj<ButtonProps> = {}

export const Small: StoryObj<ButtonProps> = {
	args: {
		size: 'small',
	},
}

export const Medium: StoryObj<ButtonProps> = {
	args: {
		size: 'medium',
	},
}

export const Large: StoryObj<ButtonProps> = {
	args: {
		size: 'large',
	},
}

export const WithIcon: StoryObj<ButtonProps> = {
	args: {
		children: [<Icon key="icon" className="w-5 h-5" />, 'Click me'],
	},
}
