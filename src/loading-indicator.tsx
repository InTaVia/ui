import { type VariantProps, cva } from "class-variance-authority";
import { type LucideProps, Loader2Icon } from "lucide-react";
import { type ElementRef, type ReactNode, forwardRef } from "react";

import { cn } from "@/lib/cn.js";

const loaderVariants = cva("shrink-0 animate-spin", {
	variants: {
		size: {
			default: "h-6 w-6",
			sm: "h-4 w-4",
			lg: "h-8 w-8",
		},
	},
	defaultVariants: {
		size: "default",
	} as const,
});

type LoadingIndicatorProps = LucideProps &
	VariantProps<typeof loaderVariants> & {
		/** @default 'Loading...'' */
		label?: ReactNode;
	};
type LoadingIndicatorElement = ElementRef<"svg">;

export const LoadingIndicator = forwardRef<LoadingIndicatorElement, LoadingIndicatorProps>(
	function LoadingIndicator(props, forwardedRef): JSX.Element {
		const { className, label = "Loading...", size, ...rest } = props;

		return (
			<div aria-valuemin={0} aria-valuemax={100} role="progressbar">
				<Loader2Icon
					ref={forwardedRef}
					aria-hidden="true"
					className={cn(loaderVariants({ className, size }))}
					{...rest}
				/>
				<span className="sr-only">{label}</span>
			</div>
		);
	},
);

LoadingIndicator.displayName = "LoadingIndicator";
