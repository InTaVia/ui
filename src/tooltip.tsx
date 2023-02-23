import * as TooltipPrimitive from "@radix-ui/react-tooltip";
import { type ComponentPropsWithoutRef, type ElementRef, forwardRef } from "react";

import { cn } from "@/lib/cn";

export const TooltipProvider = TooltipPrimitive.Provider;

//

export const Tooltip = TooltipPrimitive.Root;

//

export const TooltipTrigger = TooltipPrimitive.Trigger;

//

type TooltipContentProps = ComponentPropsWithoutRef<typeof TooltipPrimitive.Content>;
type TooltipContentElement = ElementRef<typeof TooltipPrimitive.Content>;

export const TooltipContent = forwardRef<TooltipContentElement, TooltipContentProps>(
	function TooltipContent(props, forwardedRef): JSX.Element {
		const { className, sideOffset = 4, ...rest } = props;

		return (
			<TooltipPrimitive.Content
				ref={forwardedRef}
				className={cn(
					"z-50 overflow-hidden rounded-md border border-neutral-100 bg-white px-3 py-1.5 text-sm text-neutral-700 shadow-md animate-in fade-in-50 data-[side=bottom]:slide-in-from-top-1 data-[side=top]:slide-in-from-bottom-1 data-[side=left]:slide-in-from-right-1 data-[side=right]:slide-in-from-left-1 dark:border-neutral-800 dark:bg-neutral-800 dark:text-neutral-400",
					className,
				)}
				sideOffset={sideOffset}
				{...rest}
			/>
		);
	},
);

TooltipContent.displayName = TooltipPrimitive.Content.displayName;
