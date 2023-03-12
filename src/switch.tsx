import * as SwitchPrimitive from "@radix-ui/react-switch";
import { type ComponentPropsWithoutRef, type ElementRef, forwardRef } from "react";

import { cn } from "@/lib/cn.js";

type SwitchProps = ComponentPropsWithoutRef<typeof SwitchPrimitive.Root>;
type SwitchElement = ElementRef<typeof SwitchPrimitive.Root>;

export const Switch = forwardRef<SwitchElement, SwitchProps>(function Switch(
	props,
	forwardedRef,
): JSX.Element {
	const { className, ...rest } = props;

	return (
		<SwitchPrimitive.Root
			ref={forwardedRef}
			className={cn(
				"peer inline-flex h-[24px] w-[44px] shrink-0 cursor-pointer items-center rounded-full border-2 border-transparent transition-colors focus:outline-none focus:ring-2 focus:ring-neutral-400 focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 data-[state=unchecked]:bg-neutral-200 data-[state=checked]:bg-neutral-900 dark:focus:ring-neutral-400 dark:focus:ring-offset-neutral-900 dark:data-[state=unchecked]:bg-neutral-700 dark:data-[state=checked]:bg-neutral-400",
				className,
			)}
			{...rest}
		>
			<SwitchPrimitive.Thumb
				className={cn(
					"pointer-events-none block h-5 w-5 rounded-full bg-white shadow-lg ring-0 transition-transform data-[state=unchecked]:translate-x-0 data-[state=checked]:translate-x-5",
				)}
			/>
		</SwitchPrimitive.Root>
	);
});

Switch.displayName = SwitchPrimitive.Root.displayName;
