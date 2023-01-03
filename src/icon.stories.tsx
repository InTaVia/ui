import type { Meta, StoryObj } from '@storybook/react'

import { type IconProps, Icon } from '@/icon'

const meta: Meta<IconProps> = {
	component: Icon,
	title: 'Components/Icon',
}

export default meta

export const Default: StoryObj<IconProps> = {
	args: {
		href: '/assets/icons.svg#chevron-down-24',
	},
}

export const WithLabel: StoryObj<IconProps> = {
	args: {
		...Default.args,
		'aria-label': 'Chevron pointing down',
	},
}

export const WithTitle: StoryObj<IconProps> = {
	args: {
		...Default.args,
		title: 'Chevron pointing down',
	},
}
