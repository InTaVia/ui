import type { AriaLabelingProps, DOMProps } from '@react-types/shared'
import { isNonEmptyString } from '@stefanprobst/is-nonempty-string'
import { type ForwardedRef, forwardRef } from 'react'

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

export interface IconProps extends AriaLabelingProps, DOMProps, IconStyleProps {
	'aria-hidden'?: boolean
}

export const Icon = forwardRef(function Icon(
	props: IconProps,
	forwardedRef: ForwardedRef<SVGSVGElement>,
): JSX.Element {
	const { 'aria-hidden': ariaHidden, href, title, ...iconProps } = props

	const iconRef = forwardedRef

	return (
		<svg
			ref={iconRef}
			{...iconProps}
			aria-hidden={
				isNonEmptyString(props['aria-label']) || isNonEmptyString(props['aria-labelledby'])
					? ariaHidden === true || undefined
					: true
			}
		>
			{isNonEmptyString(title) ? <title>{title}</title> : null}
			<use href={href} />
		</svg>
	)
})
