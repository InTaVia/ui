import * as AccordionPrimitive from "@radix-ui/react-accordion";
import { type ComponentPropsWithoutRef, type ElementRef, forwardRef } from "react";

import { ChevronDownIcon } from "@/icons";
import { cn } from "@/lib/cn";

const Accordion = AccordionPrimitive.Root;

const AccordionItem = forwardRef<
	ElementRef<typeof AccordionPrimitive.Item>,
	ComponentPropsWithoutRef<typeof AccordionPrimitive.Item>
>(({ className, ...props }, ref) => {
	return (
		<AccordionPrimitive.Item
			ref={ref}
			className={cn("font-sans border-b border-b-neutral-200 dark:border-b-neutral-700", className)}
			{...props}
		/>
	);
});

AccordionItem.displayName = "AccordionItem";

//

const AccordionTrigger = forwardRef<
	ElementRef<typeof AccordionPrimitive.Trigger>,
	ComponentPropsWithoutRef<typeof AccordionPrimitive.Trigger>
>(({ className, children, ...props }, ref) => {
	return (
		<AccordionPrimitive.Header className="flex">
			<AccordionPrimitive.Trigger
				ref={ref}
				className={cn(
					"flex flex-1 items-center justify-between py-4 font-medium transition-all hover:underline [&[data-state=open]>svg]:rotate-180",
					className,
				)}
				{...props}
			>
				{children}
				<ChevronDownIcon className="h-4 w-4 transition-transform duration-200" />
			</AccordionPrimitive.Trigger>
		</AccordionPrimitive.Header>
	);
});

AccordionTrigger.displayName = AccordionPrimitive.Trigger.displayName;

//

const AccordionContent = forwardRef<
	ElementRef<typeof AccordionPrimitive.Content>,
	ComponentPropsWithoutRef<typeof AccordionPrimitive.Content>
>(({ className, children, ...props }, ref) => {
	return (
		<AccordionPrimitive.Content
			ref={ref}
			className={cn(
				"overflow-hidden text-sm transition-all data-[state=open]:animate-accordion-down data-[state=closed]:animate-accordion-up",
				className,
			)}
			{...props}
		>
			<div className="pt-0 pb-4">{children}</div>
		</AccordionPrimitive.Content>
	);
});

AccordionContent.displayName = AccordionPrimitive.Content.displayName;

//

export { Accordion, AccordionContent, AccordionItem, AccordionTrigger };
