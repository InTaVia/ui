import * as ProgressPrimitive from "@radix-ui/react-progress";
import { type ComponentPropsWithoutRef, type ElementRef, forwardRef } from "react";

import { cn } from "@/lib/cn";

type ProgressProps = ComponentPropsWithoutRef<typeof ProgressPrimitive.Root>;
type ProgressElement = ElementRef<typeof ProgressPrimitive.Root>;

export const Progress = forwardRef<ProgressElement, ProgressProps>(function Progress(
	props,
	forwardedRef,
): JSX.Element {
	const { className, value, ...rest } = props;

	return (
		<ProgressPrimitive.Root
			ref={forwardedRef}
			className={cn(
				"relative h-4 w-full overflow-hidden rounded-full bg-neutral-200 dark:bg-neutral-800",
				className,
			)}
			{...rest}
		>
			<ProgressPrimitive.Indicator
				className="h-full w-full flex-1 bg-neutral-900 transition-all dark:bg-neutral-400"
				style={{ transform: `translateX(-${100 - (value ?? 0)}%)` }}
			/>
		</ProgressPrimitive.Root>
	);
});

Progress.displayName = ProgressPrimitive.Root.displayName;
