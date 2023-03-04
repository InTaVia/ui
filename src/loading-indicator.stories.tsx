import type { Meta, StoryObj } from "@storybook/react";

import { LoadingIndicator } from "@/loading-indicator";

const meta = {
	title: "Components/LoadingIndicator",
	component: LoadingIndicator,
} satisfies Meta<typeof LoadingIndicator>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
	args: {
		label: "Loading...",
	},
	render(args) {
		return <LoadingIndicator {...args} />;
	},
};
