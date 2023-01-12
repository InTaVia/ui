import cx from 'clsx'
import { type HTMLAttributes, type ReactNode } from 'react'

export interface TextStyleProps {}

export interface TextProps extends HTMLAttributes<HTMLSpanElement>, TextStyleProps {
	children: ReactNode
}

export function Text(props: TextProps): JSX.Element {
	const { children, ...textProps } = props

	return (
		<span {...textProps} className={cx()}>
			{children}
		</span>
	)
}
