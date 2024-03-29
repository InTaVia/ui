import {
	type ComboboxButtonProps,
	type ComboboxInputProps,
	type ComboboxOptionProps,
	type ComboboxOptionsProps,
	type ComboboxProps,
	Combobox,
} from "@headlessui/react";
import * as PopperPrimitive from "@radix-ui/react-popper";
import { createPopperScope } from "@radix-ui/react-popper";
import * as Separator from "@radix-ui/react-separator";
import { CheckIcon, ChevronDownIcon } from "lucide-react";
import {
	type ComponentPropsWithoutRef,
	type ElementRef,
	type ElementType,
	type ReactNode,
	forwardRef,
	Fragment,
} from "react";

import { cn } from "@/lib/cn";

const usePopperScope = createPopperScope();
const __scopeComboBox = { __scopeComboBox: [] };

//

type ComboBoxProps<
	TValue,
	TNullable extends boolean | undefined,
	TMultiple extends boolean | undefined,
	// eslint-disable-next-line @typescript-eslint/no-explicit-any
	TTag extends ElementType<any>,
> = Omit<ComboboxProps<TValue, TNullable, TMultiple, TTag>, "onChange"> & {
	children: ReactNode;
	onValueChange: ComboboxProps<TValue, TNullable, TMultiple, TTag>["onChange"];
};

export function ComboBox<
	TValue,
	TNullable extends boolean | undefined,
	TMultiple extends boolean | undefined,
	// eslint-disable-next-line @typescript-eslint/no-explicit-any
	TTag extends ElementType<any>,
>(props: ComboBoxProps<TValue, TNullable, TMultiple, TTag>): JSX.Element {
	const { children, onValueChange, ...rest } = props;

	const popperScope = usePopperScope(__scopeComboBox);

	return (
		<PopperPrimitive.Root {...popperScope}>
			<Combobox {...rest} onChange={onValueChange}>
				{children}
			</Combobox>
		</PopperPrimitive.Root>
	);
}

ComboBox.displayName = "ComboBox";

//

type ComboBoxTriggerProps = ComponentPropsWithoutRef<"div">;
type ComboBoxTriggerElement = ElementRef<"div">;

export const ComboBoxTrigger = forwardRef<ComboBoxTriggerElement, ComboBoxTriggerProps>(
	function ComboBoxTrigger(props, forwardedRef): JSX.Element {
		const { children, className, ...rest } = props;

		const popperScope = usePopperScope(__scopeComboBox);

		return (
			<PopperPrimitive.Anchor asChild {...popperScope}>
				<div
					ref={forwardedRef}
					className={cn(
						"relative flex h-10 w-full items-center justify-between rounded-md border border-neutral-300 bg-transparent py-2 px-3 text-sm focus-within:outline-none focus-within:ring-2 focus-within:ring-neutral-400 focus-within:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 dark:border-neutral-700 dark:text-neutral-50 dark:focus-within:ring-neutral-400 dark:focus-within:ring-offset-neutral-900",
						className,
					)}
					{...rest}
				>
					{children}
				</div>
			</PopperPrimitive.Anchor>
		);
	},
);

ComboBoxTrigger.displayName = "ComboBoxTrigger";

//

type ComboBoxInputProps = Omit<ComboboxInputProps<"input", string>, "as">;
type ComboBoxInputElement = ElementRef<"input">;

export const ComboBoxInput = forwardRef<ComboBoxInputElement, ComboBoxInputProps>(
	function ComboBoxInput(props, forwardedRef): JSX.Element {
		const { className, ...rest } = props;

		return (
			<Combobox.Input
				ref={forwardedRef}
				className={cn(
					"w-full min-w-0 bg-transparent pr-4 placeholder:text-neutral-400 focus:outline-none",
					className,
				)}
				{...rest}
			/>
		);
	},
);

ComboBoxInput.displayName = "ComboBoxInput";

//

type ComboBoxButtonProps = Omit<ComboboxButtonProps<"button">, "as">;
type ComboBoxButtonElement = ElementRef<"button">;

export const ComboBoxButton = forwardRef<ComboBoxButtonElement, ComboBoxButtonProps>(
	function ComboBoxButton(props, forwardedRef): JSX.Element {
		const { className, ...rest } = props;

		return (
			<Combobox.Button
				ref={forwardedRef}
				className={cn("absolute inset-y-0 right-0 pr-2", className)}
				{...rest}
			>
				<ChevronDownIcon aria-hidden="true" className="h-4 w-4 opacity-50" />
			</Combobox.Button>
		);
	},
);

ComboBoxButton.displayName = "ComboBoxButton";

//

type ComboBoxContentProps = Omit<ComboboxOptionsProps<"ul">, "as" | "children" | "unmount"> & {
	children: ReactNode;
};
type ComboBoxContentElement = ElementRef<"ul">;

