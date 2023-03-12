import { type Meta, type StoryObj } from "@storybook/react";
import {
	CloudIcon,
	CreditCardIcon,
	GithubIcon,
	KeyboardIcon,
	LifeBuoyIcon,
	LogOutIcon,
	MailIcon,
	MessageSquareIcon,
	PlusCircleIcon,
	PlusIcon,
	SettingsIcon,
	UserIcon,
	UserPlusIcon,
	UsersIcon,
} from "lucide-react";

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
							<UserIcon aria-hidden="true" className="mr-2 h-4 w-4" />
							<span>Profile</span>
							<DropdownMenuShortcut>⇧⌘P</DropdownMenuShortcut>
						</DropdownMenuItem>
						<DropdownMenuItem>
							<CreditCardIcon aria-hidden="true" className="mr-2 h-4 w-4" />
							<span>Billing</span>
							<DropdownMenuShortcut>⌘B</DropdownMenuShortcut>
						</DropdownMenuItem>
						<DropdownMenuItem>
							<SettingsIcon aria-hidden="true" className="mr-2 h-4 w-4" />
							<span>Settings</span>
							<DropdownMenuShortcut>⌘S</DropdownMenuShortcut>
						</DropdownMenuItem>
						<DropdownMenuItem>
							<KeyboardIcon aria-hidden="true" className="mr-2 h-4 w-4" />
							<span>Keyboard shortcuts</span>
							<DropdownMenuShortcut>⌘K</DropdownMenuShortcut>
						</DropdownMenuItem>
					</DropdownMenuGroup>
					<DropdownMenuSeparator />
					<DropdownMenuGroup>
						<DropdownMenuItem>
							<UsersIcon aria-hidden="true" className="mr-2 h-4 w-4" />
							<span>Team</span>
						</DropdownMenuItem>
						<DropdownMenuSub>
							<DropdownMenuSubTrigger>
								<UserPlusIcon aria-hidden="true" className="mr-2 h-4 w-4" />
								<span>Invite users</span>
							</DropdownMenuSubTrigger>
							<DropdownMenuPortal>
								<DropdownMenuSubContent>
									<DropdownMenuItem>
										<MailIcon aria-hidden="true" className="mr-2 h-4 w-4" />
										<span>Email</span>
									</DropdownMenuItem>
									<DropdownMenuItem>
										<MessageSquareIcon aria-hidden="true" className="mr-2 h-4 w-4" />
										<span>Message</span>
									</DropdownMenuItem>
									<DropdownMenuSeparator />
									<DropdownMenuItem>
										<PlusCircleIcon aria-hidden="true" className="mr-2 h-4 w-4" />
										<span>More...</span>
									</DropdownMenuItem>
								</DropdownMenuSubContent>
							</DropdownMenuPortal>
						</DropdownMenuSub>
						<DropdownMenuItem>
							<PlusIcon aria-hidden="true" className="mr-2 h-4 w-4" />
							<span>New Team</span>
							<DropdownMenuShortcut>⌘+T</DropdownMenuShortcut>
						</DropdownMenuItem>
					</DropdownMenuGroup>
					<DropdownMenuSeparator />
					<DropdownMenuItem>
						<GithubIcon aria-hidden="true" className="mr-2 h-4 w-4" />
						<span>GitHub</span>
					</DropdownMenuItem>
					<DropdownMenuItem>
						<LifeBuoyIcon aria-hidden="true" className="mr-2 h-4 w-4" />
						<span>Support</span>
					</DropdownMenuItem>
					<DropdownMenuItem disabled>
						<CloudIcon aria-hidden="true" className="mr-2 h-4 w-4" />
						<span>API</span>
					</DropdownMenuItem>
					<DropdownMenuSeparator />
					<DropdownMenuItem>
						<LogOutIcon aria-hidden="true" className="mr-2 h-4 w-4" />
						<span>Log out</span>
						<DropdownMenuShortcut>⇧⌘Q</DropdownMenuShortcut>
					</DropdownMenuItem>
				</DropdownMenuContent>
			</DropdownMenu>
		);
	},
};
