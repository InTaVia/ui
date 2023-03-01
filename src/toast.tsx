import * as ToastPrimitives from "@radix-ui/react-toast";
import { type VariantProps, cva } from "class-variance-authority";
import { XIcon } from "lucide-react";
import { type ComponentPropsWithoutRef, type ElementRef, forwardRef } from "react";

import { cn } from "@/lib/cn";

const toastVariants = cva(
	"data-[swipe=move]:transition-none grow-1 group relative pointer-events-auto flex w-full items-center justify-between space-x-4 overflow-hidden rounded-md border p-6 pr-8 shadow-lg transition-all data-[swipe=move]:translate-x-[var(--radix-toast-swipe-move-x)] data-[swipe=cancel]:translate-x-0 data-[swipe=end]:translate-x-[var(--radix-toast-swipe-end-x)] data-[state=open]:animate-in data-[state=closed]:animate-out data-[swipe=end]:animate-out data-[state=closed]:fade-out-80 data-[state=open]:slide-in-from-top-full data-[state=open]:sm:slide-in-from-bottom-full mt-4 data-[state=closed]:slide-out-to-right-full dark:border-neutral-700 last:mt-0 sm:last:mt-4",
	{
		variants: {
			variant: {
				default: "bg-white border-neutral-200 dark:bg-neutral-800 dark:border-neutral-700",
				destructive: "group destructive bg-red-600 text-white border-red-600 dark:border-red-600",
			},
		},
		defaultVariants: {
			variant: "default",
		},
	},
);

//

export const ToastProvider = ToastPrimitives.Provider;

//

type ToastViewportProps = ComponentPropsWithoutRef<typeof ToastPrimitives.ToastViewport>;
type ToastViewportElement = ElementRef<typeof ToastPrimitives.ToastViewport>;

export const ToastViewport = forwardRef<ToastViewportElement, ToastViewportProps>(
	function ToastViewport(props, forwardedRef): JSX.Element {
		const { className, ...rest } = props;

		return (
			<ToastPrimitives.Viewport
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

ToastViewport.displayName = ToastPrimitives.Viewport.displayName;

//

type ToastProps = ComponentPropsWithoutRef<typeof ToastPrimitives.Toast> &
	VariantProps<typeof toastVariants>;
type ToastElement = ElementRef<typeof ToastPrimitives.Toast>;

export const Toast = forwardRef<ToastElement, ToastProps>(function Toast(
	props,
	forwardedRef,
): JSX.Element {
	const { className, variant, ...rest } = props;

	return (
		<ToastPrimitives.Root
			ref={forwardedRef}
			className={cn(toastVariants({ variant }), className)}
			{...rest}
		/>
	);
});

Toast.displayName = ToastPrimitives.Root.displayName;

//

type ToastActionProps = ComponentPropsWithoutRef<typeof ToastPrimitives.ToastAction>;
type ToastActionElement = ElementRef<typeof ToastPrimitives.ToastAction>;

export const ToastAction = forwardRef<ToastActionElement, ToastActionProps>(function ToastAction(
	props,
	forwardedRef,
): JSX.Element {
	const { className, ...rest } = props;

	return (
		<ToastPrimitives.Action
			ref={forwardedRef}
			className={cn(
				"inline-flex h-8 shrink-0 items-center justify-center rounded-md border border-neutral-200 bg-transparent px-3 text-sm font-medium transition-colors hover:bg-neutral-100 focus:outline-none focus:ring-2 focus:ring-neutral-400 focus:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 group-[.destructive]:border-red-100 group-[.destructive]:hover:border-neutral-50 group-[.destructive]:hover:bg-red-100 group-[.destructive]:hover:text-red-600 group-[.destructive]:focus:ring-red-400 group-[.destructive]:focus:ring-offset-red-600 dark:border-neutral-700 dark:text-neutral-100 dark:hover:bg-neutral-700 dark:hover:text-neutral-100 dark:focus:ring-neutral-400 dark:focus:ring-offset-neutral-900 dark:data-[state=open]:bg-neutral-800",
				className,
			)}
			{...rest}
		/>
	);
});

ToastAction.displayName = ToastPrimitives.Action.displayName;

//

type ToastCloseProps = ComponentPropsWithoutRef<typeof ToastPrimitives.ToastClose>;
type ToastCloseElement = ElementRef<typeof ToastPrimitives.ToastClose>;

export const ToastClose = forwardRef<ToastCloseElement, ToastCloseProps>(function ToastClose(
	props,
	forwardedRef,
): JSX.Element {
	const { className, ...rest } = props;

	return (
		<ToastPrimitives.Close
			ref={forwardedRef}
			className={cn(
				"absolute top-2 right-2 rounded-md p-1 text-neutral-500 opacity-0 transition-opacity hover:text-neutral-900 focus:opacity-100 focus:outline-none focus:ring-2 group-hover:opacity-100 group-[.destructive]:text-red-300 group-[.destructive]:hover:text-red-50 group-[.destructive]:focus:ring-red-400 group-[.destructive]:focus:ring-offset-red-600 dark:hover:text-neutral-50",
				className,
			)}
			toast-close=""
			{...rest}
		>
			<XIcon className="h-4 w-4" />
		</ToastPrimitives.Close>
	);
});

ToastClose.displayName = ToastPrimitives.Close.displayName;

//

type ToastTitleProps = ComponentPropsWithoutRef<typeof ToastPrimitives.ToastTitle>;
type ToastTitleElement = ElementRef<typeof ToastPrimitives.ToastTitle>;

export const ToastTitle = forwardRef<ToastTitleElement, ToastTitleProps>(function ToastTitle(
	props,
	forwardedRef,
): JSX.Element {
	const { className, ...rest } = props;

	return (
		<ToastPrimitives.Title
			ref={forwardedRef}
			className={cn("text-sm font-semibold", className)}
			{...rest}
		/>
	);
});

ToastTitle.displayName = ToastPrimitives.Title.displayName;

//

type ToastDescriptionProps = ComponentPropsWithoutRef<typeof ToastPrimitives.ToastDescription>;
type ToastDescriptionElement = ElementRef<typeof ToastPrimitives.ToastDescription>;

export const ToastDescription = forwardRef<ToastDescriptionElement, ToastDescriptionProps>(
	function ToastDescription(props, forwardedRef): JSX.Element {
		const { className, ...rest } = props;

		return (
			<ToastPrimitives.Description
				ref={forwardedRef}
				className={cn("text-sm opacity-90", className)}
				{...rest}
			/>
		);
	},
);

ToastDescription.displayName = ToastPrimitives.Description.displayName;
