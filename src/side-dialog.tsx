import * as DialogPrimitive from "@radix-ui/react-dialog";
import { type VariantProps, cva } from "class-variance-authority";
import { type ComponentPropsWithoutRef, type ElementRef, forwardRef } from "react";

import { Icon } from "@/icons.js";
import { cn } from "@/lib/cn.js";

const portalVariants = cva("fixed inset-0 z-50 flex", {
	variants: {
		position: {
			top: "items-start",
			bottom: "items-end",
			left: "justify-start",
			right: "justify-end",
		},
	},
	defaultVariants: {
		position: "right",
	} as const,
});

const dialogVariants = cva(
	"fixed z-50 scale-100 gap-4 bg-white p-6 opacity-100 dark:bg-neutral-900",
	{
		variants: {
			position: {
				top: "w-full animate-in slide-in-from-top duration-300",
				bottom: "w-full animate-in slide-in-from-bottom duration-300",
				left: "h-full animate-in slide-in-from-left duration-300",
				right: "h-full animate-in slide-in-from-right duration-300",
			},
			size: {
				content: "",
				default: "",
				sm: "",
				lg: "",
				xl: "",
				full: "",
			},
		},
		compoundVariants: [
			{
				position: ["top", "bottom"] as ["top", "bottom"],
				size: "content" as const,
				class: "max-h-screen",
			},
			{
				position: ["top", "bottom"] as ["top", "bottom"],
				size: "default" as const,
				class: "h-1/3",
			},
			{
				position: ["top", "bottom"] as ["top", "bottom"],
				size: "sm" as const,
				class: "h-1/4",
			},
			{
				position: ["top", "bottom"] as ["top", "bottom"],
				size: "lg" as const,
				class: "h-1/2",
			},
			{
				position: ["top", "bottom"] as ["top", "bottom"],
				size: "xl" as const,
				class: "h-5/6",
			},
			{
				position: ["top", "bottom"] as ["top", "bottom"],
				size: "full" as const,
				class: "h-screen",
			},
			{
				position: ["right", "left"] as ["right", "left"],
				size: "content" as const,
				class: "max-w-screen",
			},
			{
				position: ["right", "left"] as ["right", "left"],
				size: "default" as const,
				class: "w-1/3",
			},
			{
				position: ["right", "left"] as ["right", "left"],
				size: "sm" as const,
				class: "w-1/4",
			},
			{
				position: ["right", "left"] as ["right", "left"],
				size: "lg" as const,
				class: "w-1/2",
			},
			{
				position: ["right", "left"] as ["right", "left"],
				size: "xl" as const,
				class: "w-5/6",
			},
			{
				position: ["right", "left"] as ["right", "left"],
				size: "full" as const,
				class: "w-screen",
			},
		],
		defaultVariants: {
			position: "right",
			size: "default",
		} as const,
	},
);

//

export const SideDialog = DialogPrimitive.Root;

//

export const SideDialogTrigger = DialogPrimitive.Trigger;

//

export const SideDialogCloseButton = DialogPrimitive.Close;

//

type SideDialogPortalProps = ComponentPropsWithoutRef<typeof DialogPrimitive.Portal> &
	VariantProps<typeof portalVariants>;

export function SideDialogPortal(props: SideDialogPortalProps): JSX.Element {
	const { children, position, ...rest } = props;

	return (
		<DialogPrimitive.Portal {...rest}>
			<div className={portalVariants({ position })}>{children}</div>
		</DialogPrimitive.Portal>
	);
}

SideDialogPortal.displayName = DialogPrimitive.Portal.displayName;

//

type SideDialogOverlayProps = ComponentPropsWithoutRef<typeof DialogPrimitive.Overlay>;
type SideDialogOverlayElement = ElementRef<typeof DialogPrimitive.Overlay>;

export const SideDialogOverlay = forwardRef<SideDialogOverlayElement, SideDialogOverlayProps>(
	function SideDialogOverlay(props, forwardedRef): JSX.Element {
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

SideDialogOverlay.displayName = DialogPrimitive.Overlay.displayName;

//

type SideDialogContentProps = ComponentPropsWithoutRef<typeof DialogPrimitive.Content> &
	VariantProps<typeof dialogVariants>;
type SideDialogContentElement = ElementRef<typeof DialogPrimitive.Content>;

export const SideDialogContent = forwardRef<SideDialogContentElement, SideDialogContentProps>(
	function SideDialogContent(props, forwardedRef): JSX.Element {
		const { children, className, position, size, ...rest } = props;

		return (
			<SideDialogPortal position={position}>
				<SideDialogOverlay />
				<DialogPrimitive.Content
					ref={forwardedRef}
					className={cn(dialogVariants({ position, size }), className)}
					{...rest}
				>
					{children}
					<DialogPrimitive.Close className="absolute top-4 right-4 rounded-sm opacity-70 transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-neutral-400 focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-neutral-100 dark:focus:ring-neutral-400 dark:focus:ring-offset-neutral-900 dark:data-[state=open]:bg-neutral-800">
						<Icon icon="x-icon" className="h-4 w-4" />
						<span className="sr-only">Close</span>
					</DialogPrimitive.Close>
				</DialogPrimitive.Content>
			</SideDialogPortal>
		);
	},
);

SideDialogContent.displayName = DialogPrimitive.Content.displayName;

//

type SideDialogHeaderProps = ComponentPropsWithoutRef<"div">;

export function SideDialogHeader(props: SideDialogHeaderProps): JSX.Element {
	const { className, ...rest } = props;

	return (
		<div className={cn("flex flex-col gap-y-2 text-center sm:text-left", className)} {...rest} />
	);
}

SideDialogHeader.displayName = "DialogHeader";

//

type SideDialogFooterProps = ComponentPropsWithoutRef<"div">;

export function SideDialogFooter(props: SideDialogFooterProps): JSX.Element {
	const { className, ...rest } = props;

	return (
		<div
			className={cn("flex flex-col-reverse sm:flex-row sm:justify-end sm:gap-x-2", className)}
			{...rest}
		/>
	);
}

SideDialogFooter.displayName = "DialogFooter";

//

type SideDialogTitleProps = ComponentPropsWithoutRef<typeof DialogPrimitive.Title>;
type SideDialogTitleElement = ElementRef<typeof DialogPrimitive.Title>;

export const SideDialogTitle = forwardRef<SideDialogTitleElement, SideDialogTitleProps>(
	function SideDialogTitle(props, forwardedRef): JSX.Element {
		const { className, ...rest } = props;

		return (
			<DialogPrimitive.Title
				ref={forwardedRef}
				className={cn("text-lg font-semibold text-neutral-900 dark:text-neutral-50", className)}
				{...rest}
			/>
		);
	},
);

SideDialogTitle.displayName = DialogPrimitive.Title.displayName;

//

type SideDialogDescriptionProps = ComponentPropsWithoutRef<typeof DialogPrimitive.Description>;
type SideDialogDescriptionElement = ElementRef<typeof DialogPrimitive.Description>;

export const SideDialogDescription = forwardRef<
	SideDialogDescriptionElement,
	SideDialogDescriptionProps
>(function SideDialogDescription(props, forwardedRef): JSX.Element {
	const { className, ...rest } = props;

	return (
		<DialogPrimitive.Description
			ref={forwardedRef}
			className={cn("text-sm text-neutral-500 dark:text-neutral-400", className)}
			{...rest}
		/>
	);
});

SideDialogDescription.displayName = DialogPrimitive.Description.displayName;
