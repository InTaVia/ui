import { type InputHTMLAttributes, forwardRef } from "react";

import { cn } from "@/lib/cn";

type InputProps = InputHTMLAttributes<HTMLInputElement>;
type InputElement = HTMLInputElement;

export const Input = forwardRef<InputElement, InputProps>(function Input(
	props,
	forwardedRef,
): JSX.Element {
	const { className, ...rest } = props;

	return (
		<input
			ref={forwardedRef}
			className={cn(
				"flex h-10 w-full rounded-md border border-neutral-300 bg-transparent py-2 px-3 text-sm placeholder:text-neutral-400 focus:outline-none focus:ring-2 focus:ring-neutral-400 focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 dark:border-neutral-700 dark:text-neutral-50 dark:focus:ring-neutral-400 dark:focus:ring-offset-neutral-900",
				className,
			)}
			{...rest}
		/>
	);
});

Input.displayName = "Input";
