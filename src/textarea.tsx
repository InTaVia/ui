import { type ComponentPropsWithoutRef, type ElementRef, forwardRef } from "react";

import { cn } from "@/lib/cn";

type TextareaProps = ComponentPropsWithoutRef<"textarea">;
type TextareaElement = ElementRef<"textarea">;

export const Textarea = forwardRef<TextareaElement, TextareaProps>(function Textarea(
	props,
	forwardedRef,
): JSX.Element {
	const { className, ...rest } = props;

	return (
		<textarea
			ref={forwardedRef}
			className={cn(
				"flex h-20 w-full rounded-md border border-neutral-300 bg-transparent py-2 px-3 text-sm placeholder:text-neutral-400 focus:outline-none focus:ring-2 focus:ring-neutral-400 focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 dark:border-neutral-700 dark:text-neutral-50 dark:focus:ring-neutral-400 dark:focus:ring-offset-neutral-900",
				className,
			)}
			{...rest}
		/>
	);
});

Textarea.displayName = "Textarea";
