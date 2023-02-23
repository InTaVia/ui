import type { Meta, StoryObj } from "@storybook/react";

import { Avatar, AvatarFallback, AvatarImage } from "@/avatar";

const meta = {
	title: "Components/Avatar",
	component: Avatar,
} satisfies Meta<typeof Avatar>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
	args: {},
	render(args) {
		return (
			<Avatar {...args}>
				<AvatarImage src="https://github.com/stefanprobst.png" alt="@stefanprobst" />
				<AvatarFallback>SP</AvatarFallback>
			</Avatar>
		);
	},
};
