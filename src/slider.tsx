import * as SliderPrimitive from "@radix-ui/react-slider";
import { type ComponentPropsWithoutRef, type ElementRef, forwardRef } from "react";

import { cn } from "@/lib/cn";

type SliderProps = ComponentPropsWithoutRef<typeof SliderPrimitive.Root>;
type SliderElement = ElementRef<typeof SliderPrimitive.Root>;

export const Slider = forwardRef<SliderElement, SliderProps>(function Slider(
	props,
	forwardedRef,
): JSX.Element {
	const { className, ...rest } = props;

	return (
		<SliderPrimitive.Root
			ref={forwardedRef}
			className={cn("relative flex w-full touch-none select-none items-center", className)}
			{...rest}
		>
			<SliderPrimitive.Track className="relative h-2 w-full grow overflow-hidden rounded-full bg-neutral-200 dark:bg-neutral-800">
				<SliderPrimitive.Range className="absolute h-full bg-neutral-900  dark:bg-neutral-400" />
			</SliderPrimitive.Track>
			<SliderPrimitive.Thumb className="block h-5 w-5 rounded-full border-2 border-neutral-900 bg-white transition-colors focus:outline-none focus:ring-2 focus:ring-neutral-400 focus:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 dark:border-neutral-100 dark:bg-neutral-400 dark:focus:ring-neutral-400 dark:focus:ring-offset-neutral-900" />
		</SliderPrimitive.Root>
	);
});

Slider.displayName = SliderPrimitive.Root.displayName;
