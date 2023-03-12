import { type Meta, type StoryObj } from "@storybook/react";
import { Fragment } from "react";

import { ScrollArea } from "@/scroll-area.js";
import { Separator } from "@/separator.js";

const meta = {
	title: "Components/ScrollArea",
	component: ScrollArea,
} satisfies Meta<typeof ScrollArea>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
	args: {},
	render(args) {
		const length = 50;
		const tags = Array.from(Array(length).keys()).map((index) => {
			return `v1.0.0-beta.${length - index}`;
		});

		return (
			<ScrollArea
				{...args}
				className="h-72 w-48 rounded-md border border-neutral-100 dark:border-neutral-700"
			>
				<div className="p-4">
					<h4 className="mb-4 text-sm font-medium leading-none">Tags</h4>
					{tags.map((tag) => {
						return (
							<Fragment key={tag}>
								<div className="text-sm">{tag}</div>
								<Separator className="my-2" />
							</Fragment>
						);
					})}
				</div>
			</ScrollArea>
		);
	},
};
