import { type ComponentPropsWithoutRef, type ElementRef, forwardRef } from "react";

import { Button } from "@/button";
import { cn } from "@/lib/cn";

type IconButtonProps = ComponentPropsWithoutRef<typeof Button> & { label: string };
type IconButtonElement = ElementRef<typeof Button>;

export const IconButton = forwardRef<IconButtonElement, IconButtonProps>(function IconButton(
	props,
	forwardedRef,
): JSX.Element {
	const { children, className, label, ...rest } = props;

	return (
		<Button
			ref={forwardedRef}
			className={cn("aspect-square p-2", className)}
			title={label}
			{...rest}
		>
			{children}
			<span className="sr-only">{label}</span>
		</Button>
	);
});

IconButton.displayName = "IconButton";
