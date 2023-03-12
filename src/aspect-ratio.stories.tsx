import { type Meta, type StoryObj } from "@storybook/react";

import { AspectRatio } from "@/aspect-ratio.js";

const meta = {
	title: "Components/AspectRatio",
	component: AspectRatio,
} satisfies Meta<typeof AspectRatio>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
	args: {
		ratio: 16 / 9,
	},
	render(args) {
		return (
			<AspectRatio {...args} className="bg-neutral-50 dark:bg-neutral-800">
				<img
					src="https://source.unsplash.com/random?w=800&dpr=2&q=80"
					alt=""
					className="absolute inset-0 rounded-md object-cover"
				/>
			</AspectRatio>
		);
	},
};
