import { type VariantProps } from "class-variance-authority";
import {
	type ChangeEvent,
	type ComponentPropsWithoutRef,
	type ElementRef,
	forwardRef,
} from "react";

import { buttonVariants } from "@/button.js";
import { cn } from "@/lib/cn.js";

type FileInputProps = ComponentPropsWithoutRef<"input"> & {
	onValueChange?: (files: FileList | null) => void;
};
type FileInputElement = ElementRef<"input">;

export const FileInput = forwardRef<FileInputElement, FileInputProps>(function FileInput(
	props,
	forwardedRef,
): JSX.Element {
	const { children, className, onValueChange, ...rest } = props;

	function onChange(event: ChangeEvent<HTMLInputElement>) {
		props.onChange?.(event);
		onValueChange?.(event.currentTarget.files);
	}

	return (
		<label className={cn("inline-flex items-center gap-2", className)}>
			<input
				ref={forwardedRef}
				className="peer sr-only"
				{...rest}
				onChange={onChange}
				type="file"
			/>
			{children}
		</label>
	);
});

FileInput.displayName = "FileInput";

//

type FileInputTriggerProps = ComponentPropsWithoutRef<"span"> & VariantProps<typeof buttonVariants>;
type FileInputTriggerElement = ElementRef<"span">;

export const FileInputTrigger = forwardRef<FileInputTriggerElement, FileInputTriggerProps>(
	function FileInputTrigger(props, forwardedRef): JSX.Element {
		const { children, className, size, variant, ...rest } = props;

		return (
			<span
				ref={forwardedRef}
				className={cn(
					"peer-focus:ring-2 peer-focus:ring-neutral-400 peer-focus:ring-offset-2 peer-disabled:pointer-events-none peer-disabled:opacity-50 data-[state=open]:bg-neutral-100 dark:hover:bg-neutral-800 dark:hover:text-neutral-100 dark:peer-focus:ring-neutral-400 dark:peer-focus:ring-offset-neutral-900 dark:data-[state=open]:bg-neutral-800",
					buttonVariants({ className, size, variant }),
				)}
				{...rest}
			>
				{children}
			</span>
		);
	},
);

FileInputTrigger.displayName = "FileInputTrigger";
