import * as AccordionPrimitive from "@radix-ui/react-accordion";
import { ChevronDownIcon } from "lucide-react";
import { type ComponentPropsWithoutRef, type ElementRef, forwardRef } from "react";

import { cn } from "@/lib/cn.js";

export const Accordion = AccordionPrimitive.Root;

//

type AccordionItemProps = ComponentPropsWithoutRef<typeof AccordionPrimitive.Item>;
type AccordionItemElement = ElementRef<typeof AccordionPrimitive.Item>;

export const AccordionItem = forwardRef<AccordionItemElement, AccordionItemProps>(
	function AccordionItem(props, forwardedRef): JSX.Element {
		const { className, ...rest } = props;

		return (
			<AccordionPrimitive.Item
				ref={forwardedRef}
				className={cn("border-b border-b-neutral-200 dark:border-b-neutral-700", className)}
				{...rest}
			/>
		);
	},
);

AccordionItem.displayName = "AccordionItem";

//

type AccordionTriggerProps = ComponentPropsWithoutRef<typeof AccordionPrimitive.Trigger>;
type AccordionTriggerElement = ElementRef<typeof AccordionPrimitive.Trigger>;

export const AccordionTrigger = forwardRef<AccordionTriggerElement, AccordionTriggerProps>(
	function AccordionTrigger(props, forwardedRef): JSX.Element {
		const { children, className, ...rest } = props;

		return (
			<AccordionPrimitive.Header className="flex">
				<AccordionPrimitive.Trigger
					ref={forwardedRef}
					className={cn(
						"flex flex-1 items-center justify-between py-4 font-medium transition-all hover:underline [&[data-state=open]>svg]:rotate-180",
						className,
					)}
					{...rest}
				>
					{children}
					<ChevronDownIcon
						aria-hidden="true"
						className="h-4 w-4 transition-transform duration-200"
					/>
				</AccordionPrimitive.Trigger>
			</AccordionPrimitive.Header>
		);
	},
);

AccordionTrigger.displayName = AccordionPrimitive.Trigger.displayName;

//

type AccordionContentProps = ComponentPropsWithoutRef<typeof AccordionPrimitive.Content>;
type AccordionContentElement = ElementRef<typeof AccordionPrimitive.Content>;

export const AccordionContent = forwardRef<AccordionContentElement, AccordionContentProps>(
	function AccordionContent(props, forwardedRef): JSX.Element {
		const { children, className, ...rest } = props;

		return (
			<AccordionPrimitive.Content
				ref={forwardedRef}
				className={cn(
					"overflow-hidden text-sm transition-all data-[state=open]:animate-accordion-down data-[state=closed]:animate-accordion-up",
					className,
				)}
				{...rest}
			>
				<div className="pt-0 pb-4">{children}</div>
			</AccordionPrimitive.Content>
		);
	},
);

AccordionContent.displayName = AccordionPrimitive.Content.displayName;
