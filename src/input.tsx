import cx from 'clsx'
import { type ForwardedRef, type InputHTMLAttributes, forwardRef } from 'react'

export interface InputStyleProps {}

export interface InputProps extends InputHTMLAttributes<HTMLInputElement>, InputStyleProps {}

export const Input = forwardRef(function Input(
	props: InputProps,
	forwardedRef: ForwardedRef<HTMLInputElement>,
): JSX.Element {
	const inputProps = props

	const inputRef = forwardedRef

	return (
		<input
			ref={inputRef}
			{...inputProps}
			className={cx('px-2', 'py-1', 'rounded', 'border', 'data-invalid:border-negative-500')}
		/>
	)
})
