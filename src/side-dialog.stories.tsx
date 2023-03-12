import { type Meta, type StoryObj } from "@storybook/react";

import { Button } from "@/button.js";
import { Input } from "@/input.js";
import { Label } from "@/label.js";
import {
	SideDialog,
	SideDialogContent,
	SideDialogDescription,
	SideDialogFooter,
	SideDialogHeader,
	SideDialogTitle,
	SideDialogTrigger,
} from "@/side-dialog.js";

const meta = {
	title: "Components/SideDialog",
	component: SideDialog,
} satisfies Meta<typeof SideDialog>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
	args: {},
	render(args) {
		return (
			<SideDialog {...args}>
				<SideDialogTrigger asChild>
					<Button variant="outline">Edit Profile</Button>
				</SideDialogTrigger>
				<SideDialogContent position="right">
					<SideDialogHeader>
						<SideDialogTitle>Edit profile</SideDialogTitle>
						<SideDialogDescription>
							Make changes to your profile here. Click save when you&apos;re done.
						</SideDialogDescription>
					</SideDialogHeader>
					<div className="grid gap-4 py-4">
						<div className="grid grid-cols-4 items-center gap-4">
							<Label htmlFor="name" className="text-right">
								Name
							</Label>
							<Input id="name" value="Stefan" className="col-span-3" />
						</div>
						<div className="grid grid-cols-4 items-center gap-4">
							<Label htmlFor="username" className="text-right">
								Username
							</Label>
							<Input id="username" value="@stefan" className="col-span-3" />
						</div>
					</div>
					<SideDialogFooter>
						<Button type="submit">Save changes</Button>
					</SideDialogFooter>
				</SideDialogContent>
			</SideDialog>
		);
	},
};
