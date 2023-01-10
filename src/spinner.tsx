import type { AriaLabelingProps, DOMProps } from '@react-types/shared'
import { isNonEmptyString } from '@stefanprobst/is-nonempty-string'
import { type ForwardedRef, forwardRef } from 'react'
import { useProgressBar } from 'react-aria'

const defaultLabel = 'Loading...'

const sizes = {
	small: 24,
	medium: 32,
	large: 48,
}

export interface SpinnerStyleProps {
	/** @default 'medium' */
	size?: keyof typeof sizes
}

export interface SpinnerProps extends AriaLabelingProps, DOMProps, SpinnerStyleProps {}

export const Spinner = forwardRef(function Spinner(
	props: SpinnerProps,
	forwardedRef: ForwardedRef<SVGSVGElement>,
): JSX.Element {
	const { 'aria-label': ariaLabel, size = 'medium' } = props

	const progressBarRef = forwardedRef
	const { progressBarProps } = useProgressBar({
		...props,
		isIndeterminate: true,
		'aria-label':
			isNonEmptyString(ariaLabel) && isNonEmptyString(props['aria-labelledby'])
				? defaultLabel
				: ariaLabel,
	})

	const diameter = sizes[size]
	const center = diameter / 2
	const strokeWidth = 3
	const r = center - strokeWidth
	const c = 2 * r * Math.PI
	const offset = c - (1 / 4) * c

	return (
		<svg
			ref={progressBarRef}
			{...progressBarProps}
			fill="none"
			height={diameter}
			strokeWidth={strokeWidth}
			viewBox={`0 0 ${diameter} ${diameter}`}
			width={diameter}
		>
			<circle
				cx={center}
				cy={center}
				opacity={0.25}
				r={r}
				role="presentation"
				stroke="currentColor"
			/>
			<circle
				cx={center}
				cy={center}
				opacity={0.75}
				r={r}
				role="presentation"
				stroke="currentColor"
				strokeDasharray={c}
				strokeDashoffset={offset}
			>
				<animateTransform
					attributeName="transform"
					begin="0s"
					dur="1s"
					from={`0 ${center} ${center}`}
					repeatCount="indefinite"
					to={`360 ${center} ${center}`}
					type="rotate"
				/>
			</circle>
		</svg>
	)
})
