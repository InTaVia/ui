import {
	type ComboboxInputProps,
	type ComboboxOptionProps,
	type ComboboxOptionsProps,
	type ComboboxProps,
	Combobox,
} from "@headlessui/react";
import * as PopperPrimitive from "@radix-ui/react-popper";
import { createPopperScope } from "@radix-ui/react-popper";
import * as Portal from "@radix-ui/react-portal";
import * as Separator from "@radix-ui/react-separator";
import { CheckIcon, ChevronsUpDownIcon } from "lucide-react";
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

type ComboBoxInputProps = Omit<ComboboxInputProps<"input", string>, "as">;
type ComboBoxInputElement = HTMLInputElement;

export const ComboBoxInput = forwardRef<ComboBoxInputElement, ComboBoxInputProps>(
	function ComboBoxInput(props, forwardedRef): JSX.Element {
		const { className, ...rest } = props;

		const popperScope = usePopperScope(__scopeComboBox);

		return (
			<PopperPrimitive.Anchor asChild {...popperScope}>
				<div
					className={cn(
						"relative flex h-10 w-full items-center justify-between rounded-md border border-neutral-300 bg-transparent py-2 px-3 text-sm placeholder:text-neutral-400 focus-within:outline-none focus-within:ring-2 focus-within:ring-neutral-400 focus-within:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 dark:border-neutral-700 dark:text-neutral-50 dark:focus-within:ring-neutral-400 dark:focus-within:ring-offset-neutral-900",
						className,
					)}
				>
					<Combobox.Input
						ref={forwardedRef}
						className="min-w-0 pr-4 focus:outline-none"
						{...rest}
					/>
					<Combobox.Button className="absolute inset-y-0 right-0 pr-2">
						<ChevronsUpDownIcon className="h-4 w-4 opacity-50" />
					</Combobox.Button>
				</div>
			</PopperPrimitive.Anchor>
		);
	},
);

ComboBoxInput.displayName = "ComboBoxInput";

//
type ComboBoxContentProps = Omit<ComboboxOptionsProps<"ul">, "as" | "children" | "unmount"> & {
	children: ReactNode;
};
type ComboBoxContentElement = HTMLUListElement;

export const ComboBoxContent = forwardRef<ComboBoxContentElement, ComboBoxContentProps>(
	function ComboBoxContent(props, forwardedRef): JSX.Element {
		const { children, className, ...rest } = props;

		const popperScope = usePopperScope(__scopeComboBox);

		return (
			<Portal.Root>
				<PopperPrimitive.Content
					{...popperScope}
					align="start"
					collisionPadding={10}
					sideOffset={4}
					style={{
						/** Ensure border-box for `floating-ui` calculations. */
						boxSizing: "border-box",
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
							"relative z-50 min-w-[8rem] overflow-hidden rounded-md border border-neutral-100 bg-white text-neutral-700 shadow-md animate-in fade-in-80 dark:border-neutral-800 dark:bg-neutral-800 dark:text-neutral-400",
							className,
						)}
						{...rest}
						style={{
							width: "var(--radix-combobox-trigger-width)",
							maxHeight: "var(--radix-combobox-content-available-height)",
						}}
					>
						<div className="p-1">{children}</div>
					</Combobox.Options>
				</PopperPrimitive.Content>
			</Portal.Root>
		);
	},
);

ComboBoxContent.displayName = "ComboBoxContent";

//

type ComboBoxItemProps = Omit<ComboboxOptionProps<"li", string>, "as" | "children"> & {
	children: ReactNode;
};
type ComboBoxItemElement = HTMLLIElement;

export const ComboBoxItem = forwardRef<ComboBoxItemElement, ComboBoxItemProps>(
	function ComboBoxItem(props, forwardedRef): JSX.Element {
		const { children, className, ...rest } = props;

		return (
			<Combobox.Option
				ref={forwardedRef}
				className={cn(
					"relative flex cursor-default select-none items-center rounded-sm py-1.5 pr-2 pl-8 text-sm font-medium outline-none focus:bg-neutral-100 data-[headlessui-state~=active]:bg-neutral-100 data-[headlessui-state~=disabled]:pointer-events-none data-[headlessui-state~=disabled]:opacity-50 dark:focus:bg-neutral-700 dark:data-[headlessui-state~=active]:bg-neutral-700",
					className,
				)}
				{...rest}
			>
				{({ selected }) => {
					return (
						<Fragment>
							{selected ? (
								<span className="absolute left-2 h-3.5 w-3.5 items-center justify-center">
									<CheckIcon className="h-4 w-4" />
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
