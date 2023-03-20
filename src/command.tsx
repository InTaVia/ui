import { type DialogProps } from "@radix-ui/react-dialog";
import { Command as CommandPrimitive, useCommandState } from "cmdk";
import { type ComponentPropsWithoutRef, type ElementRef, forwardRef } from "react";

import { Dialog, DialogContent } from "@/dialog.js";
import { Icon } from "@/icons.js";
import { cn } from "@/lib/cn.js";

type CommandProps = ComponentPropsWithoutRef<typeof CommandPrimitive>;
type CommandElement = ElementRef<typeof CommandPrimitive>;

export const Command = forwardRef<CommandElement, CommandProps>(function Command(
	props,
	forwardedRef,
): JSX.Element {
	const { className, ...rest } = props;

	return (
		<CommandPrimitive
			ref={forwardedRef}
			className={cn(
				"flex h-full w-full flex-col overflow-hidden rounded-lg bg-white dark:bg-neutral-800",
				className,
			)}
			{...rest}
		/>
	);
});

Command.displayName = CommandPrimitive.displayName;

//

type CommandDialogProps = DialogProps;

export function CommandDialog(props: CommandDialogProps): JSX.Element {
	const { children, ...rest } = props;

	return (
		<Dialog {...rest}>
			<DialogContent className="overflow-hidden p-0 shadow-2xl [&_[dialog-overlay]]:bg-red-100">
				<Command className="[&_[cmdk-group-heading]]:px-2 [&_[cmdk-group-heading]]:font-medium [&_[cmdk-group-heading]]:text-neutral-500 [&_[cmdk-group]:not([hidden])_~[cmdk-group]]:pt-0 [&_[cmdk-group]]:px-2 [&_[cmdk-input-wrapper]_svg]:h-5 [&_[cmdk-input-wrapper]_svg]:w-5 [&_[cmdk-input]]:h-12 [&_[cmdk-item]]:px-2 [&_[cmdk-item]]:py-3 [&_[cmdk-item]_svg]:h-5 [&_[cmdk-item]_svg]:w-5">
					{children}
				</Command>
			</DialogContent>
		</Dialog>
	);
}

//

type CommandInputProps = ComponentPropsWithoutRef<typeof CommandPrimitive.Input>;
type CommandInputElement = ElementRef<typeof CommandPrimitive.Input>;

export const CommandInput = forwardRef<CommandInputElement, CommandInputProps>(
	function CommandInput(props, forwardedRef): JSX.Element {
		const { className, ...rest } = props;

		return (
			<div
				className="flex items-center border-b border-b-neutral-100 px-4 dark:border-b-neutral-700"
				// eslint-disable-next-line react/no-unknown-property
				cmdk-input-wrapper=""
			>
				<Icon icon="search-icon" className="mr-2 h-4 w-4 shrink-0 opacity-50" />
				<CommandPrimitive.Input
					ref={forwardedRef}
					className={cn(
						"flex h-11 w-full rounded-md bg-transparent py-3 text-sm outline-none placeholder:text-neutral-400 disabled:cursor-not-allowed disabled:opacity-50 dark:text-neutral-50",
						className,
					)}
					{...rest}
				/>
			</div>
		);
	},
);

CommandInput.displayName = CommandPrimitive.Input.displayName;

//

type CommandListProps = ComponentPropsWithoutRef<typeof CommandPrimitive.List>;
type CommandListElement = ElementRef<typeof CommandPrimitive.List>;

export const CommandList = forwardRef<CommandListElement, CommandListProps>(function CommandList(
	props,
	forwardedRef,
): JSX.Element {
	const { className, ...rest } = props;

	return (
		<CommandPrimitive.List
			ref={forwardedRef}
			className={cn("max-h-[300px] overflow-y-auto overflow-x-hidden", className)}
			{...rest}
		/>
	);
});

CommandList.displayName = CommandPrimitive.List.displayName;

//

type CommandEmptyProps = ComponentPropsWithoutRef<typeof CommandPrimitive.Empty>;
type CommandEmptyElement = ElementRef<typeof CommandPrimitive.Empty>;

export const CommandEmpty = forwardRef<CommandEmptyElement, CommandEmptyProps>(
	function CommandEmpty(props, forwardedRef): JSX.Element {
		const { ...rest } = props;

		return (
			<CommandPrimitive.Empty ref={forwardedRef} className="py-6 text-center text-sm" {...rest} />
		);
	},
);

CommandEmpty.displayName = CommandPrimitive.Empty.displayName;

//

type CommandGroupProps = ComponentPropsWithoutRef<typeof CommandPrimitive.Group>;
type CommandGroupElement = ElementRef<typeof CommandPrimitive.Group>;

export const CommandGroup = forwardRef<CommandGroupElement, CommandGroupProps>(
	function CommandGroup(props, forwardedRef): JSX.Element {
		const { className, ...rest } = props;

		return (
			<CommandPrimitive.Group
				ref={forwardedRef}
				className={cn(
					"overflow-hidden py-3 px-2 text-neutral-700 dark:text-neutral-400 [&_[cmdk-group-heading]]:px-2 [&_[cmdk-group-heading]]:pb-1.5 [&_[cmdk-group-heading]]:text-sm [&_[cmdk-group-heading]]:font-semibold [&_[cmdk-group-heading]]:text-neutral-900 [&_[cmdk-group-heading]]:dark:text-neutral-300",
					className,
				)}
				{...rest}
			/>
		);
	},
);

CommandGroup.displayName = CommandPrimitive.Group.displayName;

//

type CommandSeparatorProps = ComponentPropsWithoutRef<typeof CommandPrimitive.Separator>;
type CommandSeparatorElement = ElementRef<typeof CommandPrimitive.Separator>;

export const CommandSeparator = forwardRef<CommandSeparatorElement, CommandSeparatorProps>(
	function CommandSeparator(props, forwardedRef): JSX.Element {
		const { className, ...rest } = props;

		return (
			<CommandPrimitive.Separator
				ref={forwardedRef}
				className={cn("-mx-1 h-px bg-neutral-100 dark:bg-neutral-700", className)}
				{...rest}
			/>
		);
	},
);

CommandSeparator.displayName = CommandPrimitive.Separator.displayName;

//

type CommandItemProps = ComponentPropsWithoutRef<typeof CommandPrimitive.Item>;
type CommandItemElement = ElementRef<typeof CommandPrimitive.Item>;

export const CommandItem = forwardRef<CommandItemElement, CommandItemProps>(function CommandItem(
	props,
	forwardedRef,
): JSX.Element {
	const { className, ...rest } = props;

	return (
		<CommandPrimitive.Item
			ref={forwardedRef}
			className={cn(
				"relative flex cursor-default select-none items-center rounded-md py-1.5 px-2 text-sm font-medium outline-none aria-selected:bg-neutral-100 data-[disabled]:pointer-events-none data-[disabled]:opacity-50 dark:aria-selected:bg-neutral-700",
				className,
			)}
			{...rest}
		/>
	);
});

CommandItem.displayName = CommandPrimitive.Item.displayName;

//

type CommandShortcutProps = ComponentPropsWithoutRef<"span">;

export function CommandShortcut(props: CommandShortcutProps): JSX.Element {
	const { className, ...rest } = props;

	return (
		<span className={cn("ml-auto text-xs tracking-widest text-neutral-500", className)} {...rest} />
	);
}

CommandShortcut.displayName = "CommandShortcut";

//

export { useCommandState };
