import type { Meta, StoryObj } from "@storybook/react";

import { Label } from "@/label";
import { Switch } from "@/switch";

const meta = {
	title: "Components/Switch",
	component: Switch,
} satisfies Meta<typeof Switch>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
	args: {
		id: "story",
	},
	render(args) {
		return (
			<div className="flex items-center gap-x-2">
				<Switch {...args} />
				<Label htmlFor={args.id}>Airplane Mode</Label>
			</div>
		);
	},
};
