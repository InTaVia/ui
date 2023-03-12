import { type Meta, type StoryObj } from "@storybook/react";
import { Fragment } from "react";

import { Button } from "@/button.js";
import { Toast, ToastAction } from "@/toast.js";
import { Toaster } from "@/toaster.js";
import { useToast } from "@/use-toast.js";

const meta = {
	title: "Components/Toast",
	component: Toast,
} satisfies Meta<typeof Toast>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
	args: {},
	render(_args) {
		return (
			<Fragment>
				<Toaster />
				<DefaultToastStory />
			</Fragment>
		);
	},
};

function DefaultToastStory(): JSX.Element {
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
}

export const Destructive: Story = {
	args: {},
	render(_args) {
		return (
			<Fragment>
				<Toaster />
				<DestructiveToastStory />
			</Fragment>
		);
	},
};

function DestructiveToastStory(): JSX.Element {
	const { toast } = useToast();

	return (
		<Button
			variant="destructive"
			onClick={() => {
				toast({
					title: "Delete entry",
					description: "Entry has been successfully deleted",
					action: <ToastAction altText="Undo delete">Undo</ToastAction>,
					variant: "destructive",
				});
			}}
		>
			Delete entry
		</Button>
	);
}
