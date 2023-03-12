import { type Meta, type StoryObj } from "@storybook/react";
import { ItalicIcon } from "lucide-react";

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
				<ItalicIcon aria-hidden="true" className="h-4 w-4" />
			</Toggle>
		);
	},
};
