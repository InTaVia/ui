import cx from 'clsx'
import { type ForwardedRef, type HTMLAttributes, forwardRef } from 'react'

export interface TextAreaStyleProps {}

export interface TextAreaProps extends HTMLAttributes<HTMLTextAreaElement>, TextAreaStyleProps {}

export const TextArea = forwardRef(function TextArea(
	props: TextAreaProps,
	forwardedRef: ForwardedRef<HTMLTextAreaElement>,
): JSX.Element {
	const inputProps = props

	const inputRef = forwardedRef

	return <textarea ref={inputRef} {...inputProps} className={cx()} />
})
