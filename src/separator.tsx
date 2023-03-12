import * as SeparatorPrimitive from "@radix-ui/react-separator";
import { type ComponentPropsWithoutRef, type ElementRef, forwardRef } from "react";

import { cn } from "@/lib/cn.js";

type SeparatorProps = ComponentPropsWithoutRef<typeof SeparatorPrimitive.Root>;
type SeparatorElement = ElementRef<typeof SeparatorPrimitive.Root>;

export const Separator = forwardRef<SeparatorElement, SeparatorProps>(function Separator(
	props,
	forwardedRef,
): JSX.Element {
	const { className, decorative = true, orientation = "horizontal", ...rest } = props;

	return (
		<SeparatorPrimitive.Root
			ref={forwardedRef}
			className={cn(
				"bg-neutral-200 dark:bg-neutral-700",
				orientation === "horizontal" ? "h-[1px] w-full" : "h-full w-[1px]",
				className,
			)}
			decorative={decorative}
			orientation={orientation}
			{...rest}
		/>
	);
});

Separator.displayName = SeparatorPrimitive.Root.displayName;
