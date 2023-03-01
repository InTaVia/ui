import * as LabelPrimitive from "@radix-ui/react-label";
import { type ComponentPropsWithoutRef, type ElementRef, forwardRef } from "react";

import { cn } from "@/lib/cn";

type LabelProps = ComponentPropsWithoutRef<typeof LabelPrimitive.Root>;
type LabelElement = ElementRef<typeof LabelPrimitive.Root>;

export const Label = forwardRef<LabelElement, LabelProps>(function Label(
	props,
	forwardedRef,
): JSX.Element {
	const { className, ...rest } = props;

	return (
		<LabelPrimitive.Root
			ref={forwardedRef}
			className={cn(
				"text-xs font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70",
				className,
			)}
			{...rest}
		/>
	);
});

Label.displayName = LabelPrimitive.Root.displayName;
