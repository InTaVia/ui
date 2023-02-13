import * as ProgressPrimitive from "@radix-ui/react-progress";
import { type ComponentPropsWithoutRef, type ElementRef, forwardRef } from "react";

import { cn } from "@/lib/cn";

const Progress = forwardRef<
	ElementRef<typeof ProgressPrimitive.Root>,
	ComponentPropsWithoutRef<typeof ProgressPrimitive.Root>
>(({ className, value, ...props }, ref) => {
	return (
		<ProgressPrimitive.Root
			ref={ref}
			className={cn(
				"relative h-4 w-full overflow-hidden rounded-full bg-neutral-200 dark:bg-neutral-800",
				className,
			)}
			{...props}
		>
			<ProgressPrimitive.Indicator
				className="h-full w-full flex-1 bg-neutral-900 transition-all dark:bg-neutral-400"
				style={{ transform: `tranneutralX(-${100 - (value != null ? value : 0)}%)` }}
			/>
		</ProgressPrimitive.Root>
	);
});

Progress.displayName = ProgressPrimitive.Root.displayName;

//

export { Progress };
