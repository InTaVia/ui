import { type Meta, type StoryObj } from "@storybook/react";

import { Slider } from "@/slider.js";

const meta = {
	title: "Components/Slider",
	component: Slider,
} satisfies Meta<typeof Slider>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
	args: {
		defaultValue: [50],
		max: 100,
		step: 1,
	},
	render(args) {
		return <Slider {...args} className="w-[60%]" />;
	},
};
