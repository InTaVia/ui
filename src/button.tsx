import type { AriaLabelingProps, DOMProps } from '@react-types/shared'
import cx from 'clsx'
import {
	type ButtonHTMLAttributes,
	type ForwardedRef,
	type ReactNode,
	forwardRef,
	useRef,
} from 'react'
import { mergeProps, useButton, useFocusRing, useHover } from 'react-aria'

import { useMergedRef } from '@/lib/use-merged-ref'

const styles = {
	base: 'inline-grid font-sans grid-flow-col min-w-[64px] cursor-default select-none items-center justify-center rounded-sm text-center font-medium transition data-focus-visible:outline-none data-focus-visible:ring data-focus-visible:ring-offset-2',
	sizes: {
		small: 'px-3 py-1.5 gap-1 text-sm',
		medium: 'px-4 py-1.5 gap-1.5 text-base',
		large: 'px-6 py-2 gap-2 text-base',
	},
	variants: {
		primary:
			'bg-brand-800 text-neutral-0 data-hovered:bg-brand-700 data-focus-visible:bg-brand-700 data-focus-visible:ring-brand-700',
		secondary: '',
		accent:
			'bg-accent-800 text-neutral-0 data-hovered:bg-accent-700 data-focus-visible:bg-accent-700 data-focus-visible:ring-accent-700',
		link: '',
		positive:
			'bg-positive-800 text-neutral-0 data-hovered:bg-positive-700 data-focus-visible:bg-positive-700 data-focus-visible:ring-positive-700',
		negative:
			'bg-negative-800 text-neutral-0 data-hovered:bg-negative-700 data-focus-visible:bg-negative-700 data-focus-visible:ring-negative-700',
	},
}

export interface ButtonStyleProps {
	/** @default 'medium' */
	size?: keyof typeof styles.sizes
	/** @default 'primary' */
	variant?: keyof typeof styles.variants
}

export interface ButtonProps
	extends AriaLabelingProps,
		DOMProps,
		ButtonStyleProps,
		Pick<
			ButtonHTMLAttributes<HTMLButtonElement>,
			'aria-pressed' | 'autoFocus' | 'form' | 'name' | 'onClick' | 'value'
		> {
	children: ReactNode
	isDisabled?: ButtonHTMLAttributes<HTMLButtonElement>['disabled']
	/** @default 'button' */
	type?: ButtonHTMLAttributes<HTMLButtonElement>['type']
}

export const Button = forwardRef(function Button(
	props: ButtonProps,
	forwardedRef: ForwardedRef<HTMLButtonElement>,
): JSX.Element {
	const { children, size = 'medium', variant = 'primary' } = props

	const buttonRef = useMergedRef(forwardedRef, useRef(null))
	const { buttonProps, isPressed } = useButton(props, buttonRef)
	const { focusProps, isFocusVisible } = useFocusRing(props)
	const { hoverProps, isHovered } = useHover(props)
	const isDisabled = props.isDisabled === true

	return (
		<button
			ref={buttonRef}
			{...mergeProps(buttonProps, focusProps, hoverProps)}
			className={cx(styles.base, styles.sizes[size], styles.variants[variant])}
			data-disabled={isDisabled || undefined}
			data-focus-visible={isFocusVisible || undefined}
			data-hovered={isHovered || undefined}
			data-pressed={isPressed || undefined}
		>
			{children}
		</button>
	)
})
