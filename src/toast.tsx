import * as ToastPrimitive from "@radix-ui/react-toast";
import { type VariantProps, cva } from "class-variance-authority";
import { XIcon } from "lucide-react";
import { type ComponentPropsWithoutRef, type ElementRef, forwardRef } from "react";

import { cn } from "@/lib/cn.js";

const toastVariants = cva(
	"grow-1 group pointer-events-auto relative mt-4 flex w-full items-center justify-between gap-x-4 overflow-hidden rounded-md border p-6 pr-8 shadow-lg transition-all last:mt-0 data-[swipe=move]:translate-x-[var(--radix-toast-swipe-move-x)] data-[swipe=cancel]:translate-x-0 data-[swipe=end]:translate-x-[var(--radix-toast-swipe-end-x)] data-[swipe=move]:transition-none data-[state=open]:animate-in data-[state=closed]:animate-out data-[swipe=end]:animate-out data-[state=closed]:fade-out-80 data-[state=open]:slide-in-from-top-full data-[state=closed]:slide-out-to-right-full dark:border-neutral-700 sm:last:mt-4 data-[state=open]:sm:slide-in-from-bottom-full",
	{
		variants: {
			variant: {
				default: "border-neutral-200 bg-white dark:border-neutral-700 dark:bg-neutral-800",
				/** The `destructuve` class is so we can easily target the `group-[.destructive]`. */
				destructive: "destructive group border-red-600 bg-red-600 text-white dark:border-red-600",
			},
		},
		defaultVariants: {
			variant: "default",
		} as const,
	},
);

//

export const ToastProvider = ToastPrimitive.Provider;

//

type ToastViewportProps = ComponentPropsWithoutRef<typeof ToastPrimitive.ToastViewport>;
type ToastViewportElement = ElementRef<typeof ToastPrimitive.ToastViewport>;

export const ToastViewport = forwardRef<ToastViewportElement, ToastViewportProps>(
	function ToastViewport(props, forwardedRef): JSX.Element {
		const { className, ...rest } = props;

		return (
			<ToastPrimitive.Viewport
				ref={forwardedRef}
				className={cn(
					"fixed top-0 z-[100] flex max-h-screen w-full flex-col-reverse p-4 sm:top-auto sm:bottom-0 sm:right-0 sm:flex-col md:max-w-[420px]",
					className,
				)}
				{...rest}
			/>
		);
	},
);

ToastViewport.displayName = ToastPrimitive.Viewport.displayName;

//

type ToastProps = ComponentPropsWithoutRef<typeof ToastPrimitive.Toast> &
	VariantProps<typeof toastVariants>;
type ToastElement = ElementRef<typeof ToastPrimitive.Toast>;

export const Toast = forwardRef<ToastElement, ToastProps>(function Toast(
	props,
	forwardedRef,
): JSX.Element {
	const { className, variant, ...rest } = props;

	return (
		<ToastPrimitive.Root
			ref={forwardedRef}
			className={cn(toastVariants({ variant }), className)}
			{...rest}
		/>
	);
});

Toast.displayName = ToastPrimitive.Root.displayName;

//

type ToastActionProps = ComponentPropsWithoutRef<typeof ToastPrimitive.ToastAction>;
type ToastActionElement = ElementRef<typeof ToastPrimitive.ToastAction>;

export const ToastAction = forwardRef<ToastActionElement, ToastActionProps>(function ToastAction(
	props,
	forwardedRef,
): JSX.Element {
	const { className, ...rest } = props;

	return (
		<ToastPrimitive.Action
			ref={forwardedRef}
			className={cn(
				"inline-flex h-8 shrink-0 items-center justify-center rounded-md border border-neutral-200 bg-transparent px-3 text-sm font-medium transition-colors hover:bg-neutral-100 focus:outline-none focus:ring-2 focus:ring-neutral-400 focus:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 group-[.destructive]:border-red-100 group-[.destructive]:hover:border-neutral-50 group-[.destructive]:hover:bg-red-100 group-[.destructive]:hover:text-red-600 group-[.destructive]:focus:ring-red-400 group-[.destructive]:focus:ring-offset-red-600 dark:border-neutral-700 dark:text-neutral-100 dark:hover:bg-neutral-700 dark:hover:text-neutral-100 dark:focus:ring-neutral-400 dark:focus:ring-offset-neutral-900 dark:data-[state=open]:bg-neutral-800",
				className,
			)}
			{...rest}
		/>
	);
});

ToastAction.displayName = ToastPrimitive.Action.displayName;

//

type ToastCloseProps = ComponentPropsWithoutRef<typeof ToastPrimitive.ToastClose>;
type ToastCloseElement = ElementRef<typeof ToastPrimitive.ToastClose>;

export const ToastClose = forwardRef<ToastCloseElement, ToastCloseProps>(function ToastClose(
	props,
	forwardedRef,
): JSX.Element {
	const { className, ...rest } = props;

	return (
		<ToastPrimitive.Close
			ref={forwardedRef}
			className={cn(
				"absolute top-2 right-2 rounded-md p-1 text-neutral-500 opacity-0 transition hover:text-neutral-900 focus:opacity-100 focus:outline-none focus:ring-2 group-hover:opacity-100 group-[.destructive]:text-red-300 group-[.destructive]:hover:text-red-50 group-[.destructive]:focus:ring-red-400 group-[.destructive]:focus:ring-offset-red-600 dark:hover:text-neutral-50",
				className,
			)}
			toast-close=""
			{...rest}
		>
			<XIcon aria-hidden="true" className="h-4 w-4" />
		</ToastPrimitive.Close>
	);
});

ToastClose.displayName = ToastPrimitive.Close.displayName;

//

type ToastTitleProps = ComponentPropsWithoutRef<typeof ToastPrimitive.ToastTitle>;
type ToastTitleElement = ElementRef<typeof ToastPrimitive.ToastTitle>;

export const ToastTitle = forwardRef<ToastTitleElement, ToastTitleProps>(function ToastTitle(
	props,
	forwardedRef,
): JSX.Element {
	const { className, ...rest } = props;

	return (
		<ToastPrimitive.Title
			ref={forwardedRef}
			className={cn("text-sm font-semibold", className)}
			{...rest}
		/>
	);
});

ToastTitle.displayName = ToastPrimitive.Title.displayName;

//

type ToastDescriptionProps = ComponentPropsWithoutRef<typeof ToastPrimitive.ToastDescription>;
type ToastDescriptionElement = ElementRef<typeof ToastPrimitive.ToastDescription>;

export const ToastDescription = forwardRef<ToastDescriptionElement, ToastDescriptionProps>(
	function ToastDescription(props, forwardedRef): JSX.Element {
		const { className, ...rest } = props;

		return (
			<ToastPrimitive.Description
				ref={forwardedRef}
				className={cn("text-sm opacity-90", className)}
				{...rest}
			/>
		);
	},
);

ToastDescription.displayName = ToastPrimitive.Description.displayName;
