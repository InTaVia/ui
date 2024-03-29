import { type VariantProps, cva } from "class-variance-authority";
import { type ComponentPropsWithoutRef, type ElementRef } from "react";
import { forwardRef } from "react";

import { cn } from "@/lib/cn";

export const buttonVariants = cva(
	"inline-flex items-center justify-center gap-1.5 rounded-md text-sm font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-neutral-400 focus:ring-offset-2 active:scale-95 disabled:pointer-events-none disabled:opacity-50 data-[state=open]:bg-neutral-100 data-[state=open]:text-neutral-800 dark:hover:bg-neutral-800 dark:hover:text-neutral-100 dark:focus:ring-neutral-400 dark:focus:ring-offset-neutral-900 dark:data-[state=open]:bg-neutral-800 dark:data-[state=open]:text-neutral-100",
	{
		variants: {
			variant: {
				default:
					"bg-neutral-700 text-white hover:bg-neutral-900 dark:bg-neutral-700 dark:text-neutral-100",
				destructive: "bg-red-500 text-white hover:bg-red-600 dark:hover:bg-red-600",
				outline:
					"border border-neutral-200 bg-transparent hover:bg-neutral-200 dark:border-neutral-700 dark:text-neutral-100",
				subtle:
					"bg-neutral-200 text-neutral-900 hover:bg-neutral-300 dark:bg-neutral-700 dark:text-neutral-100",
				ghost:
					"bg-transparent hover:bg-neutral-100 data-[state=open]:bg-transparent dark:text-neutral-100 dark:hover:bg-neutral-800 dark:hover:text-neutral-100 dark:data-[state=open]:bg-transparent",
				link: "bg-transparent text-neutral-900 underline-offset-4 hover:bg-transparent hover:underline dark:bg-transparent dark:text-neutral-100 dark:hover:bg-transparent",
			},
			size: {
				default: "h-10 py-2 px-4",
				xs: "h-7 rounded-md px-2 text-xs",
				sm: "h-9 rounded-md px-2",
				lg: "h-11 rounded-md px-8",
			},
		},
		defaultVariants: {
			variant: "default",
			size: "default",
		} as const,
	},
);

//

type ButtonProps = ComponentPropsWithoutRef<"button"> & VariantProps<typeof buttonVariants>;
type ButtonElement = ElementRef<"button">;

export const Button = forwardRef<ButtonElement, ButtonProps>(function Button(
	props,
	forwardedRef,
): JSX.Element {
	const { className, size, type = "button", variant, ...rest } = props;

	return (
		<button
			ref={forwardedRef}
			className={cn(buttonVariants({ className, size, variant }))}
			type={type}
			{...rest}
		/>
	);
});

Button.displayName = "Button";
