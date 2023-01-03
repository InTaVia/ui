import cx from 'clsx'
import type { ButtonHTMLAttributes, ReactNode } from 'react'
import { type ForwardedRef, forwardRef } from 'react'

import { type AriaLabelingProps, type DomProps } from '@/types'

const base =
	'inline-grid font-sans grid-flow-col min-w-[64px] cursor-default select-none items-center justify-center rounded-sm text-center font-medium transition focus-visible:outline-none focus-visible:ring focus-visible:ring-offset-2'

const sizes = {
	small: 'px-3 py-1.5 gap-1 text-sm',
	medium: 'px-4 py-1.5 gap-1.5 text-base',
	large: 'px-6 py-2 gap-2 text-base',
}

const variants = {
	primary:
		'bg-brand-800 text-neutral-0 hover:bg-brand-700 focus-visible:bg-brand-700 focus-visible:ring-brand-700',
	secondary: '',
	accent:
		'bg-accent-800 text-neutral-0 hover:bg-accent-700 focus-visible:bg-accent-700 focus-visible:ring-accent-700',
	link: '',
	positive:
		'bg-positive-800 text-neutral-0 hover:bg-positive-700 focus-visible:bg-positive-700 focus-visible:ring-positive-700',
	negative:
		'bg-negative-800 text-neutral-0 hover:bg-negative-700 focus-visible:bg-negative-700 focus-visible:ring-negative-700',
}

export interface ButtonStyleProps {
	/** @default 'medium' */
	size?: keyof typeof sizes
	/** @default 'primary' */
	variant?: keyof typeof variants
}

export interface ButtonProps
	extends ButtonStyleProps,
		AriaLabelingProps,
		DomProps,
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
	const {
		children,
		isDisabled,
		size = 'medium',
		type = 'button',
		variant = 'primary',
		...rest
	} = props

	return (
		<button
			ref={forwardedRef}
			{...rest}
			className={cx(base, sizes[size], variants[variant])}
			disabled={isDisabled}
			type={type}
		>
			{children}
		</button>
	)
})
