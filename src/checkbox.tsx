import * as CheckboxPrimitive from "@radix-ui/react-checkbox";
import { CheckIcon } from "lucide-react";
import { type ComponentPropsWithoutRef, type ElementRef, forwardRef } from "react";

import { cn } from "@/lib/cn";

type CheckBoxProps = ComponentPropsWithoutRef<typeof CheckboxPrimitive.Root>;
type CheckBoxElement = ElementRef<typeof CheckboxPrimitive.Root>;

export const CheckBox = forwardRef<CheckBoxElement, CheckBoxProps>(function CheckBox(
	props,
	forwardedRef,
): JSX.Element {
	const { className, ...rest } = props;

	return (
		<CheckboxPrimitive.Root
			ref={forwardedRef}
			className={cn(
				"peer h-4 w-4 shrink-0 rounded-sm border border-neutral-300 focus:outline-none focus:ring-2 focus:ring-neutral-400 focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 dark:border-neutral-700 dark:text-neutral-50 dark:focus:ring-neutral-400 dark:focus:ring-offset-neutral-900",
				className,
			)}
			{...rest}
		>
			<CheckboxPrimitive.Indicator className="flex items-center justify-center">
				<CheckIcon aria-hidden="true" className="h-4 w-4" />
			</CheckboxPrimitive.Indicator>
		</CheckboxPrimitive.Root>
	);
});

CheckBox.displayName = CheckboxPrimitive.Root.displayName;
