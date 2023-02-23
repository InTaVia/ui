import * as DropdownMenuPrimitive from "@radix-ui/react-dropdown-menu";
import { CheckIcon, ChevronRightIcon, CircleIcon } from "lucide-react";
import {
	type ComponentPropsWithoutRef,
	type ElementRef,
	type HTMLAttributes,
	forwardRef,
} from "react";

import { cn } from "@/lib/cn";

export const DropdownMenu = DropdownMenuPrimitive.Root;

//

export const DropdownMenuTrigger = DropdownMenuPrimitive.Trigger;

//

export const DropdownMenuGroup = DropdownMenuPrimitive.Group;

//

export const DropdownMenuPortal = DropdownMenuPrimitive.Portal;

//

export const DropdownMenuSub = DropdownMenuPrimitive.Sub;

//

export const DropdownMenuRadioGroup = DropdownMenuPrimitive.RadioGroup;

//

type DropdownMenuSubTriggerProps = ComponentPropsWithoutRef<
	typeof DropdownMenuPrimitive.SubTrigger
> & {
	inset?: boolean;
};
type DropdownMenuSubTriggerElement = ElementRef<typeof DropdownMenuPrimitive.SubTrigger>;

export const DropdownMenuSubTrigger = forwardRef<
	DropdownMenuSubTriggerElement,
	DropdownMenuSubTriggerProps
>(function DropdownMenuSubTrigger(props, forwardedRef): JSX.Element {
	const { className, inset, children, ...rest } = props;

	return (
		<DropdownMenuPrimitive.SubTrigger
			ref={forwardedRef}
			className={cn(
				"flex cursor-default select-none items-center rounded-sm py-1.5 px-2 text-sm font-medium outline-none focus:bg-neutral-100 data-[state=open]:bg-neutral-100 dark:focus:bg-neutral-700 dark:data-[state=open]:bg-neutral-700",
				inset === true && "pl-8",
				className,
			)}
			{...rest}
		>
			{children}
			<ChevronRightIcon className="ml-auto h-4 w-4" />
		</DropdownMenuPrimitive.SubTrigger>
	);
});

DropdownMenuSubTrigger.displayName = DropdownMenuPrimitive.SubTrigger.displayName;

//

type DropdownMenuSubContentProps = ComponentPropsWithoutRef<
	typeof DropdownMenuPrimitive.SubContent
>;
type DropdownMenuSubContentElement = ElementRef<typeof DropdownMenuPrimitive.SubContent>;

export const DropdownMenuSubContent = forwardRef<
	DropdownMenuSubContentElement,
	DropdownMenuSubContentProps
>(function DropdownMenuSubContent(props, forwardedRef): JSX.Element {
	const { className, ...rest } = props;

	return (
		<DropdownMenuPrimitive.SubContent
			ref={forwardedRef}
			className={cn(
				"z-50 min-w-[8rem] overflow-hidden rounded-md border border-neutral-100 bg-white p-1 text-neutral-700 shadow-md animate-in slide-in-from-left-1 dark:border-neutral-800 dark:bg-neutral-800 dark:text-neutral-400",
				className,
			)}
			{...rest}
		/>
	);
});

DropdownMenuSubContent.displayName = DropdownMenuPrimitive.SubContent.displayName;

//

type DropdownMenuContentProps = ComponentPropsWithoutRef<typeof DropdownMenuPrimitive.Content>;
type DropdownMenuContentElement = ElementRef<typeof DropdownMenuPrimitive.Content>;

export const DropdownMenuContent = forwardRef<DropdownMenuContentElement, DropdownMenuContentProps>(
	function DropdownMenuContent(props, forwardedRef): JSX.Element {
		const { className, sideOffset = 4, ...rest } = props;

		return (
			<DropdownMenuPrimitive.Portal>
				<DropdownMenuPrimitive.Content
					ref={forwardedRef}
					className={cn(
						"z-50 min-w-[8rem] overflow-hidden rounded-md border border-neutral-100 bg-white p-1 text-neutral-700 shadow-md animate-in data-[side=right]:slide-in-from-left-2 data-[side=left]:slide-in-from-right-2 data-[side=bottom]:slide-in-from-top-2 data-[side=top]:slide-in-from-bottom-2 dark:border-neutral-800 dark:bg-neutral-800 dark:text-neutral-400",
						className,
					)}
					sideOffset={sideOffset}
					{...rest}
				/>
			</DropdownMenuPrimitive.Portal>
		);
	},
);

DropdownMenuContent.displayName = DropdownMenuPrimitive.Content.displayName;

//

type DropdownMenuItemProps = ComponentPropsWithoutRef<typeof DropdownMenuPrimitive.Item> & {
	inset?: boolean;
};
type DropdownMenuItemElement = ElementRef<typeof DropdownMenuPrimitive.Item>;

export const DropdownMenuItem = forwardRef<DropdownMenuItemElement, DropdownMenuItemProps>(
	function DropdownMenuItem(props, forwardedRef): JSX.Element {
		const { className, inset, ...rest } = props;

		return (
			<DropdownMenuPrimitive.Item
				ref={forwardedRef}
				className={cn(
					"relative flex cursor-default select-none items-center rounded-sm py-1.5 px-2 text-sm font-medium outline-none focus:bg-neutral-100 data-[disabled]:pointer-events-none data-[disabled]:opacity-50 dark:focus:bg-neutral-700",
					inset === true && "pl-8",
					className,
				)}
				{...rest}
			/>
		);
	},
);

