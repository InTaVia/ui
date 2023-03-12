import { type Meta, type StoryObj } from "@storybook/react";

import { Separator } from "@/separator.js";

const meta = {
	title: "Components/Separator",
	component: Separator,
} satisfies Meta<typeof Separator>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
	args: {},
	render(_args) {
		return (
			<div>
				<div className="grid gap-y-1">
					<h4 className="text-sm font-medium leading-none">Radix Primitives</h4>
					<p className="text-sm text-neutral-500 dark:text-neutral-400">
						An open-source UI component library.
					</p>
				</div>
				<Separator className="my-4" />
				<div className="flex h-5 items-center gap-x-4 text-sm">
					<div>Blog</div>
					<Separator orientation="vertical" />
					<div>Docs</div>
					<Separator orientation="vertical" />
					<div>Source</div>
				</div>
			</div>
		);
	},
};
