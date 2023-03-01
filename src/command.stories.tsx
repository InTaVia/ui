import type { Meta, StoryObj } from "@storybook/react";
import {
	type LucideIcon,
	ArrowUpCircleIcon,
	CalculatorIcon,
	CalendarIcon,
	CheckCircle2Icon,
	CircleIcon,
	CreditCardIcon,
	HelpCircleIcon,
	MoreHorizontalIcon,
	SettingsIcon,
	SmileIcon,
	TagsIcon,
	TrashIcon,
	UserIcon,
	XCircleIcon,
} from "lucide-react";
import { Fragment, useState } from "react";

import { Button } from "@/button";
import {
	Command,
	CommandEmpty,
	CommandGroup,
	CommandInput,
	CommandItem,
	CommandList,
	CommandSeparator,
	CommandShortcut,
} from "@/command";
import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuGroup,
	DropdownMenuItem,
	DropdownMenuLabel,
	DropdownMenuSeparator,
	DropdownMenuShortcut,
	DropdownMenuSub,
	DropdownMenuSubContent,
	DropdownMenuSubTrigger,
	DropdownMenuTrigger,
} from "@/dropdown-menu";
import { cn } from "@/lib/cn";
import { Popover, PopoverContent, PopoverTrigger } from "@/popover";

const meta = {
	title: "Components/Command",
	component: Command,
} satisfies Meta<typeof Command>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
	args: {},
	render(args) {
		return (
			<Command
				{...args}
				className="rounded-lg border border-neutral-100  shadow-md dark:border-neutral-800"
			>
				<CommandInput placeholder="Type a command or search..." />
				<CommandList>
					<CommandEmpty>No results found.</CommandEmpty>
					<CommandGroup heading="Suggestions">
						<CommandItem>
							<CalendarIcon className="mr-2 h-4 w-4" />
							<span>Calendar</span>
						</CommandItem>
						<CommandItem>
							<SmileIcon className="mr-2 h-4 w-4" />
							<span>Search Emoji</span>
						</CommandItem>
						<CommandItem>
							<CalculatorIcon className="mr-2 h-4 w-4" />
							<span>Calculator</span>
						</CommandItem>
					</CommandGroup>
					<CommandSeparator />
					<CommandGroup heading="Settings">
						<CommandItem>
							<UserIcon className="mr-2 h-4 w-4" />
							<span>Profile</span>
							<CommandShortcut>⌘P</CommandShortcut>
						</CommandItem>
						<CommandItem>
							<CreditCardIcon className="mr-2 h-4 w-4" />
							<span>Billing</span>
							<CommandShortcut>⌘B</CommandShortcut>
						</CommandItem>
						<CommandItem>
							<SettingsIcon className="mr-2 h-4 w-4" />
							<span>Settings</span>
							<CommandShortcut>⌘S</CommandShortcut>
						</CommandItem>
					</CommandGroup>
				</CommandList>
			</Command>
		);
	},
};

