import { type HTMLAttributes, type ReactNode } from 'react'

export interface ErrorMessageStyleProps {}

export interface ErrorMessageProps extends ErrorMessageStyleProps, HTMLAttributes<HTMLSpanElement> {
	children: ReactNode
}

export function ErrorMessage(props: ErrorMessageProps): JSX.Element {
	const { children, ...errorMessageProps } = props

	return (
		<span {...errorMessageProps} className="">
			{children}
		</span>
	)
}