DropdownMenuItem.displayName = DropdownMenuPrimitive.Item.displayName;

//

type DropdownMenuCheckboxItemProps = ComponentPropsWithoutRef<
	typeof DropdownMenuPrimitive.CheckboxItem
>;
type DropdownMenuCheckboxItemElement = ElementRef<typeof DropdownMenuPrimitive.CheckboxItem>;

export const DropdownMenuCheckboxItem = forwardRef<
	DropdownMenuCheckboxItemElement,
	DropdownMenuCheckboxItemProps
>(function DropdownMenuCheckboxItem(props, forwardedRef): JSX.Element {
	const { checked, children, className, ...rest } = props;

	return (
		<DropdownMenuPrimitive.CheckboxItem
			ref={forwardedRef}
			checked={checked}
			className={cn(
				"relative flex cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm font-medium outline-none focus:bg-neutral-100 data-[disabled]:pointer-events-none data-[disabled]:opacity-50 dark:focus:bg-neutral-700",
				className,
			)}
			{...rest}
		>
			<span className="absolute left-2 flex h-3.5 w-3.5 items-center justify-center">
				<DropdownMenuPrimitive.ItemIndicator>
					<CheckIcon className="h-4 w-4" />
				</DropdownMenuPrimitive.ItemIndicator>
			</span>
			{children}
		</DropdownMenuPrimitive.CheckboxItem>
	);
});

DropdownMenuCheckboxItem.displayName = DropdownMenuPrimitive.CheckboxItem.displayName;

//

type DropdownMenuRadioItemProps = ComponentPropsWithoutRef<typeof DropdownMenuPrimitive.RadioItem>;
type DropdownMenuRadioItemElement = ElementRef<typeof DropdownMenuPrimitive.RadioItem>;

export const DropdownMenuRadioItem = forwardRef<
	DropdownMenuRadioItemElement,
	DropdownMenuRadioItemProps
>(function DropdownMenuRadioItem(props, forwardedRef): JSX.Element {
	const { children, className, ...rest } = props;

	return (
		<DropdownMenuPrimitive.RadioItem
			ref={forwardedRef}
			className={cn(
				"relative flex cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm font-medium outline-none focus:bg-neutral-100 data-[disabled]:pointer-events-none data-[disabled]:opacity-50 dark:focus:bg-neutral-700",
				className,
			)}
			{...rest}
		>
			<span className="absolute left-2 flex h-3.5 w-3.5 items-center justify-center">
				<DropdownMenuPrimitive.ItemIndicator>
					<CircleIcon className="h-2 w-2 fill-current" />
				</DropdownMenuPrimitive.ItemIndicator>
			</span>
			{children}
		</DropdownMenuPrimitive.RadioItem>
	);
});

DropdownMenuRadioItem.displayName = DropdownMenuPrimitive.RadioItem.displayName;

//

type DropdownMenuLabelProps = ComponentPropsWithoutRef<typeof DropdownMenuPrimitive.Label> & {
	inset?: boolean;
};
type DropdownMenuLabelElement = ElementRef<typeof DropdownMenuPrimitive.Label>;

export const DropdownMenuLabel = forwardRef<DropdownMenuLabelElement, DropdownMenuLabelProps>(
	function DropdownMenuLabel(props, forwardedRef): JSX.Element {
		const { className, inset, ...rest } = props;

		return (
			<DropdownMenuPrimitive.Label
				ref={forwardedRef}
				className={cn(
					"px-2 py-1.5 text-sm font-semibold text-neutral-900 dark:text-neutral-300",
					inset === true && "pl-8",
					className,
				)}
				{...rest}
			/>
		);
	},
);

DropdownMenuLabel.displayName = DropdownMenuPrimitive.Label.displayName;

//

type DropdownMenuSeparatorProps = ComponentPropsWithoutRef<typeof DropdownMenuPrimitive.Separator>;
type DropdownMenuSeparatorElement = ElementRef<typeof DropdownMenuPrimitive.Separator>;

export const DropdownMenuSeparator = forwardRef<
	DropdownMenuSeparatorElement,
	DropdownMenuSeparatorProps
>(function DropdownMenuSeparator(props, forwardedRef): JSX.Element {
	const { className, ...rest } = props;

	return (
		<DropdownMenuPrimitive.Separator
			ref={forwardedRef}
			className={cn("-mx-1 my-1 h-px bg-neutral-100 dark:bg-neutral-700", className)}
			{...rest}
		/>
	);
});

DropdownMenuSeparator.displayName = DropdownMenuPrimitive.Separator.displayName;

//

type DropdownMenuShortcutProps = HTMLAttributes<HTMLSpanElement>;

export function DropdownMenuShortcut(props: DropdownMenuShortcutProps): JSX.Element {
	const { className, ...rest } = props;

	return (
		<span className={cn("ml-auto text-xs tracking-widest text-neutral-500", className)} {...rest} />
	);
}

DropdownMenuShortcut.displayName = "DropdownMenuShortcut";
