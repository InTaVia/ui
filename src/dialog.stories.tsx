import { type Meta, type StoryObj } from "@storybook/react";

import { Button } from "@/button.js";
import {
	Dialog,
	DialogContent,
	DialogDescription,
	DialogFooter,
	DialogHeader,
	DialogTitle,
	DialogTrigger,
} from "@/dialog.js";
import { Input } from "@/input.js";
import { Label } from "@/label.js";

const meta = {
	title: "Components/Dialog",
	component: Dialog,
} satisfies Meta<typeof Dialog>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
	args: {},
	render(args) {
		return (
			<Dialog {...args}>
				<DialogTrigger asChild>
					<Button variant="outline">Edit Profile</Button>
				</DialogTrigger>
				<DialogContent className="sm:max-w-[425px]">
					<DialogHeader>
						<DialogTitle>Edit profile</DialogTitle>
						<DialogDescription>
							Make changes to your profile here. Click save when you&apos;re done.
						</DialogDescription>
					</DialogHeader>
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
					<DialogFooter>
						<Button type="submit">Save changes</Button>
					</DialogFooter>
				</DialogContent>
			</Dialog>
		);
	},
};

export const Overflow: Story = {
	args: {},
	render(args) {
		return (
			<Dialog {...args}>
				<DialogTrigger asChild>
					<Button variant="outline">Edit Profile</Button>
				</DialogTrigger>
				<DialogContent className="sm:max-w-[425px]">
					<DialogHeader>
						<DialogTitle>Edit profile</DialogTitle>
						<DialogDescription>
							Make changes to your profile here. Click save when you&apos;re done.
						</DialogDescription>
					</DialogHeader>
					<div className="grid gap-4 py-4">
						<p>
							Irure proident Lorem laborum laboris mollit sit dolore cillum. Cupidatat aliqua
							incididunt ipsum est proident deserunt exercitation Lorem sunt nisi amet esse. Laboris
							magna do in esse proident qui eu. Esse tempor cillum aliquip aute labore elit occaecat
							cupidatat id excepteur dolore. Nisi irure sunt fugiat magna duis veniam qui mollit
							aute Lorem aliqua et commodo. Laboris elit proident commodo do dolor officia tempor ea
							voluptate exercitation nisi ea.
						</p>
						<p>
							Irure proident Lorem laborum laboris mollit sit dolore cillum. Cupidatat aliqua
							incididunt ipsum est proident deserunt exercitation Lorem sunt nisi amet esse. Laboris
							magna do in esse proident qui eu. Esse tempor cillum aliquip aute labore elit occaecat
							cupidatat id excepteur dolore. Nisi irure sunt fugiat magna duis veniam qui mollit
							aute Lorem aliqua et commodo. Laboris elit proident commodo do dolor officia tempor ea
							voluptate exercitation nisi ea.
						</p>
						<p>
							Irure proident Lorem laborum laboris mollit sit dolore cillum. Cupidatat aliqua
							incididunt ipsum est proident deserunt exercitation Lorem sunt nisi amet esse. Laboris
							magna do in esse proident qui eu. Esse tempor cillum aliquip aute labore elit occaecat
							cupidatat id excepteur dolore. Nisi irure sunt fugiat magna duis veniam qui mollit
							aute Lorem aliqua et commodo. Laboris elit proident commodo do dolor officia tempor ea
							voluptate exercitation nisi ea.
						</p>
						<p>
							Irure proident Lorem laborum laboris mollit sit dolore cillum. Cupidatat aliqua
							incididunt ipsum est proident deserunt exercitation Lorem sunt nisi amet esse. Laboris
							magna do in esse proident qui eu. Esse tempor cillum aliquip aute labore elit occaecat
							cupidatat id excepteur dolore. Nisi irure sunt fugiat magna duis veniam qui mollit
							aute Lorem aliqua et commodo. Laboris elit proident commodo do dolor officia tempor ea
							voluptate exercitation nisi ea.
						</p>
						<p>
							Irure proident Lorem laborum laboris mollit sit dolore cillum. Cupidatat aliqua
							incididunt ipsum est proident deserunt exercitation Lorem sunt nisi amet esse. Laboris
							magna do in esse proident qui eu. Esse tempor cillum aliquip aute labore elit occaecat
							cupidatat id excepteur dolore. Nisi irure sunt fugiat magna duis veniam qui mollit
							aute Lorem aliqua et commodo. Laboris elit proident commodo do dolor officia tempor ea
							voluptate exercitation nisi ea.
						</p>
						<p>
							Irure proident Lorem laborum laboris mollit sit dolore cillum. Cupidatat aliqua
							incididunt ipsum est proident deserunt exercitation Lorem sunt nisi amet esse. Laboris
							magna do in esse proident qui eu. Esse tempor cillum aliquip aute labore elit occaecat
							cupidatat id excepteur dolore. Nisi irure sunt fugiat magna duis veniam qui mollit
							aute Lorem aliqua et commodo. Laboris elit proident commodo do dolor officia tempor ea
							voluptate exercitation nisi ea.
						</p>
					</div>
					<DialogFooter>
						<Button type="submit">Save changes</Button>
					</DialogFooter>
				</DialogContent>
			</Dialog>
		);
	},
};
