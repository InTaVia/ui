import { type Meta, type StoryObj } from "@storybook/react";
import { Fragment, useState } from "react";

import { Button } from "@/button.js";
import {
	Command,
	CommandEmpty,
	CommandGroup,
	CommandInput,
	CommandItem,
	CommandList,
	CommandSeparator,
	CommandShortcut,
} from "@/command.js";
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
} from "@/dropdown-menu.js";
import { cn } from "@/lib/cn.js";
import { Popover, PopoverContent, PopoverTrigger } from "@/popover.js";
import { type symbols, Icon } from "@/storybook/icons.js";

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
							<Icon icon="calendar-icon" className="mr-2 h-4 w-4" />
							<span>Calendar</span>
						</CommandItem>
						<CommandItem>
							<Icon icon="smile-icon" className="mr-2 h-4 w-4" />
							<span>Search Emoji</span>
						</CommandItem>
						<CommandItem>
							<Icon icon="calculator-icon" className="mr-2 h-4 w-4" />
							<span>Calculator</span>
						</CommandItem>
					</CommandGroup>
					<CommandSeparator />
					<CommandGroup heading="Settings">
						<CommandItem>
							<Icon icon="user-icon" className="mr-2 h-4 w-4" />
							<span>Profile</span>
							<CommandShortcut>⌘P</CommandShortcut>
						</CommandItem>
						<CommandItem>
							<Icon icon="credit-card-icon" className="mr-2 h-4 w-4" />
							<span>Billing</span>
							<CommandShortcut>⌘B</CommandShortcut>
						</CommandItem>
						<CommandItem>
							<Icon icon="settings-icon" className="mr-2 h-4 w-4" />
							<span>Settings</span>
							<CommandShortcut>⌘S</CommandShortcut>
						</CommandItem>
					</CommandGroup>
				</CommandList>
			</Command>
		);
	},
};

export const CommandDropdownMenu: Story = {
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
							<Icon icon="more-horizontal-icon" />
						</Button>
					</DropdownMenuTrigger>
					<DropdownMenuContent align="end" className="w-[200px]">
						<DropdownMenuLabel>Actions</DropdownMenuLabel>
						<DropdownMenuGroup>
							<DropdownMenuItem>
								<Icon icon="user-icon" className="mr-2 h-4 w-4" />
								Assign to...
							</DropdownMenuItem>
							<DropdownMenuItem>
								<Icon icon="calendar-icon" className="mr-2 h-4 w-4" />
								Set due date...
							</DropdownMenuItem>
							<DropdownMenuSeparator />
							<DropdownMenuSub>
								<DropdownMenuSubTrigger>
									<Icon icon="tags-icon" className="mr-2 h-4 w-4" />
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
								<Icon icon="trash-icon" className="mr-2 h-4 w-4" />
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
			icon: keyof typeof symbols;
		};

		const statuses: Array<Status> = [
			{
				value: "backlog",
				label: "Backlog",
				icon: "help-circle-icon",
			},
			{
				value: "todo",
				label: "Todo",
				icon: "circle-icon",
			},
			{
				value: "in progress",
				label: "In Progress",
				icon: "arrow-up-circle-icon",
			},
			{
				value: "done",
				label: "Done",
				icon: "check-circle-icon",
			},
			{
				value: "canceled",
				label: "Canceled",
				icon: "x-circle-icon",
			},
		];

		// eslint-disable-next-line react-hooks/rules-of-hooks
		const [open, setOpen] = useState(false);
		// eslint-disable-next-line react-hooks/rules-of-hooks
		const [selectedStatus, setSelectedStatus] = useState<Status | null>(null);

		return (
			<div className="flex items-center gap-x-4">
				<p className="text-sm text-neutral-500 dark:text-neutral-400">Status</p>
				<Popover open={open} onOpenChange={setOpen}>
					<PopoverTrigger asChild>
						<Button variant="outline" size="sm" className="w-[120px] justify-start">
							{selectedStatus ? (
								<Fragment>
									<Icon icon={selectedStatus.icon} className="mr-2 h-4 w-4 shrink-0" />
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
												<Icon
													icon={status.icon}
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

export const ComboBox: Story = {
	args: {},
	render(args) {
		const frameworks = [
			{
				value: "next.js",
				label: "Next.js",
			},
			{
				value: "sveltekit",
				label: "SvelteKit",
			},
			{
				value: "nuxt.js",
				label: "Nuxt.js",
			},
			{
				value: "remix",
				label: "Remix",
			},
			{
				value: "astro",
				label: "Astro",
			},
		];

		// eslint-disable-next-line react-hooks/rules-of-hooks
		const [open, setOpen] = useState(false);
		// eslint-disable-next-line react-hooks/rules-of-hooks
		const [value, setValue] = useState("");

		return (
			<Popover open={open} onOpenChange={setOpen}>
				<PopoverTrigger asChild>
					<Button
						variant="outline"
						role="combobox"
						aria-expanded={open}
						className="w-[200px] justify-between active:scale-100"
					>
						{value
							? frameworks.find((framework) => {
									return framework.value === value;
							  })?.label
							: "Select framework..."}
						<Icon icon="chevrons-up-down-icon" className="ml-2 h-4 w-4 shrink-0 opacity-50" />
					</Button>
				</PopoverTrigger>
				<PopoverContent className="w-[200px] p-0">
					<Command {...args}>
						<CommandInput placeholder="Search framework..." />
						<CommandEmpty>No framework found.</CommandEmpty>
						<CommandGroup>
							{frameworks.map((framework) => {
								return (
									<CommandItem
										key={framework.value}
										onSelect={(currentValue) => {
											setValue(currentValue === value ? "" : currentValue);
											setOpen(false);
										}}
									>
										<Icon
											icon="check-icon"
											className={cn(
												"mr-2 h-4 w-4",
												value === framework.value ? "opacity-100" : "opacity-0",
											)}
										/>
										{framework.label}
									</CommandItem>
								);
							})}
						</CommandGroup>
					</Command>
				</PopoverContent>
			</Popover>
		);
	},
};
