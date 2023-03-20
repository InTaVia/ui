import { type VariantProps, cva } from "class-variance-authority";
import { type ElementRef, type ReactNode, type SVGProps, forwardRef } from "react";

import { Icon } from "@/icons.js";
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

type LoadingIndicatorProps = SVGProps<SVGSVGElement> &
	VariantProps<typeof loaderVariants> & {
		/** @default 'Loading...'' */
		label?: ReactNode;
	};
type LoadingIndicatorElement = ElementRef<"div">;

export const LoadingIndicator = forwardRef<LoadingIndicatorElement, LoadingIndicatorProps>(
	function LoadingIndicator(props, forwardedRef): JSX.Element {
		const { className, label = "Loading...", size, ...rest } = props;

		return (
			<div ref={forwardedRef} aria-valuemin={0} aria-valuemax={100} role="progressbar">
				<Icon icon="spinner-icon" className={cn(loaderVariants({ className, size }))} {...rest} />
				<span className="sr-only">{label}</span>
			</div>
		);
	},
);

LoadingIndicator.displayName = "LoadingIndicator";
