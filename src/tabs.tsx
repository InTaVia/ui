import * as TabsPrimitive from "@radix-ui/react-tabs";
import { type ComponentPropsWithoutRef, type ElementRef, forwardRef } from "react";

import { cn } from "@/lib/cn";

const Tabs = TabsPrimitive.Root;

//

const TabsList = forwardRef<
	ElementRef<typeof TabsPrimitive.List>,
	ComponentPropsWithoutRef<typeof TabsPrimitive.List>
>(({ className, ...props }, ref) => {
	return (
		<TabsPrimitive.List
			ref={ref}
			className={cn(
				"inline-flex items-center justify-center rounded-md bg-neutral-100 p-1 dark:bg-neutral-800",
				className,
			)}
			{...props}
		/>
	);
});

TabsList.displayName = TabsPrimitive.List.displayName;

//

const TabsTrigger = forwardRef<
	ElementRef<typeof TabsPrimitive.Trigger>,
	ComponentPropsWithoutRef<typeof TabsPrimitive.Trigger>
>(({ className, ...props }, ref) => {
	return (
		<TabsPrimitive.Trigger
			className={cn(
				"inline-flex min-w-[100px] items-center justify-center rounded-[0.185rem] px-3 py-1.5  text-sm font-medium text-neutral-700 transition-all  disabled:pointer-events-none disabled:opacity-50 data-[state=active]:bg-neutral-0 data-[state=active]:text-neutral-900 data-[state=active]:shadow-sm dark:text-neutral-200 dark:data-[state=active]:bg-neutral-900",
				className,
			)}
			{...props}
			ref={ref}
		/>
	);
});

TabsTrigger.displayName = TabsPrimitive.Trigger.displayName;

//

const TabsContent = forwardRef<
	ElementRef<typeof TabsPrimitive.Content>,
	ComponentPropsWithoutRef<typeof TabsPrimitive.Content>
>(({ className, ...props }, ref) => {
	return (
		<TabsPrimitive.Content
			className={cn(
				"mt-2 rounded-md border border-neutral-200 p-6 dark:border-neutral-700",
				className,
			)}
			{...props}
			ref={ref}
		/>
	);
});

TabsContent.displayName = TabsPrimitive.Content.displayName;

//

export { Tabs, TabsContent, TabsList, TabsTrigger };
