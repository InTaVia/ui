import type { Meta, StoryObj } from "@storybook/react";

import { Input } from "@/input";
import { Label } from "@/label";

const meta = {
	title: "Components/Input",
	component: Input,
} satisfies Meta<typeof Input>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
	args: {
		id: "email",
		placeholder: "Email",
		type: "email",
	},
	render(args) {
		return (
			<div className="grid w-full max-w-sm items-center gap-1.5">
				<Label htmlFor={args.id}>Email</Label>
				<Input {...args} />
			</div>
		);
	},
};
