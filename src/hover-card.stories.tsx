import type { Meta, StoryObj } from "@storybook/react";
import { CalendarDaysIcon } from "lucide-react";

import { Avatar, AvatarFallback, AvatarImage } from "@/avatar";
import { Button } from "@/button";
import { HoverCard, HoverCardContent, HoverCardTrigger } from "@/hover-card";

const meta = {
	title: "Components/HoverCard",
	component: HoverCard,
} satisfies Meta<typeof HoverCard>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
	args: {},
	render(args) {
		return (
			<HoverCard {...args}>
				<HoverCardTrigger asChild>
					<Button variant="link">@nextjs</Button>
				</HoverCardTrigger>
				<HoverCardContent className="w-80">
					<div className="flex justify-between gap-x-4">
						<Avatar>
							<AvatarImage src="https://github.com/vercel.png" />
							<AvatarFallback>VC</AvatarFallback>
						</Avatar>
						<div className="grid gap-y-1">
							<h4 className="text-sm font-semibold">@nextjs</h4>
							<p className="text-sm">The React Framework – created and maintained by @vercel.</p>
							<div className="flex items-center pt-2">
								<CalendarDaysIcon className="mr-2 h-4 w-4 opacity-70" />{" "}
								<span className="text-xs text-neutral-500 dark:text-neutral-400">
									Joined December 2021
								</span>
							</div>
						</div>
					</div>
				</HoverCardContent>
			</HoverCard>
		);
	},
};
