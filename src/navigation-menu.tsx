import * as NavigationMenuPrimitive from "@radix-ui/react-navigation-menu";
import { ChevronDownIcon } from "lucide-react";
import { type ComponentPropsWithoutRef, type ElementRef, forwardRef } from "react";

import { cn } from "@/lib/cn";

export const NavigationMenuItem = NavigationMenuPrimitive.Item;

//

export const NavigationMenuLink = NavigationMenuPrimitive.Link;

//

type NavigationMenuProps = ComponentPropsWithoutRef<typeof NavigationMenuPrimitive.Root>;
type NavigationMenuElement = ElementRef<typeof NavigationMenuPrimitive.Root>;

export const NavigationMenu = forwardRef<NavigationMenuElement, NavigationMenuProps>(
	function NavigationMenu(props, forwardedRef): JSX.Element {
		const { children, className, ...rest } = props;

		return (
			<NavigationMenuPrimitive.Root
				ref={forwardedRef}
				className={cn("relative z-10 flex flex-1 items-center justify-center", className)}
				{...rest}
			>
				{children}
				<NavigationMenuViewport />
			</NavigationMenuPrimitive.Root>
		);
	},
);

NavigationMenu.displayName = NavigationMenuPrimitive.Root.displayName;

//

type NavigationMenuListProps = ComponentPropsWithoutRef<typeof NavigationMenuPrimitive.List>;
type NavigationMenuListElement = ElementRef<typeof NavigationMenuPrimitive.List>;

export const NavigationMenuList = forwardRef<NavigationMenuListElement, NavigationMenuListProps>(
	function NavigationMenuList(props, forwardedRef): JSX.Element {
		const { className, ...rest } = props;

		return (
			<NavigationMenuPrimitive.List
				ref={forwardedRef}
				className={cn("group flex flex-1 list-none items-center justify-center", className)}
				{...rest}
			/>
		);
	},
);

NavigationMenuList.displayName = NavigationMenuPrimitive.List.displayName;

//

type NavigationMenuTriggerProps = ComponentPropsWithoutRef<typeof NavigationMenuPrimitive.Trigger>;
type NavigationMenuTriggerElement = ElementRef<typeof NavigationMenuPrimitive.Trigger>;

export const NavigationMenuTrigger = forwardRef<
	NavigationMenuTriggerElement,
	NavigationMenuTriggerProps
>(function NavigationMenuTrigger(props, forwardedRef): JSX.Element {
	const { children, className, ...rest } = props;

	return (
		<NavigationMenuPrimitive.Trigger
			ref={forwardedRef}
			className={cn(
				"inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus:outline-none focus:bg-neutral-100 disabled:opacity-50 dark:focus:bg-neutral-800 disabled:pointer-events-none bg-transparent hover:bg-neutral-100 dark:hover:bg-neutral-800 dark:text-neutral-100 dark:hover:text-neutral-100 data-[state=open]:bg-neutral-50 dark:data-[state=open]:bg-neutral-800 data-[active]:bg-neutral-50 dark:data-[active]:bg-neutral-800 h-10 py-2 px-4 group w-max group",
				className,
			)}
			{...rest}
		>
			{children}{" "}
			<ChevronDownIcon
				aria-hidden="true"
				className="relative top-[1px] ml-1 h-3 w-3 transition duration-200 group-data-[state=open]:rotate-180"
			/>
		</NavigationMenuPrimitive.Trigger>
	);
});

NavigationMenuTrigger.displayName = NavigationMenuPrimitive.Trigger.displayName;

//

type NavigationMenuContentProps = ComponentPropsWithoutRef<typeof NavigationMenuPrimitive.Content>;
type NavigationMenuContentElement = ElementRef<typeof NavigationMenuPrimitive.Content>;

export const NavigationMenuContent = forwardRef<
	NavigationMenuContentElement,
	NavigationMenuContentProps
>(function NavigationMenuContent(props, forwardedRef): JSX.Element {
	const { className, ...rest } = props;

	return (
		<NavigationMenuPrimitive.Content
			ref={forwardedRef}
			className={cn(
				"top-0 left-0 w-full data-[motion^=from-]:animate-in data-[motion^=to-]:animate-out data-[motion^=from-]:fade-in data-[motion^=to-]:fade-out data-[motion=to-start]:slide-out-to-left-52 data-[motion=to-end]:slide-out-to-right-52 data-[motion=from-start]:slide-in-from-left-52 data-[motion=from-end]:slide-in-from-right-52 md:absolute md:w-auto ",
				className,
			)}
			{...rest}
		/>
	);
});

NavigationMenuContent.displayName = NavigationMenuPrimitive.Content.displayName;

//

type NavigationMenuViewportProps = ComponentPropsWithoutRef<
	typeof NavigationMenuPrimitive.Viewport
>;
type NavigationMenuViewportElement = ElementRef<typeof NavigationMenuPrimitive.Viewport>;

export const NavigationMenuViewport = forwardRef<
	NavigationMenuViewportElement,
	NavigationMenuViewportProps
>(function NavigationMenuViewport(props, forwardedRef): JSX.Element {
	const { className, ...rest } = props;

	return (
		<div className="absolute left-0 top-full flex justify-center">
			<NavigationMenuPrimitive.Viewport
				ref={forwardedRef}
				className={cn(
					"origin-top-center relative mt-1.5 h-[var(--radix-navigation-menu-viewport-height)] w-full overflow-hidden rounded-md border border-neutral-200 bg-white shadow-lg data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=open]:zoom-in-90 data-[state=closed]:zoom-out-95 dark:border-neutral-700 dark:bg-neutral-800 md:w-[var(--radix-navigation-menu-viewport-width)]",
					className,
				)}
				{...rest}
			/>
		</div>
	);
});

NavigationMenuViewport.displayName = NavigationMenuPrimitive.Viewport.displayName;

//

type NavigationMenuIndicatorProps = ComponentPropsWithoutRef<
	typeof NavigationMenuPrimitive.Indicator
>;
type NavigationMenuIndicatorElement = ElementRef<typeof NavigationMenuPrimitive.Indicator>;

export const NavigationMenuIndicator = forwardRef<
	NavigationMenuIndicatorElement,
	NavigationMenuIndicatorProps
>(function NavigationMenuIndicator(props, forwardedRef): JSX.Element {
	const { className, ...rest } = props;

	return (
		<NavigationMenuPrimitive.Indicator
			ref={forwardedRef}
			className={cn(
				"top-full z-[1] flex h-1.5 items-end justify-center overflow-hidden data-[state=visible]:animate-in data-[state=hidden]:animate-out data-[state=visible]:fade-in data-[state=hidden]:fade-out",
				className,
			)}
			{...rest}
		>
			<div className="relative top-[60%] h-2 w-2 rotate-45 rounded-tl-sm bg-neutral-200 shadow-md dark:bg-neutral-800" />
		</NavigationMenuPrimitive.Indicator>
	);
});

NavigationMenuIndicator.displayName = NavigationMenuPrimitive.Indicator.displayName;
