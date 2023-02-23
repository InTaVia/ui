import * as SelectPrimitive from "@radix-ui/react-select";
import { CheckIcon, ChevronDownIcon } from "lucide-react";
import { type ComponentPropsWithoutRef, type ElementRef, forwardRef } from "react";

import { cn } from "@/lib/cn";

export const Select = SelectPrimitive.Trigger;

//

export const SelectGroup = SelectPrimitive.Group;

//

export const SelectValue = SelectPrimitive.Value;

//

type SelectTriggerProps = ComponentPropsWithoutRef<typeof SelectPrimitive.Trigger>;
type SelectTriggerElement = ElementRef<typeof SelectPrimitive.Trigger>;

export const SelectTrigger = forwardRef<SelectTriggerElement, SelectTriggerProps>(
	function SelectTrigger(props, forwardedRef): JSX.Element {
		const { children, className, ...rest } = props;

		return (
			<SelectPrimitive.Trigger
				ref={forwardedRef}
				className={cn(
					"flex h-10 w-full items-center justify-between rounded-md border border-neutral-300 bg-transparent py-2 px-3 text-sm placeholder:text-neutral-400 focus:outline-none focus:ring-2 focus:ring-neutral-400 focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 dark:border-neutral-700 dark:text-neutral-50 dark:focus:ring-neutral-400 dark:focus:ring-offset-neutral-900",
					className,
				)}
				{...rest}
			>
				{children}
				<ChevronDownIcon className="h-4 w-4 opacity-50" />
			</SelectPrimitive.Trigger>
		);
	},
);

SelectTrigger.displayName = SelectPrimitive.Trigger.displayName;

//

type SelectContentProps = ComponentPropsWithoutRef<typeof SelectPrimitive.Content>;
type SelectContentElement = ElementRef<typeof SelectPrimitive.Content>;

export const SelectContent = forwardRef<SelectContentElement, SelectContentProps>(
	function SelectContent(props, forwardedRef): JSX.Element {
		const { children, className, ...rest } = props;

		return (
			<SelectPrimitive.Portal>
				<SelectPrimitive.Content
					ref={forwardedRef}
					className={cn(
						"relative z-50 min-w-[8rem] overflow-hidden rounded-md border border-neutral-100 bg-white text-neutral-700 shadow-md animate-in fade-in-80 dark:border-neutral-800 dark:bg-neutral-800 dark:text-neutral-400",
						className,
					)}
					{...rest}
				>
					<SelectPrimitive.Viewport className="p-1">{children}</SelectPrimitive.Viewport>
				</SelectPrimitive.Content>
			</SelectPrimitive.Portal>
		);
	},
);

SelectContent.displayName = SelectPrimitive.Content.displayName;

//

type SelectLabelProps = ComponentPropsWithoutRef<typeof SelectPrimitive.Label>;
type SelectLabelElement = ElementRef<typeof SelectPrimitive.Label>;

export const SelectLabel = forwardRef<SelectLabelElement, SelectLabelProps>(function SelectLabel(
	props,
	forwardedRef,
): JSX.Element {
	const { className, ...rest } = props;

	return (
		<SelectPrimitive.Label
			ref={forwardedRef}
			className={cn(
				"py-1.5 pr-2 pl-8 text-sm font-semibold text-neutral-900 dark:text-neutral-300",
				className,
			)}
			{...rest}
		/>
	);
});

SelectLabel.displayName = SelectPrimitive.Label.displayName;

//

type SelectItemProps = ComponentPropsWithoutRef<typeof SelectPrimitive.Item>;
type SelectItemElement = ElementRef<typeof SelectPrimitive.Item>;

export const SelectItem = forwardRef<SelectItemElement, SelectItemProps>(function SelectItem(
	props,
	forwardedRef,
): JSX.Element {
	const { children, className, ...rest } = props;

	return (
		<SelectPrimitive.Item
			ref={forwardedRef}
			className={cn(
				"relative flex cursor-default select-none items-center rounded-sm py-1.5 pr-2 pl-8 text-sm font-medium outline-none focus:bg-neutral-100 data-[disabled]:pointer-events-none data-[disabled]:opacity-50 dark:focus:bg-neutral-700",
				className,
			)}
			{...rest}
		>
			<span className="absolute left-2 flex h-3.5 w-3.5 items-center justify-center">
				<SelectPrimitive.ItemIndicator>
					<CheckIcon className="h-4 w-4" />
				</SelectPrimitive.ItemIndicator>
			</span>

			<SelectPrimitive.ItemText>{children}</SelectPrimitive.ItemText>
		</SelectPrimitive.Item>
	);
});

SelectItem.displayName = SelectPrimitive.Item.displayName;

//

type SelectSeparatorProps = ComponentPropsWithoutRef<typeof SelectPrimitive.Separator>;
type SelectSeparatorElement = ElementRef<typeof SelectPrimitive.Separator>;

export const SelectSeparator = forwardRef<SelectSeparatorElement, SelectSeparatorProps>(
	function SelectSeparator(props, forwardedRef): JSX.Element {
		const { className, ...rest } = props;

		return (
			<SelectPrimitive.Separator
				ref={forwardedRef}
				className={cn("-mx-1 my-1 h-px bg-neutral-100 dark:bg-neutral-700", className)}
				{...rest}
			/>
		);
	},
);

SelectSeparator.displayName = SelectPrimitive.Separator.displayName;
