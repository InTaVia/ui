import * as MenuBarPrimitive from "@radix-ui/react-menubar";
import { CheckIcon, ChevronRightIcon, CircleIcon } from "lucide-react";
import {
	type ComponentPropsWithoutRef,
	type ElementRef,
	type HTMLAttributes,
	forwardRef,
} from "react";

import { cn } from "@/lib/cn";

export const MenuBarMenu = MenuBarPrimitive.Menu;

//

export const MenuBarGroup = MenuBarPrimitive.Group;

//

export const MenuBarPortal = MenuBarPrimitive.Portal;

//

export const MenuBarSub = MenuBarPrimitive.Sub;

//

export const MenuBarRadioGroup = MenuBarPrimitive.RadioGroup;

//

type MenuBarProps = ComponentPropsWithoutRef<typeof MenuBarPrimitive.Root>;
type MenuBarElement = ElementRef<typeof MenuBarPrimitive.Root>;

export const MenuBar = forwardRef<MenuBarElement, MenuBarProps>(function MenuBar(
	props,
	forwardedRef,
): JSX.Element {
	const { className, ...rest } = props;

	return (
		<MenuBarPrimitive.Root
			ref={forwardedRef}
			className={cn(
				"flex h-10 items-center gap-x-1 rounded-md border border-neutral-300 bg-white p-1 dark:border-neutral-700 dark:bg-neutral-800",
				className,
			)}
			{...rest}
		/>
	);
});

MenuBar.displayName = MenuBarPrimitive.Root.displayName;

//

type MenuBarTriggerProps = ComponentPropsWithoutRef<typeof MenuBarPrimitive.Trigger>;
type MenuBarTriggerElement = ElementRef<typeof MenuBarPrimitive.Trigger>;

export const MenuBarTrigger = forwardRef<MenuBarTriggerElement, MenuBarTriggerProps>(
	function MenuBarTrigger(props, forwardedRef): JSX.Element {
		const { className, ...rest } = props;

		return (
			<MenuBarPrimitive.Trigger
				ref={forwardedRef}
				className={cn(
					"flex cursor-default select-none items-center rounded-[0.2rem] py-1.5 px-3 text-sm font-medium outline-none focus:bg-neutral-100 data-[state=open]:bg-neutral-100 dark:focus:bg-neutral-700 dark:data-[state=open]:bg-neutral-700",
					className,
				)}
				{...rest}
			/>
		);
	},
);

MenuBarTrigger.displayName = MenuBarPrimitive.Trigger.displayName;

//

type MenuBarSubTriggerProps = ComponentPropsWithoutRef<typeof MenuBarPrimitive.SubTrigger> & {
	inset?: boolean;
};
type MenuBarSubTriggerElement = ElementRef<typeof MenuBarPrimitive.SubTrigger>;

export const MenuBarSubTrigger = forwardRef<MenuBarSubTriggerElement, MenuBarSubTriggerProps>(
	function MenuBarSubTrigger(props, forwardedRef): JSX.Element {
		const { children, className, inset, ...rest } = props;

		return (
			<MenuBarPrimitive.SubTrigger
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
			</MenuBarPrimitive.SubTrigger>
		);
	},
);

MenuBarSubTrigger.displayName = MenuBarPrimitive.SubTrigger.displayName;

//

type MenuBarSubContentProps = ComponentPropsWithoutRef<typeof MenuBarPrimitive.SubContent>;
type MenuBarSubContentElement = ElementRef<typeof MenuBarPrimitive.SubContent>;

export const MenuBarSubContent = forwardRef<MenuBarSubContentElement, MenuBarSubContentProps>(
	function MenuBarSubContent(props, forwardedRef): JSX.Element {
		const { className, ...rest } = props;

		return (
			<MenuBarPrimitive.SubContent
				ref={forwardedRef}
				className={cn(
					"z-50 min-w-[8rem] overflow-hidden rounded-md border border-neutral-100 bg-white p-1 shadow-md animate-in slide-in-from-left-1 dark:border-neutral-700 dark:bg-neutral-800",
					className,
				)}
				{...rest}
			/>
		);
	},
);

MenuBarSubContent.displayName = MenuBarPrimitive.SubContent.displayName;

//

type MenuBarContentProps = ComponentPropsWithoutRef<typeof MenuBarPrimitive.Content>;
type MenuBarContentElement = ElementRef<typeof MenuBarPrimitive.Content>;

export const MenuBarContent = forwardRef<MenuBarContentElement, MenuBarContentProps>(
	function MenuBarContent(props, forwardedRef): JSX.Element {
		const { align = "start", alignOffset = -4, className, sideOffset = 8, ...rest } = props;

		return (
			<MenuBarPrimitive.Portal>
				<MenuBarPrimitive.Content
					ref={forwardedRef}
					align={align}
					alignOffset={alignOffset}
					className={cn(
						"z-50 min-w-[12rem] overflow-hidden rounded-md border border-neutral-100 bg-white p-1 text-neutral-700 shadow-md animate-in slide-in-from-top-1 dark:border-neutral-800 dark:bg-neutral-800 dark:text-neutral-400",
						className,
					)}
					sideOffset={sideOffset}
					{...rest}
				/>
			</MenuBarPrimitive.Portal>
		);
	},
);

MenuBarContent.displayName = MenuBarPrimitive.Content.displayName;

