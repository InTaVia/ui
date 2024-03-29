import type { Meta, StoryObj } from "@storybook/react";

import { Button } from "@/button";
import { Input } from "@/input";
import { Label } from "@/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/tabs";

const meta = {
	title: "Components/Tabs",
	component: Tabs,
} satisfies Meta<typeof Tabs>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
	args: {
		defaultValue: "account",
	},
	render(args) {
		return (
			<Tabs {...args} className="w-[400px]">
				<TabsList>
					<TabsTrigger value="account">Account</TabsTrigger>
					<TabsTrigger value="password">Password</TabsTrigger>
				</TabsList>
				<TabsContent value="account">
					<p className="text-sm text-neutral-500 dark:text-neutral-400">
						Make changes to your account here. Click save when you&apos;re done.
					</p>
					<div className="grid gap-2 py-4">
						<div className="grid gap-y-1">
							<Label htmlFor="name">Name</Label>
							<Input id="name" defaultValue="Stefan Probst" />
						</div>
						<div className="grid gap-y-1">
							<Label htmlFor="username">Username</Label>
							<Input id="username" defaultValue="@stefanprobst" />
						</div>
					</div>
					<div className="flex">
						<Button>Save changes</Button>
					</div>
				</TabsContent>
				<TabsContent value="password">
					<p className="text-sm text-neutral-500 dark:text-neutral-400">
						Change your password here. After saving, you&apos;ll be logged out.
					</p>
					<div className="grid gap-2 py-4">
						<div className="grid gap-y-1">
							<Label htmlFor="current">Current password</Label>
							<Input id="current" type="password" />
						</div>
						<div className="grid gap-y-1">
							<Label htmlFor="new">New password</Label>
							<Input id="new" type="password" />
						</div>
					</div>
					<div className="flex">
						<Button>Save password</Button>
					</div>
				</TabsContent>
			</Tabs>
		);
	},
};
