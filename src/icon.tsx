import { isNonEmptyString } from "@stefanprobst/is-nonempty-string";
import { type ForwardedRef, type ReactNode, type SVGProps, forwardRef } from "react";

interface IconProps<T extends string> extends SVGProps<SVGSVGElement> {
	children?: ReactNode;
	icon: T;
}

export const Icon = forwardRef(function Icon<T extends string>(
	props: IconProps<T>,
	forwardedRef?: ForwardedRef<SVGSVGElement>,
): JSX.Element {
	const { children, icon, ...rest } = props;

	const href = "#" + icon;

	return (
		<svg
			ref={forwardedRef}
			aria-hidden={isNonEmptyString(props["aria-label"]) === false}
			width="1em"
			{...rest}
		>
			<use xlinkHref={href} />
			{children}
		</svg>
	);
}) as <T extends string>(
	props: IconProps<T>,
	forwardedRef?: ForwardedRef<SVGSVGElement>,
) => JSX.Element;
