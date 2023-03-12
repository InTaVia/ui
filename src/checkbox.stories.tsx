import { type Meta, type StoryObj } from "@storybook/react";

import { CheckBox } from "@/checkbox.js";

const meta = {
	title: "Components/CheckBox",
	component: CheckBox,
} satisfies Meta<typeof CheckBox>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
	args: {
		defaultChecked: true,
		id: "story",
	},
	render(args) {
		return (
			<div className="flex items-center gap-2">
				<CheckBox {...args} />
				<label
					htmlFor={args.id}
					className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
				>
					Check this
				</label>
			</div>
		);
	},
};
