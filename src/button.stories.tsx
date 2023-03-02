import type { Meta, StoryObj } from "@storybook/react";
import { Loader2Icon } from "lucide-react";

import { Button } from "@/button";

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
				<Loader2Icon className="h-4 w-4 shrink-0 animate-spin" />
				Please wait
			</Button>
		);
	},
};
