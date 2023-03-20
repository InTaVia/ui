import { type Meta, type StoryObj } from "@storybook/react";

import { Icon } from "@/storybook/icons.js";
import { Toggle } from "@/toggle.js";

const meta = {
	title: "Components/Toggle",
	component: Toggle,
} satisfies Meta<typeof Toggle>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
	args: {
		"aria-label": "Toggle italic",
	},
	render(args) {
		return (
			<Toggle {...args}>
				<Icon icon="italic-icon" className="h-4 w-4" />
			</Toggle>
		);
	},
};
