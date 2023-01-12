import cx from 'clsx'
import { type HTMLAttributes, type ReactNode } from 'react'

export interface ErrorMessageStyleProps {}

export interface ErrorMessageProps extends ErrorMessageStyleProps, HTMLAttributes<HTMLSpanElement> {
	children: ReactNode
}

export function ErrorMessage(props: ErrorMessageProps): JSX.Element {
	const { children, ...errorMessageProps } = props

	return (
		<span {...errorMessageProps} className={cx('text-negative-600', 'text-sm', 'font-medium')}>
			{children}
		</span>
	)
}
