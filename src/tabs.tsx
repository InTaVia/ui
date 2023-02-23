import * as TabsPrimitive from "@radix-ui/react-tabs";
import { type ComponentPropsWithoutRef, type ElementRef, forwardRef } from "react";

import { cn } from "@/lib/cn";

export const Tabs = TabsPrimitive.Root;

//

type TabsListProps = ComponentPropsWithoutRef<typeof TabsPrimitive.List>;
type TabsListElement = ElementRef<typeof TabsPrimitive.List>;

export const TabsList = forwardRef<TabsListElement, TabsListProps>(function TabsList(
	props,
	forwardedRef,
): JSX.Element {
	const { className, ...rest } = props;

	return (
		<TabsPrimitive.List
			ref={forwardedRef}
			className={cn(
				"inline-flex items-center justify-center rounded-md bg-neutral-100 p-1 dark:bg-neutral-800",
				className,
			)}
			{...rest}
		/>
	);
});

TabsList.displayName = TabsPrimitive.List.displayName;

//

type TabsTriggerProps = ComponentPropsWithoutRef<typeof TabsPrimitive.Trigger>;
type TabsTriggerElement = ElementRef<typeof TabsPrimitive.Trigger>;

export const TabsTrigger = forwardRef<TabsTriggerElement, TabsTriggerProps>(function TabsTrigger(
	props,
	forwardedRef,
): JSX.Element {
	const { className, ...rest } = props;

	return (
		<TabsPrimitive.Trigger
			ref={forwardedRef}
			className={cn(
				"inline-flex min-w-[100px] items-center justify-center rounded-[0.185rem] px-3 py-1.5  text-sm font-medium text-neutral-700 transition-all  disabled:pointer-events-none disabled:opacity-50 data-[state=active]:bg-white data-[state=active]:text-neutral-900 data-[state=active]:shadow-sm dark:text-neutral-200 dark:data-[state=active]:bg-neutral-900 dark:data-[state=active]:text-neutral-100",
				className,
			)}
			{...rest}
		/>
	);
});

TabsTrigger.displayName = TabsPrimitive.Trigger.displayName;

//

type TabsContentProps = ComponentPropsWithoutRef<typeof TabsPrimitive.Content>;
type TabsContentElement = ElementRef<typeof TabsPrimitive.Content>;

export const TabsContent = forwardRef<TabsContentElement, TabsContentProps>(function TabsContent(
	props,
	forwardedRef,
): JSX.Element {
	const { className, ...rest } = props;

	return (
		<TabsPrimitive.Content
			ref={forwardedRef}
			className={cn(
				"mt-2 rounded-md border border-neutral-200 p-6 dark:border-neutral-700",
				className,
			)}
			{...rest}
		/>
	);
});

TabsContent.displayName = TabsPrimitive.Content.displayName;
