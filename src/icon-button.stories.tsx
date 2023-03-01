import type { Meta, StoryObj } from "@storybook/react";
import { Trash2Icon } from "lucide-react";

import { IconButton } from "@/icon-button";

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
				<Trash2Icon className="h-5 w-5" />
			</IconButton>
		);
	},
};