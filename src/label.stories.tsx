import type { Meta, StoryObj } from "@storybook/react";

import { Label } from "@/label";

const meta = {
	title: "Components/Label",
	component: Label,
} satisfies Meta<typeof Label>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
	args: {},
	render(args) {
		return <Label {...args}>The label</Label>;
	},
};
