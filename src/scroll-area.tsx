import * as ScrollAreaPrimitive from "@radix-ui/react-scroll-area";
import { type ComponentPropsWithoutRef, type ElementRef, forwardRef } from "react";

import { cn } from "@/lib/cn.js";

type ScrollAreaProps = ComponentPropsWithoutRef<typeof ScrollAreaPrimitive.Root>;
type ScrollAreaElement = ElementRef<typeof ScrollAreaPrimitive.Root>;

export const ScrollArea = forwardRef<ScrollAreaElement, ScrollAreaProps>(function ScrollArea(
	props,
	forwardedRef,
): JSX.Element {
	const { children, className, ...rest } = props;

	return (
		<ScrollAreaPrimitive.Root
			ref={forwardedRef}
			className={cn("relative overflow-hidden", className)}
			{...rest}
		>
			<ScrollAreaPrimitive.Viewport className="h-full w-full rounded-[inherit]">
				{children}
			</ScrollAreaPrimitive.Viewport>
			<ScrollBar />
			<ScrollAreaPrimitive.Corner />
		</ScrollAreaPrimitive.Root>
	);
});

ScrollArea.displayName = ScrollAreaPrimitive.Root.displayName;

//

type ScrollBarProps = ComponentPropsWithoutRef<typeof ScrollAreaPrimitive.ScrollAreaScrollbar>;
type ScrollBarElement = ElementRef<typeof ScrollAreaPrimitive.ScrollAreaScrollbar>;

export const ScrollBar = forwardRef<ScrollBarElement, ScrollBarProps>(function ScrollBar(
	props,
	forwardedRef,
): JSX.Element {
	const { className, orientation = "vertical", ...rest } = props;

	return (
		<ScrollAreaPrimitive.ScrollAreaScrollbar
			ref={forwardedRef}
			orientation={orientation}
			className={cn(
				"flex touch-none select-none transition-colors",
				orientation === "vertical" && "h-full w-2.5 border-l border-l-transparent p-[1px]",
				orientation === "horizontal" && "h-2.5 border-t border-t-transparent p-[1px]",
				className,
			)}
			{...rest}
		>
			<ScrollAreaPrimitive.ScrollAreaThumb className="relative flex-1 rounded-full bg-neutral-300 dark:bg-neutral-700" />
		</ScrollAreaPrimitive.ScrollAreaScrollbar>
	);
});

ScrollBar.displayName = ScrollAreaPrimitive.ScrollAreaScrollbar.displayName;