export const DropdownCommand: Story = {
	args: {},
	render(args) {
		const labels = [
			"feature",
			"bug",
			"enhancement",
			"documentation",
			"design",
			"question",
			"maintenance",
		];

		// eslint-disable-next-line react-hooks/rules-of-hooks, @typescript-eslint/no-non-null-assertion
		const [label, setLabel] = useState(labels[0]!);
		// eslint-disable-next-line react-hooks/rules-of-hooks
		const [open, setOpen] = useState(false);

		return (
			<div className="flex w-full flex-col items-start justify-between rounded-md border border-neutral-200 py-3 px-4 dark:border-neutral-700 sm:flex-row sm:items-center">
				<p className="text-sm font-medium leading-none">
					<span className="mr-2 rounded-lg bg-neutral-900 px-2 py-1 text-xs text-neutral-50 dark:bg-neutral-800 dark:text-neutral-100">
						{label}
					</span>
					<span className="text-neutral-500">Create a new project</span>
				</p>
				<DropdownMenu open={open} onOpenChange={setOpen}>
					<DropdownMenuTrigger asChild>
						<Button variant="ghost" size="sm">
							<MoreHorizontalIcon />
						</Button>
					</DropdownMenuTrigger>
					<DropdownMenuContent align="end" className="w-[200px]">
						<DropdownMenuLabel>Actions</DropdownMenuLabel>
						<DropdownMenuGroup>
							<DropdownMenuItem>
								<UserIcon className="mr-2 h-4 w-4" />
								Assign to...
							</DropdownMenuItem>
							<DropdownMenuItem>
								<CalendarIcon className="mr-2 h-4 w-4" />
								Set due date...
							</DropdownMenuItem>
							<DropdownMenuSeparator />
							<DropdownMenuSub>
								<DropdownMenuSubTrigger>
									<TagsIcon className="mr-2 h-4 w-4" />
									Apply label
								</DropdownMenuSubTrigger>
								<DropdownMenuSubContent className="p-0">
									<Command {...args}>
										<CommandInput placeholder="Filter label..." autoFocus={true} />
										<CommandList>
											<CommandEmpty>No label found.</CommandEmpty>
											<CommandGroup>
												{labels.map((label) => {
													return (
														<CommandItem
															key={label}
															onSelect={(value) => {
																setLabel(value);
																setOpen(false);
															}}
														>
															{label}
														</CommandItem>
													);
												})}
											</CommandGroup>
										</CommandList>
									</Command>
								</DropdownMenuSubContent>
							</DropdownMenuSub>
							<DropdownMenuSeparator />
							<DropdownMenuItem className="text-red-600">
								<TrashIcon className="mr-2 h-4 w-4" />
								Delete
								<DropdownMenuShortcut>⌘⌫</DropdownMenuShortcut>
							</DropdownMenuItem>
						</DropdownMenuGroup>
					</DropdownMenuContent>
				</DropdownMenu>
			</div>
		);
	},
};

export const CommandPopover: Story = {
	args: {},
	render(args) {
		type Status = {
			value: string;
			label: string;
			icon: LucideIcon;
		};

		const statuses: Array<Status> = [
			{
				value: "backlog",
				label: "Backlog",
				icon: HelpCircleIcon,
			},
			{
				value: "todo",
				label: "Todo",
				icon: CircleIcon,
			},
			{
				value: "in progress",
				label: "In Progress",
				icon: ArrowUpCircleIcon,
			},
			{
				value: "done",
				label: "Done",
				icon: CheckCircle2Icon,
			},
			{
				value: "canceled",
				label: "Canceled",
				icon: XCircleIcon,
			},
		];

		// eslint-disable-next-line react-hooks/rules-of-hooks
		const [open, setOpen] = useState(false);
		// eslint-disable-next-line react-hooks/rules-of-hooks
		const [selectedStatus, setSelectedStatus] = useState<Status | null>(null);

		return (
			<div className="flex items-center space-x-4">
				<p className="text-sm text-neutral-500 dark:text-neutral-400">Status</p>
				<Popover open={open} onOpenChange={setOpen}>
					<PopoverTrigger asChild>
						<Button variant="outline" size="sm" className="w-[120px] justify-start">
							{selectedStatus ? (
								<Fragment>
									<selectedStatus.icon className="mr-2 h-4 w-4 shrink-0" />
									{selectedStatus.label}
								</Fragment>
							) : (
								<Fragment>+ Set status</Fragment>
							)}
						</Button>
					</PopoverTrigger>
					<PopoverContent className="p-0" side="right" align="start">
						<Command {...args}>
							<CommandInput placeholder="Change status..." />
							<CommandList>
								<CommandEmpty>No results found.</CommandEmpty>
								<CommandGroup>
									{statuses.map((status) => {
										return (
											<CommandItem
												key={status.value}
												onSelect={(value) => {
													setSelectedStatus(
														statuses.find((priority) => {
															return priority.value === value;
														}) || null,
													);
													setOpen(false);
												}}
											>
												<status.icon
													className={cn(
														"mr-2 h-4 w-4",
														status.value === selectedStatus?.value ? "opacity-100" : "opacity-40",
													)}
												/>
												<span>{status.label}</span>
											</CommandItem>
										);
									})}
								</CommandGroup>
							</CommandList>
						</Command>
					</PopoverContent>
				</Popover>
			</div>
		);
	},
};
