import { type ComponentPropsWithoutRef, type ElementRef, forwardRef } from "react";

type IconProps = ComponentPropsWithoutRef<"svg">;
type IconElement = ElementRef<"svg">;

export const SpinnerIcon = forwardRef<IconElement, IconProps>(function SpinnerIcon(
	props,
	forwardedRef,
): JSX.Element {
	const { children, ...rest } = props;

	return (
		<svg
			ref={forwardedRef}
			width={24}
			height={24}
			viewBox="0 0 24 24"
			fill="none"
			stroke="currentColor"
			strokeWidth={2}
			strokeLinecap="round"
			strokeLinejoin="round"
			{...rest}
		>
			<path d="M21 12a9 9 0 1 1-6.219-8.56" />
			{children}
		</svg>
	);
});

SpinnerIcon.displayName = "SpinnerIcon";
