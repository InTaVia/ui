import { type ForwardedRef, type HTMLAttributes, type ReactNode, forwardRef } from 'react'

export interface FieldStyleProps {}

export interface FieldProps extends FieldStyleProps, HTMLAttributes<HTMLDivElement> {
	children: ReactNode
}

export const Field = forwardRef(function Field(
	props: FieldProps,
	forwardedRef: ForwardedRef<HTMLDivElement>,
): JSX.Element {
	const { children, ...fieldProps } = props

	const fieldRef = forwardedRef

	return (
		<div ref={fieldRef} {...fieldProps} className="grid gap-1">
			{children}
		</div>
	)
})