export const ComboBoxContent = forwardRef<ComboBoxContentElement, ComboBoxContentProps>(
	function ComboBoxContent(props, forwardedRef): JSX.Element {
		const { children, className, ...rest } = props;

		const popperScope = usePopperScope(__scopeComboBox);

		// FIXME: this should be rendered in a portal, but `headlessui` does not
		// currently seem to work when wrapped in `@radix-ui/react-portal` and used
		// in a dialog..
		return (
			<PopperPrimitive.Content
				{...popperScope}
				align="start"
				collisionPadding={10}
				sideOffset={4}
				style={{
					/** Ensure border-box for `floating-ui` calculations. */
					boxSizing: "border-box",
					zIndex: 100,
					...{
						"--radix-combobox-content-transform-origin": "var(--radix-popper-transform-origin)",
						"--radix-combobox-content-available-width": "var(--radix-popper-available-width)",
						"--radix-combobox-content-available-height": "var(--radix-popper-available-height)",
						"--radix-combobox-trigger-width": "var(--radix-popper-anchor-width)",
						"--radix-combobox-trigger-height": "var(--radix-popper-anchor-height)",
					},
				}}
			>
				<Combobox.Options
					ref={forwardedRef}
					className={cn(
						"mt-1",
						"relative z-50 min-w-[8rem] overflow-y-auto overflow-x-hidden rounded-md border border-neutral-100 bg-white text-neutral-700 shadow-md animate-in fade-in-80 dark:border-neutral-800 dark:bg-neutral-800 dark:text-neutral-400",
						className,
					)}
					style={{
						width: "var(--radix-combobox-trigger-width)",
						maxHeight: "var(--radix-combobox-content-available-height)",
					}}
					{...rest}
				>
					<div className="p-1">{children}</div>
				</Combobox.Options>
			</PopperPrimitive.Content>
		);
	},
);

ComboBoxContent.displayName = "ComboBoxContent";

//

type ComboBoxItemProps = Omit<ComboboxOptionProps<"li", string>, "as" | "children"> & {
	children: ReactNode;
};
type ComboBoxItemElement = ElementRef<"li">;

export const ComboBoxItem = forwardRef<ComboBoxItemElement, ComboBoxItemProps>(
	function ComboBoxItem(props, forwardedRef): JSX.Element {
		const { children, className, ...rest } = props;

		return (
			<Combobox.Option
				ref={forwardedRef}
				className={cn(
					"relative flex cursor-default select-none items-center rounded-sm py-1.5 pr-2 pl-8 text-sm font-medium outline-none focus:bg-neutral-100 data-[headlessui-state~=disabled]:pointer-events-none data-[headlessui-state~=active]:bg-neutral-100 data-[headlessui-state~=disabled]:opacity-50 dark:focus:bg-neutral-700 dark:data-[headlessui-state~=active]:bg-neutral-700",
					className,
				)}
				{...rest}
			>
				{({ selected }) => {
					return (
						<Fragment>
							{selected ? (
								<span className="absolute left-2 h-3.5 w-3.5 items-center justify-center">
									<CheckIcon aria-hidden="true" className="h-4 w-4" />
								</span>
							) : null}

							{children}
						</Fragment>
					);
				}}
			</Combobox.Option>
		);
	},
);

ComboBoxItem.displayName = "ComboBoxItem";

//

type ComboBoxSeparatorProps = ComponentPropsWithoutRef<typeof Separator.Root>;
type ComboBoxSeparatorElement = ElementRef<typeof Separator.Root>;

export const ComboBoxSeparator = forwardRef<ComboBoxSeparatorElement, ComboBoxSeparatorProps>(
	function ComboBoxSeparator(props, forwardedRef): JSX.Element {
		const { className, ...rest } = props;

		return (
			<Separator.Root
				ref={forwardedRef}
				className={cn("-mx-1 my-1 h-px bg-neutral-100 dark:bg-neutral-700", className)}
				{...rest}
			/>
		);
	},
);

ComboBoxSeparator.displayName = "ComboBoxSeparator";

//

type ComboBoxLabelProps = ComponentPropsWithoutRef<"div">;
type ComboBoxLabelElement = ElementRef<"div">;

export const ComboBoxLabel = forwardRef<ComboBoxLabelElement, ComboBoxLabelProps>(
	function ComboBoxLabel(props, forwardedRef): JSX.Element {
		const { children, className, ...rest } = props;

		return (
			<div
				ref={forwardedRef}
				className={cn(
					"py-1.5 pr-2 pl-8 text-sm font-semibold text-neutral-900 dark:text-neutral-300",
					className,
				)}
				{...rest}
			>
				{children}
			</div>
		);
	},
);

ComboBoxLabel.displayName = "ComboBoxLabel";

//

type ComboBoxEmptyProps = ComponentPropsWithoutRef<"div">;
type ComboBoxEmptyElement = ElementRef<"div">;

export const ComboBoxEmpty = forwardRef<ComboBoxEmptyElement, ComboBoxEmptyProps>(
	function ComboBoxEmpty(props, forwardedRef): JSX.Element {
		const { children, className, ...rest } = props;

		return (
			<div
				ref={forwardedRef}
				className={cn(
					"relative flex cursor-default select-none items-center rounded-sm py-1.5 pr-2 pl-8 text-sm font-medium outline-none",
					className,
				)}
				{...rest}
			>
				{children}
			</div>
		);
	},
);

ComboBoxEmpty.displayName = "ComboBoxEmpty";
