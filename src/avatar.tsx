import * as AvatarPrimitive from "@radix-ui/react-avatar";
import { type ComponentPropsWithoutRef, type ElementRef, forwardRef } from "react";

import { cn } from "@/lib/cn";

type AvatarProps = ComponentPropsWithoutRef<typeof AvatarPrimitive.Root>;
type AvatarElement = ElementRef<typeof AvatarPrimitive.Root>;

export const Avatar = forwardRef<AvatarElement, AvatarProps>(function Avatar(
	props,
	forwardedRef,
): JSX.Element {
	const { className, ...rest } = props;

	return (
		<AvatarPrimitive.Root
			ref={forwardedRef}
			className={cn("relative flex h-10 w-10 shrink-0 overflow-hidden rounded-full", className)}
			{...rest}
		/>
	);
});

Avatar.displayName = AvatarPrimitive.Root.displayName;

//

type AvatarImageProps = ComponentPropsWithoutRef<typeof AvatarPrimitive.Image>;
type AvatarImageElement = ElementRef<typeof AvatarPrimitive.Image>;

export const AvatarImage = forwardRef<AvatarImageElement, AvatarImageProps>(function AvatarImage(
	props,
	forwardedRef,
): JSX.Element {
	const { className, ...rest } = props;

	return (
		<AvatarPrimitive.Image
			ref={forwardedRef}
			className={cn("aspect-square h-full w-full", className)}
			{...rest}
		/>
	);
});

AvatarImage.displayName = AvatarPrimitive.Image.displayName;

//

type AvatarFallbackProps = ComponentPropsWithoutRef<typeof AvatarPrimitive.Fallback>;
type AvatarFallbackElement = ElementRef<typeof AvatarPrimitive.Fallback>;

export const AvatarFallback = forwardRef<AvatarFallbackElement, AvatarFallbackProps>(
	function AvatarFallback(props, forwardedRef): JSX.Element {
		const { className, ...rest } = props;

		return (
			<AvatarPrimitive.Fallback
				ref={forwardedRef}
				className={cn(
					"flex h-full w-full items-center justify-center rounded-full bg-neutral-100 dark:bg-neutral-700",
					className,
				)}
				{...rest}
			/>
		);
	},
);

AvatarFallback.displayName = AvatarPrimitive.Fallback.displayName;
