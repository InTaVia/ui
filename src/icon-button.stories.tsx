import { type Meta, type StoryObj } from "@storybook/react";

import { IconButton } from "@/icon-button.js";
import { Icon } from "@/storybook/icons.js";

const meta = {
	title: "Components/IconButton",
	component: IconButton,
} satisfies Meta<typeof IconButton>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
	args: {
		label: "Delete",
	},
	render(args) {
		return (
			<IconButton {...args}>
				<Icon icon="trash-icon" className="h-5 w-5 shrink-0" />
			</IconButton>
		);
	},
};
