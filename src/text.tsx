import { type ReactNode } from 'react'

export interface TextProps {
	children: ReactNode
}

export function Text(props: TextProps): JSX.Element {
	const { children } = props

	return <span data-part="text">{children}</span>
}
