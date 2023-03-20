import * as RadioGroupPrimitive from "@radix-ui/react-radio-group";
import { type ComponentPropsWithoutRef, type ElementRef, forwardRef } from "react";

import { Icon } from "@/icons.js";
import { cn } from "@/lib/cn.js";

type RadioGroupProps = ComponentPropsWithoutRef<typeof RadioGroupPrimitive.Root>;
type RadioGroupElement = ElementRef<typeof RadioGroupPrimitive.Root>;

export const RadioGroup = forwardRef<RadioGroupElement, RadioGroupProps>(function RadioGroup(
	props,
	forwardedRef,
): JSX.Element {
	const { className, ...rest } = props;

	return (
		<RadioGroupPrimitive.Root
			ref={forwardedRef}
			className={cn("grid gap-2", className)}
			{...rest}
		/>
	);
});

RadioGroup.displayName = RadioGroupPrimitive.Root.displayName;

//

type RadioGroupItemProps = ComponentPropsWithoutRef<typeof RadioGroupPrimitive.Item>;
type RadioGroupItemElement = ElementRef<typeof RadioGroupPrimitive.Item>;

export const RadioGroupItem = forwardRef<RadioGroupItemElement, RadioGroupItemProps>(
	function RadioGroupItem(props, forwardedRef): JSX.Element {
		const { className, ...rest } = props;

		return (
			<RadioGroupPrimitive.Item
				ref={forwardedRef}
				className={cn(
					"text:fill-neutral-50 h-4 w-4 rounded-full border border-neutral-300 text-neutral-900 hover:border-neutral-400 focus:outline-none focus:ring-2 focus:ring-neutral-400 focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 dark:border-neutral-700 dark:text-neutral-100 dark:hover:text-neutral-900 dark:focus:ring-neutral-400 dark:focus:ring-offset-neutral-900",
					className,
				)}
				{...rest}
			>
				<RadioGroupPrimitive.Indicator className="flex items-center justify-center">
					<Icon icon="circle-icon" className="h-2.5 w-2.5 fill-neutral-900 dark:fill-neutral-50" />
				</RadioGroupPrimitive.Indicator>
			</RadioGroupPrimitive.Item>
		);
	},
);

RadioGroupItem.displayName = RadioGroupPrimitive.Item.displayName;
