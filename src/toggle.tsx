import * as TogglePrimitive from "@radix-ui/react-toggle";
import { type VariantProps, cva } from "class-variance-authority";
import { type ComponentPropsWithoutRef, type ElementRef, forwardRef } from "react";

import { cn } from "@/lib/cn";

const toggleVariants = cva(
	"inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors hover:bg-neutral-100 focus:outline-none focus:ring-2 focus:ring-neutral-400 focus:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 data-[state=on]:bg-neutral-200 dark:text-neutral-100 dark:hover:bg-neutral-800 dark:hover:text-neutral-100 dark:focus:ring-offset-neutral-900  dark:data-[state=on]:bg-neutral-700 dark:data-[state=on]:text-neutral-100",
	{
		variants: {
			variant: {
				default: "bg-transparent",
				outline:
					"border border-neutral-200 bg-transparent hover:bg-neutral-100 dark:border-neutral-700",
			},
			size: {
				default: "h-10 px-3",
				sm: "h-9 px-2.5",
				lg: "h-11 px-5",
			},
		},
		defaultVariants: {
			variant: "default",
			size: "default",
		} as const,
	},
);

type ToggleProps = ComponentPropsWithoutRef<typeof TogglePrimitive.Root> &
	VariantProps<typeof toggleVariants>;
type ToggleElement = ElementRef<typeof TogglePrimitive.Root>;

export const Toggle = forwardRef<ToggleElement, ToggleProps>(function Toggle(
	props,
	forwardedRef,
): JSX.Element {
	const { className, size, variant, ...rest } = props;

	return (
		<TogglePrimitive.Root
			ref={forwardedRef}
			className={cn(toggleVariants({ className, size, variant }))}
			{...rest}
		/>
	);
});

Toggle.displayName = TogglePrimitive.Root.displayName;
