import { isNonEmptyString } from '@stefanprobst/is-nonempty-string'
import { type ForwardedRef, forwardRef } from 'react'

import { type AriaLabelingProps, type DomProps } from '@/types'

export interface IconStyleProps {
	/**
	 * URL to `<symbol>` element.
	 *
	 * @example
	 * ```tsx
	 * <Icon href="/assets/icons.svg#chevron-down-24" />
	 * ```
	 */
	href: string
	/** @default 'medium' */
	title?: string
}

export interface IconProps extends IconStyleProps, AriaLabelingProps, DomProps {
	'aria-hidden'?: boolean
}

export const Icon = forwardRef(function Icon(
	props: IconProps,
	forwardedRef: ForwardedRef<SVGSVGElement>,
): JSX.Element {
	const { 'aria-hidden': ariaHidden, href, title, ...rest } = props

	return (
		<svg
			ref={forwardedRef}
			{...rest}
			aria-hidden={
				isNonEmptyString(props['aria-label']) || isNonEmptyString(props['aria-labelledby'])
					? ariaHidden === true || undefined
					: true
			}
			data-part="icon"
		>
			{isNonEmptyString(title) ? <title>{title}</title> : null}
			<use href={href} />
		</svg>
	)
})
