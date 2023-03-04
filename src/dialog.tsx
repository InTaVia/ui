import * as DialogPrimitive from "@radix-ui/react-dialog";
import { XIcon } from "lucide-react";
import { type ComponentPropsWithoutRef, type ElementRef, forwardRef } from "react";

import { cn } from "@/lib/cn";

export const Dialog = DialogPrimitive.Root;

//

export const DialogTrigger = DialogPrimitive.Trigger;

//

type DialogPortalProps = DialogPrimitive.DialogPortalProps;

export function DialogPortal(props: DialogPortalProps): JSX.Element {
	const { children, ...rest } = props;

	return (
		<DialogPrimitive.Portal {...rest}>
			<div className="fixed inset-0 z-50 flex items-start justify-center sm:items-center">
				{children}
			</div>
		</DialogPrimitive.Portal>
	);
}

DialogPortal.displayName = DialogPrimitive.Portal.displayName;

//

type DialogOverlayProps = ComponentPropsWithoutRef<typeof DialogPrimitive.Overlay>;
type DialogOverlayElement = ElementRef<typeof DialogPrimitive.Overlay>;

export const DialogOverlay = forwardRef<DialogOverlayElement, DialogOverlayProps>(
	function DialogOverlay(props, forwardedRef): JSX.Element {
		const { className, ...rest } = props;

		return (
			<DialogPrimitive.Overlay
				ref={forwardedRef}
				className={cn(
					"fixed inset-0 z-50 bg-black/50 backdrop-blur-sm transition-all duration-100 data-[state=closed]:animate-out data-[state=open]:fade-in data-[state=closed]:fade-out",
					className,
				)}
				{...rest}
			/>
		);
	},
);

DialogOverlay.displayName = DialogPrimitive.Overlay.displayName;

//

type DialogContentProps = ComponentPropsWithoutRef<typeof DialogPrimitive.Content>;
type DialogContentElement = ElementRef<typeof DialogPrimitive.Content>;

export const DialogContent = forwardRef<DialogContentElement, DialogContentProps>(
	function DialogContent(props, forwardedRef): JSX.Element {
		const { children, className, ...rest } = props;

		return (
			<DialogPortal>
				<DialogOverlay />
				<DialogPrimitive.Content
					ref={forwardedRef}
					className={cn(
						"fixed z-50 grid w-full gap-4 rounded-b-lg bg-white p-6 animate-in data-[state=open]:fade-in-90 data-[state=open]:slide-in-from-bottom-10 sm:max-w-lg sm:rounded-lg sm:zoom-in-90 data-[state=open]:sm:slide-in-from-bottom-0 dark:bg-neutral-900",
						className,
					)}
					{...rest}
				>
					{children}
					<DialogPrimitive.Close className="absolute top-4 right-4 rounded-sm opacity-70 transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-neutral-400 focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-neutral-100 dark:focus:ring-neutral-400 dark:focus:ring-offset-neutral-900 dark:data-[state=open]:bg-neutral-800">
						<XIcon aria-hidden="true" className="h-4 w-4" />
						<span className="sr-only">Close</span>
					</DialogPrimitive.Close>
				</DialogPrimitive.Content>
			</DialogPortal>
		);
	},
);

DialogContent.displayName = DialogPrimitive.Content.displayName;

//

type DialogHeaderProps = ComponentPropsWithoutRef<"div">;

export function DialogHeader(props: DialogHeaderProps): JSX.Element {
	const { className, ...rest } = props;

	return (
		<div className={cn("flex flex-col gap-y-2 text-center sm:text-left", className)} {...rest} />
	);
}

DialogHeader.displayName = "DialogHeader";

//

type DialogFooterProps = ComponentPropsWithoutRef<"div">;

export function DialogFooter(props: DialogFooterProps): JSX.Element {
	const { className, ...rest } = props;

	return (
		<div
			className={cn("flex flex-col-reverse sm:flex-row sm:justify-end sm:gap-x-2", className)}
			{...rest}
		/>
	);
}

DialogFooter.displayName = "DialogFooter";

//

type DialogTitleProps = ComponentPropsWithoutRef<typeof DialogPrimitive.Title>;
type DialogTitleElement = ElementRef<typeof DialogPrimitive.Title>;

export const DialogTitle = forwardRef<DialogTitleElement, DialogTitleProps>(function DialogTitle(
	props,
	forwardedRef,
): JSX.Element {
	const { className, ...rest } = props;

	return (
		<DialogPrimitive.Title
			ref={forwardedRef}
			className={cn("text-lg font-semibold text-neutral-900 dark:text-neutral-50", className)}
			{...rest}
		/>
	);
});

DialogTitle.displayName = DialogPrimitive.Title.displayName;

//

type DialogDescriptionProps = ComponentPropsWithoutRef<typeof DialogPrimitive.Description>;
type DialogDescriptionElement = ElementRef<typeof DialogPrimitive.Description>;

export const DialogDescription = forwardRef<DialogDescriptionElement, DialogDescriptionProps>(
	function DialogDescription(props, forwardedRef): JSX.Element {
		const { className, ...rest } = props;

		return (
			<DialogPrimitive.Description
				ref={forwardedRef}
				className={cn("text-sm text-neutral-500 dark:text-neutral-400", className)}
				{...rest}
			/>
		);
	},
);

DialogDescription.displayName = DialogPrimitive.Description.displayName;
