import { type Meta, type StoryObj } from "@storybook/react";

import { Label } from "@/label.js";
import { Textarea } from "@/textarea.js";

const meta = {
	title: "Components/Textarea",
	component: Textarea,
} satisfies Meta<typeof Textarea>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
	args: {
		id: "message",
		placeholder: "Type your message here.",
	},
	render(args) {
		return (
			<div className="grid w-full max-w-sm items-center gap-1.5">
				<Label htmlFor={args.id}>Message</Label>
				<Textarea {...args} />
			</div>
		);
	},
};
