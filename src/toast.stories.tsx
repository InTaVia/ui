import type { Meta, StoryObj } from "@storybook/react";

import { Button } from "@/button";
import { Toast, ToastAction } from "@/toast";
import { useToast } from "@/use-toast";

const meta = {
	title: "Components/Toast",
	component: Toast,
} satisfies Meta<typeof Toast>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
	args: {},
	render(_args) {
		// eslint-disable-next-line react-hooks/rules-of-hooks
		const { toast } = useToast();

		return (
			<Button
				variant="outline"
				onClick={() => {
					toast({
						title: "Scheduled: Catch up ",
						description: "Friday, February 10, 2023 at 5:57 PM",
						action: <ToastAction altText="Goto schedule to undo">Undo</ToastAction>,
					});
				}}
			>
				Add to calendar
			</Button>
		);
	},
};
