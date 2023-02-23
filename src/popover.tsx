import * as PopoverPrimitive from "@radix-ui/react-popover";
import { type ComponentPropsWithoutRef, type ElementRef, forwardRef } from "react";

import { cn } from "@/lib/cn";

export const Popover = PopoverPrimitive.Root;

//

export const PopoverTrigger = PopoverPrimitive.Trigger;

//

type PopoverContentProps = ComponentPropsWithoutRef<typeof PopoverPrimitive.Content>;
type PopoverContentElement = ElementRef<typeof PopoverPrimitive.Content>;

export const PopoverContent = forwardRef<PopoverContentElement, PopoverContentProps>(
	function PopoverContent(props, forwardedRef): JSX.Element {
		const { align = "center", className, sideOffset = 4, ...rest } = props;

		return (
			<PopoverPrimitive.Portal>
				<PopoverPrimitive.Content
					ref={forwardedRef}
					align={align}
					className={cn(
						"z-50 w-72 rounded-md border border-neutral-100 bg-white p-4 shadow-md outline-none animate-in data-[side=bottom]:slide-in-from-top-2 data-[side=top]:slide-in-from-bottom-2 data-[side=right]:slide-in-from-left-2 data-[side=left]:slide-in-from-right-2 dark:border-neutral-800 dark:bg-neutral-800",
						className,
					)}
					sideOffset={sideOffset}
					{...rest}
				/>
			</PopoverPrimitive.Portal>
		);
	},
);

PopoverContent.displayName = PopoverPrimitive.Content.displayName;
