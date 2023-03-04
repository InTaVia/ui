import type { Meta, StoryObj } from "@storybook/react";
import { PlusIcon } from "lucide-react";

import { Button } from "@/button";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/tooltip";

const meta = {
	title: "Components/Tooltip",
	component: Tooltip,
	id: "story",
	decorators: [
		(story) => {
			return <TooltipProvider>{story()}</TooltipProvider>;
		},
	],
} satisfies Meta<typeof Tooltip>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
	args: {},
	render(args) {
		return (
			<Tooltip {...args}>
				<TooltipTrigger asChild>
					<Button variant="outline" className="w-10 rounded-full p-0">
						<PlusIcon aria-hidden="true" className="h-4 w-4" />
						<span className="sr-only">Add</span>
					</Button>
				</TooltipTrigger>
				<TooltipContent>
					<p>Add to library</p>
				</TooltipContent>
			</Tooltip>
		);
	},
};
