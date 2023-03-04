import * as ContextMenuPrimitive from "@radix-ui/react-context-menu";
import { CheckIcon, ChevronRightIcon, CircleIcon } from "lucide-react";
import { type ComponentPropsWithoutRef, type ElementRef, forwardRef } from "react";

import { cn } from "@/lib/cn";

export const ContextMenu = ContextMenuPrimitive.Root;

//

export const ContextMenuTrigger = ContextMenuPrimitive.Trigger;

//

export const ContextMenuGroup = ContextMenuPrimitive.Group;

//

export const ContextMenuPortal = ContextMenuPrimitive.Portal;

//

export const ContextMenuSub = ContextMenuPrimitive.Sub;

//

export const ContextMenuRadioGroup = ContextMenuPrimitive.RadioGroup;

//

type ContextMenuSubTriggerProps = ComponentPropsWithoutRef<
	typeof ContextMenuPrimitive.SubTrigger
> & { inset?: boolean };
type ContextMenuSubTriggerElement = ElementRef<typeof ContextMenuPrimitive.SubTrigger>;

export const ContextMenuSubTrigger = forwardRef<
	ContextMenuSubTriggerElement,
	ContextMenuSubTriggerProps
>(function ContextMenuSubTrigger(props, forwardedRef): JSX.Element {
	const { children, className, inset, ...rest } = props;

	return (
		<ContextMenuPrimitive.SubTrigger
			ref={forwardedRef}
			className={cn(
				"flex cursor-default select-none items-center rounded-sm py-1.5 px-2 text-sm font-medium outline-none focus:bg-neutral-100 data-[state=open]:bg-neutral-100 dark:focus:bg-neutral-700 dark:data-[state=open]:bg-neutral-700",
				inset === true && "pl-8",
				className,
			)}
			{...rest}
		>
			{children}
			<ChevronRightIcon aria-hidden="true" className="ml-auto h-4 w-4" />
		</ContextMenuPrimitive.SubTrigger>
	);
});

ContextMenuSubTrigger.displayName = ContextMenuPrimitive.SubTrigger.displayName;

//

type ContextMenuSubContentProps = ComponentPropsWithoutRef<typeof ContextMenuPrimitive.SubContent>;
type ContextMenuSubContentElement = ElementRef<typeof ContextMenuPrimitive.SubContent>;

export const ContextMenuSubContent = forwardRef<
	ContextMenuSubContentElement,
	ContextMenuSubContentProps
>(function ContextMenuSubContent(props, forwardedRef): JSX.Element {
	const { className, ...rest } = props;

	return (
		<ContextMenuPrimitive.SubContent
			ref={forwardedRef}
			className={cn(
				"z-50 min-w-[8rem] overflow-hidden rounded-md border border-neutral-100 bg-white p-1 shadow-md animate-in slide-in-from-left-1 dark:border-neutral-700 dark:bg-neutral-800",
				className,
			)}
			{...rest}
		/>
	);
});

ContextMenuSubContent.displayName = ContextMenuPrimitive.SubContent.displayName;

//

type ContextMenuContentProps = ComponentPropsWithoutRef<typeof ContextMenuPrimitive.Content>;
type ContextMenuContentElement = ElementRef<typeof ContextMenuPrimitive.Content>;

export const ContextMenuContent = forwardRef<ContextMenuContentElement, ContextMenuContentProps>(
	function ContextMenuContent(props, forwardedRef): JSX.Element {
		const { className, ...rest } = props;

		return (
			<ContextMenuPrimitive.Portal>
				<ContextMenuPrimitive.Content
					ref={forwardedRef}
					className={cn(
						"z-50 min-w-[8rem] overflow-hidden rounded-md border border-neutral-100 bg-white p-1 text-neutral-700 shadow-md animate-in fade-in-80 dark:border-neutral-800 dark:bg-neutral-800 dark:text-neutral-400",
						className,
					)}
					{...rest}
				/>
			</ContextMenuPrimitive.Portal>
		);
	},
);

ContextMenuContent.displayName = ContextMenuPrimitive.Content.displayName;

//

type ContextMenuItemProps = ComponentPropsWithoutRef<typeof ContextMenuPrimitive.Item> & {
	inset?: boolean;
};
type ContextMenuItemElement = ElementRef<typeof ContextMenuPrimitive.Item>;

