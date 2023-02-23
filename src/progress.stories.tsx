import type { Meta, StoryObj } from "@storybook/react";
import { useEffect, useState } from "react";

import { Progress } from "@/progress";

const meta = {
	title: "Components/Progress",
	component: Progress,
} satisfies Meta<typeof Progress>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
	args: {},
	render(args) {
		// eslint-disable-next-line react-hooks/rules-of-hooks
		const [progress, setProgress] = useState(10);

		// eslint-disable-next-line react-hooks/rules-of-hooks
		useEffect(() => {
			const timer = setTimeout(() => {
				setProgress(40);
			}, 500);

			return () => {
				clearTimeout(timer);
			};
		}, []);

		return <Progress {...args} value={progress} className="w-[60%]" />;
	},
};
