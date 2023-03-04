import type { Meta, StoryObj } from "@storybook/react";

import { Button } from "@/button";
import { LoadingIndicator } from "@/loading-indicator";

const meta = {
	title: "Components/Button",
	component: Button,
} satisfies Meta<typeof Button>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
	args: {},
	render(args) {
		return <Button {...args}>Click me</Button>;
	},
};

export const Loading: Story = {
	args: {
		disabled: true,
	},
	render(args) {
		return (
			<Button {...args}>
				<LoadingIndicator size="sm" />
				Please wait
			</Button>
		);
	},
};
