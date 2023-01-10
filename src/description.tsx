import { type HTMLAttributes, type ReactNode } from 'react'

export interface DescriptionStyleProps {}

export interface DescriptionProps extends DescriptionStyleProps, HTMLAttributes<HTMLSpanElement> {
	children: ReactNode
}

export function Description(props: DescriptionProps): JSX.Element {
	const { children, ...descriptionProps } = props

	return (
		<span {...descriptionProps} className="">
			{children}
		</span>
	)
}
