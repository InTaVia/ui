import * as HoverCardPrimitive from "@radix-ui/react-hover-card";
import { type ComponentPropsWithoutRef, type ElementRef, forwardRef } from "react";

import { cn } from "@/lib/cn";

const HoverCard = HoverCardPrimitive.Root;

const HoverCardTrigger = HoverCardPrimitive.Trigger;

//

const HoverCardContent = forwardRef<
	ElementRef<typeof HoverCardPrimitive.Content>,
	ComponentPropsWithoutRef<typeof HoverCardPrimitive.Content>
>(({ className, align = "center", sideOffset = 4, ...props }, ref) => {
	return (
		<HoverCardPrimitive.Content
			ref={ref}
			align={align}
			sideOffset={sideOffset}
			className={cn(
				"z-50 w-64 rounded-md border border-neutral-100 bg-neutral-0 p-4 shadow-md outline-none animate-in zoom-in-90 dark:border-neutral-800 dark:bg-neutral-800",
				className,
			)}
			{...props}
		/>
	);
});

HoverCardContent.displayName = HoverCardPrimitive.Content.displayName;

//

export { HoverCard, HoverCardContent, HoverCardTrigger };
