import * as AlertDialogPrimitive from "@radix-ui/react-alert-dialog";
import { type ComponentPropsWithoutRef, type ElementRef, forwardRef } from "react";

import { cn } from "@/lib/cn.js";

export const AlertDialog = AlertDialogPrimitive.Root;

//

export const AlertDialogTrigger = AlertDialogPrimitive.Trigger;

//

type AlertDialogPortalProps = AlertDialogPrimitive.DialogPortalProps;

export function AlertDialogPortal(props: AlertDialogPortalProps): JSX.Element {
	const { children, ...rest } = props;

	return (
		<AlertDialogPrimitive.Portal {...rest}>
			<div className="fixed inset-0 z-50 flex items-start justify-center sm:items-center">
				{children}
			</div>
		</AlertDialogPrimitive.Portal>
	);
}

AlertDialogPortal.displayName = AlertDialogPrimitive.Portal.displayName;

//

type AlertDialogOverlayProps = ComponentPropsWithoutRef<typeof AlertDialogPrimitive.Overlay>;
type AlertDialogOverlayElement = ElementRef<typeof AlertDialogPrimitive.Overlay>;

export const AlertDialogOverlay = forwardRef<AlertDialogOverlayElement, AlertDialogOverlayProps>(
	function AlertDialogOverlay(props, forwardedRef): JSX.Element {
		const { className, ...rest } = props;

		return (
			<AlertDialogPrimitive.Overlay
				ref={forwardedRef}
				className={cn(
					"fixed inset-0 z-50 bg-black/50 backdrop-blur-sm transition-opacity animate-in fade-in",
					className,
				)}
				{...rest}
			/>
		);
	},
);

AlertDialogOverlay.displayName = AlertDialogPrimitive.Overlay.displayName;

//

type AlertDialogContentProps = ComponentPropsWithoutRef<typeof AlertDialogPrimitive.Content>;
type AlertDialogContentElement = ElementRef<typeof AlertDialogPrimitive.Content>;

export const AlertDialogContent = forwardRef<AlertDialogContentElement, AlertDialogContentProps>(
	function AlertDialogContent(props, forwardedRef): JSX.Element {
		const { className, ...rest } = props;

		return (
			<AlertDialogPortal>
				<AlertDialogOverlay />
				<AlertDialogPrimitive.Content
					ref={forwardedRef}
					className={cn(
						"fixed z-50 grid w-full max-w-lg scale-100 gap-4 bg-white p-6 opacity-100 animate-in fade-in-90 slide-in-from-bottom-10 dark:bg-neutral-900 sm:rounded-lg sm:zoom-in-90 sm:slide-in-from-bottom-0 md:w-full",
						className,
					)}
					{...rest}
				/>
			</AlertDialogPortal>
		);
	},
);

AlertDialogContent.displayName = AlertDialogPrimitive.Content.displayName;

//

type AlertDialogHeaderProps = ComponentPropsWithoutRef<"div">;

export function AlertDialogHeader(props: AlertDialogHeaderProps): JSX.Element {
	const { className, ...rest } = props;

	return (
		<div className={cn("flex flex-col gap-y-2 text-center sm:text-left", className)} {...rest} />
	);
}

AlertDialogHeader.displayName = "AlertDialogHeader";

//

type AlertDialogFooterProps = ComponentPropsWithoutRef<"div">;

export function AlertDialogFooter(props: AlertDialogFooterProps): JSX.Element {
	const { className, ...rest } = props;

	return (
		<div
			className={cn("flex flex-col-reverse sm:flex-row sm:justify-end sm:gap-x-2", className)}
			{...rest}
		/>
	);
}

AlertDialogFooter.displayName = "AlertDialogFooter";

//

type AlertDialogTitleProps = ComponentPropsWithoutRef<typeof AlertDialogPrimitive.Title>;
type AlertDialogTitleElement = ElementRef<typeof AlertDialogPrimitive.Title>;

export const AlertDialogTitle = forwardRef<AlertDialogTitleElement, AlertDialogTitleProps>(
	function AlertDialogTitle(props, forwardedRef): JSX.Element {
		const { className, ...rest } = props;

		return (
			<AlertDialogPrimitive.Title
				ref={forwardedRef}
				className={cn("text-lg font-semibold text-neutral-900 dark:text-neutral-50", className)}
				{...rest}
			/>
		);
	},
);

AlertDialogTitle.displayName = AlertDialogPrimitive.Title.displayName;

//

type AlertDialogDescriptionProps = ComponentPropsWithoutRef<
	typeof AlertDialogPrimitive.Description
>;
type AlertDialogDescriptionElement = ElementRef<typeof AlertDialogPrimitive.Description>;

export const AlertDialogDescription = forwardRef<
	AlertDialogDescriptionElement,
	AlertDialogDescriptionProps
>(function AlertDialogDescription(props, forwardedRef): JSX.Element {
	const { className, ...rest } = props;

	return (
		<AlertDialogPrimitive.Description
			ref={forwardedRef}
			className={cn("text-sm text-neutral-500 dark:text-neutral-400", className)}
			{...rest}
		/>
	);
});

AlertDialogDescription.displayName = AlertDialogPrimitive.Description.displayName;

//

type AlertDialogActionProps = ComponentPropsWithoutRef<typeof AlertDialogPrimitive.Action>;
type AlertDialogActionElement = ElementRef<typeof AlertDialogPrimitive.Action>;

export const AlertDialogAction = forwardRef<AlertDialogActionElement, AlertDialogActionProps>(
	function AlertDialogAction(props, forwardedRef): JSX.Element {
		const { className, ...rest } = props;

		return (
			<AlertDialogPrimitive.Action
				ref={forwardedRef}
				className={cn(
					"inline-flex h-10 items-center justify-center rounded-md bg-neutral-900 py-2 px-4 text-sm font-semibold text-white transition-colors hover:bg-neutral-700 focus:outline-none focus:ring-2 focus:ring-neutral-400 focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 dark:bg-neutral-100 dark:text-neutral-900 dark:hover:bg-neutral-200 dark:focus:ring-neutral-400 dark:focus:ring-offset-neutral-900",
					className,
				)}
				{...rest}
			/>
		);
	},
);

AlertDialogAction.displayName = AlertDialogPrimitive.Action.displayName;

//

type AlertDialogCancelProps = ComponentPropsWithoutRef<typeof AlertDialogPrimitive.Cancel>;
type AlertDialogCancelElement = ElementRef<typeof AlertDialogPrimitive.Cancel>;

export const AlertDialogCancel = forwardRef<AlertDialogCancelElement, AlertDialogCancelProps>(
	function AlertDialogCancel(props, forwardedRef): JSX.Element {
		const { className, ...rest } = props;

		return (
			<AlertDialogPrimitive.Cancel
				ref={forwardedRef}
				className={cn(
					"mt-2 inline-flex h-10 items-center justify-center rounded-md border border-neutral-200 bg-transparent py-2 px-4 text-sm font-semibold text-neutral-900 transition-colors hover:bg-neutral-100 focus:outline-none focus:ring-2 focus:ring-neutral-400 focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 dark:border-neutral-700 dark:text-neutral-100 dark:hover:bg-neutral-700 dark:focus:ring-neutral-400 dark:focus:ring-offset-neutral-900 sm:mt-0",
					className,
				)}
				{...rest}
			/>
		);
	},
);

AlertDialogCancel.displayName = AlertDialogPrimitive.Cancel.displayName;