//

type MenuBarItemProps = ComponentPropsWithoutRef<typeof MenuBarPrimitive.Item> & {
	inset?: boolean;
};
type MenuBarItemElement = ElementRef<typeof MenuBarPrimitive.Item>;

export const MenuBarItem = forwardRef<MenuBarItemElement, MenuBarItemProps>(function MenuBarItem(
	props,
	forwardedRef,
): JSX.Element {
	const { className, inset, ...rest } = props;

	return (
		<MenuBarPrimitive.Item
			ref={forwardedRef}
			className={cn(
				"relative flex cursor-default select-none items-center rounded-sm py-1.5 px-2 text-sm font-medium outline-none focus:bg-neutral-100 data-[disabled]:pointer-events-none data-[disabled]:opacity-50 dark:focus:bg-neutral-700",
				inset === true && "pl-8",
				className,
			)}
			{...rest}
		/>
	);
});

MenuBarItem.displayName = MenuBarPrimitive.Item.displayName;

//

type MenuBarCheckboxItemProps = ComponentPropsWithoutRef<typeof MenuBarPrimitive.CheckboxItem>;
type MenuBarCheckboxItemElement = ElementRef<typeof MenuBarPrimitive.CheckboxItem>;

export const MenuBarCheckboxItem = forwardRef<MenuBarCheckboxItemElement, MenuBarCheckboxItemProps>(
	function MenuBarCheckboxItem(props, forwardedRef): JSX.Element {
		const { checked, children, className, ...rest } = props;

		return (
			<MenuBarPrimitive.CheckboxItem
				ref={forwardedRef}
				checked={checked}
				className={cn(
					"relative flex cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm font-medium outline-none focus:bg-neutral-100 data-[disabled]:pointer-events-none data-[disabled]:opacity-50 dark:focus:bg-neutral-700",
					className,
				)}
				{...rest}
			>
				<span className="absolute left-2 flex h-3.5 w-3.5 items-center justify-center">
					<MenuBarPrimitive.ItemIndicator>
						<CheckIcon className="h-4 w-4" />
					</MenuBarPrimitive.ItemIndicator>
				</span>
				{children}
			</MenuBarPrimitive.CheckboxItem>
		);
	},
);

MenuBarCheckboxItem.displayName = MenuBarPrimitive.CheckboxItem.displayName;

//

type MenuBarRadioItemProps = ComponentPropsWithoutRef<typeof MenuBarPrimitive.RadioItem>;
type MenuBarRadioItemElement = ElementRef<typeof MenuBarPrimitive.RadioItem>;

export const MenuBarRadioItem = forwardRef<MenuBarRadioItemElement, MenuBarRadioItemProps>(
	function MenuBarRadioItem(props, forwardedRef): JSX.Element {
		const { children, className, ...rest } = props;

		return (
			<MenuBarPrimitive.RadioItem
				ref={forwardedRef}
				className={cn(
					"relative flex cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm font-medium outline-none focus:bg-neutral-100 data-[disabled]:pointer-events-none data-[disabled]:opacity-50 dark:focus:bg-neutral-700",
					className,
				)}
				{...rest}
			>
				<span className="absolute left-2 flex h-3.5 w-3.5 items-center justify-center">
					<MenuBarPrimitive.ItemIndicator>
						<CircleIcon className="h-2 w-2 fill-current" />
					</MenuBarPrimitive.ItemIndicator>
				</span>
				{children}
			</MenuBarPrimitive.RadioItem>
		);
	},
);

MenuBarRadioItem.displayName = MenuBarPrimitive.RadioItem.displayName;

//

type MenuBarLabelProps = ComponentPropsWithoutRef<typeof MenuBarPrimitive.Label> & {
	inset?: boolean;
};
type MenuBarLabelElement = ElementRef<typeof MenuBarPrimitive.Label>;

export const MenuBarLabel = forwardRef<MenuBarLabelElement, MenuBarLabelProps>(
	function MenuBarLabel(props, forwardedRef): JSX.Element {
		const { className, inset, ...rest } = props;

		return (
			<MenuBarPrimitive.Label
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

MenuBarLabel.displayName = MenuBarPrimitive.Label.displayName;

//

type MenuBarSeparatorProps = ComponentPropsWithoutRef<typeof MenuBarPrimitive.Separator>;
type MenuBarSeparatorElement = ElementRef<typeof MenuBarPrimitive.Separator>;

export const MenuBarSeparator = forwardRef<MenuBarSeparatorElement, MenuBarSeparatorProps>(
	function MenuBarSeparator(props, forwardedRef): JSX.Element {
		const { className, ...rest } = props;

		return (
			<MenuBarPrimitive.Separator
				ref={forwardedRef}
				className={cn("-mx-1 my-1 h-px bg-neutral-100 dark:bg-neutral-700", className)}
				{...rest}
			/>
		);
	},
);

MenuBarSeparator.displayName = MenuBarPrimitive.Separator.displayName;

//

type MenuBarShortcutProps = HTMLAttributes<HTMLSpanElement>;

export function MenuBarShortcut(props: MenuBarShortcutProps): JSX.Element {
	const { className, ...rest } = props;

	return (
		<span className={cn("ml-auto text-xs tracking-widest text-neutral-500", className)} {...rest} />
	);
}

MenuBarShortcut.displayName = "MenuBarShortcut";
