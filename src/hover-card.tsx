import * as HoverCardPrimitive from "@radix-ui/react-hover-card";
import { type ComponentPropsWithoutRef, type ElementRef, forwardRef } from "react";

import { cn } from "@/lib/cn";

export const HoverCard = HoverCardPrimitive.Root;

//

export const HoverCardTrigger = HoverCardPrimitive.Trigger;

//

type HoverCardContentProps = ComponentPropsWithoutRef<typeof HoverCardPrimitive.Content>;
type HoverCardContentElement = ElementRef<typeof HoverCardPrimitive.Content>;

export const HoverCardContent = forwardRef<HoverCardContentElement, HoverCardContentProps>(
	function HoverCardContent(props, forwardedRef): JSX.Element {
		const { align, className, sideOffset, ...rest } = props;

		return (
			<HoverCardPrimitive.Content
				ref={forwardedRef}
				align={align}
				className={cn(
					"z-50 w-64 rounded-md border border-neutral-100 bg-white p-4 shadow-md outline-none animate-in zoom-in-90 dark:border-neutral-800 dark:bg-neutral-800",
					className,
				)}
				sideOffset={sideOffset}
				{...rest}
			/>
		);
	},
);

HoverCardContent.displayName = HoverCardPrimitive.Content.displayName;