export const ContextMenuItem = forwardRef<ContextMenuItemElement, ContextMenuItemProps>(
	function ContextMenuItem(props, forwardedRef): JSX.Element {
		const { className, inset, ...rest } = props;

		return (
			<ContextMenuPrimitive.Item
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

ContextMenuItem.displayName = ContextMenuPrimitive.Item.displayName;

//

type ContextMenuCheckboxItemProps = ComponentPropsWithoutRef<
	typeof ContextMenuPrimitive.CheckboxItem
>;
type ContextMenuCheckboxItemElement = ElementRef<typeof ContextMenuPrimitive.CheckboxItem>;

export const ContextMenuCheckboxItem = forwardRef<
	ContextMenuCheckboxItemElement,
	ContextMenuCheckboxItemProps
>(function ContextMenuCheckboxItem(props, forwardedRef): JSX.Element {
	const { checked, children, className, ...rest } = props;

	return (
		<ContextMenuPrimitive.CheckboxItem
			ref={forwardedRef}
			checked={checked}
			className={cn(
				"relative flex cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm font-medium outline-none focus:bg-neutral-100 data-[disabled]:pointer-events-none data-[disabled]:opacity-50 dark:focus:bg-neutral-700",
				className,
			)}
			{...rest}
		>
			<span className="absolute left-2 flex h-3.5 w-3.5 items-center justify-center">
				<ContextMenuPrimitive.ItemIndicator>
					<CheckIcon aria-hidden="true" className="h-4 w-4" />
				</ContextMenuPrimitive.ItemIndicator>
			</span>
			{children}
		</ContextMenuPrimitive.CheckboxItem>
	);
});

ContextMenuCheckboxItem.displayName = ContextMenuPrimitive.CheckboxItem.displayName;

//

type ContextMenuRadioItemProps = ComponentPropsWithoutRef<typeof ContextMenuPrimitive.RadioItem>;
type ContextMenuRadioItemElement = ElementRef<typeof ContextMenuPrimitive.RadioItem>;

export const ContextMenuRadioItem = forwardRef<
	ContextMenuRadioItemElement,
	ContextMenuRadioItemProps
>(function ContextMenuRadioItem(props, forwardedRef): JSX.Element {
	const { children, className, ...rest } = props;

	return (
		<ContextMenuPrimitive.RadioItem
			ref={forwardedRef}
			className={cn(
				"relative flex cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm font-medium outline-none focus:bg-neutral-100 data-[disabled]:pointer-events-none data-[disabled]:opacity-50 dark:focus:bg-neutral-700",
				className,
			)}
			{...rest}
		>
			<span className="absolute left-2 flex h-3.5 w-3.5 items-center justify-center">
				<ContextMenuPrimitive.ItemIndicator>
					<CircleIcon aria-hidden="true" className="h-2 w-2 fill-current" />
				</ContextMenuPrimitive.ItemIndicator>
			</span>
			{children}
		</ContextMenuPrimitive.RadioItem>
	);
});

ContextMenuRadioItem.displayName = ContextMenuPrimitive.RadioItem.displayName;

//

type ContextMenuLabelProps = ComponentPropsWithoutRef<typeof ContextMenuPrimitive.Label> & {
	inset?: boolean;
};
type ContextMenuLabelElement = ElementRef<typeof ContextMenuPrimitive.Label>;

export const ContextMenuLabel = forwardRef<ContextMenuLabelElement, ContextMenuLabelProps>(
	function ContextMenuLabel(props, forwardedRef): JSX.Element {
		const { className, inset, ...rest } = props;

		return (
			<ContextMenuPrimitive.Label
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

ContextMenuLabel.displayName = ContextMenuPrimitive.Label.displayName;

//

type ContextMenuSeparatorProps = ComponentPropsWithoutRef<typeof ContextMenuPrimitive.Separator>;
type ContextMenuSeparatorElement = ElementRef<typeof ContextMenuPrimitive.Separator>;

export const ContextMenuSeparator = forwardRef<
	ContextMenuSeparatorElement,
	ContextMenuSeparatorProps
>(function ContextMenuSeparator(props, forwardedRef): JSX.Element {
	const { className, ...rest } = props;

	return (
		<ContextMenuPrimitive.Separator
			ref={forwardedRef}
			className={cn("-mx-1 my-1 h-px bg-neutral-100 dark:bg-neutral-700", className)}
			{...rest}
		/>
	);
});

ContextMenuSeparator.displayName = ContextMenuPrimitive.Separator.displayName;

//

type ContextMenuShortcutProps = ComponentPropsWithoutRef<"span">;

export function ContextMenuShortcut(props: ContextMenuShortcutProps): JSX.Element {
	const { className, ...rest } = props;

	return (
		<span className={cn("ml-auto text-xs tracking-widest text-neutral-500", className)} {...rest} />
	);
}

ContextMenuShortcut.displayName = "ContextMenuShortcut";
