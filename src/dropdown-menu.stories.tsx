import { type Meta, type StoryObj } from "@storybook/react";

import { Button } from "@/button.js";
import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuGroup,
	DropdownMenuItem,
	DropdownMenuLabel,
	DropdownMenuPortal,
	DropdownMenuSeparator,
	DropdownMenuShortcut,
	DropdownMenuSub,
	DropdownMenuSubContent,
	DropdownMenuSubTrigger,
	DropdownMenuTrigger,
} from "@/dropdown-menu.js";
import { Icon } from "@/storybook/icons.js";

const meta = {
	title: "Components/DropdownMenu",
	component: DropdownMenu,
} satisfies Meta<typeof DropdownMenu>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
	args: {},
	render(args) {
		return (
			<DropdownMenu {...args}>
				<DropdownMenuTrigger asChild>
					<Button variant="outline">Open</Button>
				</DropdownMenuTrigger>
				<DropdownMenuContent className="w-56">
					<DropdownMenuLabel>My Account</DropdownMenuLabel>
					<DropdownMenuSeparator />
					<DropdownMenuGroup>
						<DropdownMenuItem>
							<Icon icon="user-icon" className="mr-2 h-4 w-4" />
							<span>Profile</span>
							<DropdownMenuShortcut>⇧⌘P</DropdownMenuShortcut>
						</DropdownMenuItem>
						<DropdownMenuItem>
							<Icon icon="credit-card-icon" className="mr-2 h-4 w-4" />
							<span>Billing</span>
							<DropdownMenuShortcut>⌘B</DropdownMenuShortcut>
						</DropdownMenuItem>
						<DropdownMenuItem>
							<Icon icon="settings-icon" className="mr-2 h-4 w-4" />
							<span>Settings</span>
							<DropdownMenuShortcut>⌘S</DropdownMenuShortcut>
						</DropdownMenuItem>
						<DropdownMenuItem>
							<Icon icon="keyboard-icon" className="mr-2 h-4 w-4" />
							<span>Keyboard shortcuts</span>
							<DropdownMenuShortcut>⌘K</DropdownMenuShortcut>
						</DropdownMenuItem>
					</DropdownMenuGroup>
					<DropdownMenuSeparator />
					<DropdownMenuGroup>
						<DropdownMenuItem>
							<Icon icon="users-icon" className="mr-2 h-4 w-4" />
							<span>Team</span>
						</DropdownMenuItem>
						<DropdownMenuSub>
							<DropdownMenuSubTrigger>
								<Icon icon="user-plus-icon" className="mr-2 h-4 w-4" />
								<span>Invite users</span>
							</DropdownMenuSubTrigger>
							<DropdownMenuPortal>
								<DropdownMenuSubContent>
									<DropdownMenuItem>
										<Icon icon="mail-icon" className="mr-2 h-4 w-4" />
										<span>Email</span>
									</DropdownMenuItem>
									<DropdownMenuItem>
										<Icon icon="message-square-icon" className="mr-2 h-4 w-4" />
										<span>Message</span>
									</DropdownMenuItem>
									<DropdownMenuSeparator />
									<DropdownMenuItem>
										<Icon icon="plus-circle-icon" className="mr-2 h-4 w-4" />
										<span>More...</span>
									</DropdownMenuItem>
								</DropdownMenuSubContent>
							</DropdownMenuPortal>
						</DropdownMenuSub>
						<DropdownMenuItem>
							<Icon icon="plus-icon" className="mr-2 h-4 w-4" />
							<span>New Team</span>
							<DropdownMenuShortcut>⌘+T</DropdownMenuShortcut>
						</DropdownMenuItem>
					</DropdownMenuGroup>
					<DropdownMenuSeparator />
					<DropdownMenuItem>
						<Icon icon="github-icon" className="mr-2 h-4 w-4" />
						<span>GitHub</span>
					</DropdownMenuItem>
					<DropdownMenuItem>
						<Icon icon="life-buoy-icon" className="mr-2 h-4 w-4" />
						<span>Support</span>
					</DropdownMenuItem>
					<DropdownMenuItem disabled>
						<Icon icon="cloud-icon" className="mr-2 h-4 w-4" />
						<span>API</span>
					</DropdownMenuItem>
					<DropdownMenuSeparator />
					<DropdownMenuItem>
						<Icon icon="log-out-icon" className="mr-2 h-4 w-4" />
						<span>Log out</span>
						<DropdownMenuShortcut>⇧⌘Q</DropdownMenuShortcut>
					</DropdownMenuItem>
				</DropdownMenuContent>
			</DropdownMenu>
		);
	},
};
