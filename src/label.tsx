import { type ForwardedRef, type LabelHTMLAttributes, type ReactNode, forwardRef } from 'react'

export interface LabelStyleProps {}

export interface LabelProps extends LabelHTMLAttributes<HTMLLabelElement>, LabelStyleProps {
	children: ReactNode
	/** @default 'label' */
	elementType?: 'label' | 'span'
}

export const Label = forwardRef(function Label(
	props: LabelProps,
	forwardedRef: ForwardedRef<HTMLLabelElement>,
): JSX.Element {
	const { children, elementType: ElementType = 'label', ...labelProps } = props

	const labelRef = forwardedRef

	return (
		<ElementType
			ref={labelRef}
			{...labelProps}
			className="text-sm select-none text-neutral-700 data-disabled:text-neutral-400"
		>
			{children}
		</ElementType>
	)
})
