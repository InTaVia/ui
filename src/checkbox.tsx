import cx from 'clsx'
import { type ForwardedRef, forwardRef, useRef } from 'react'
import {
	type AriaCheckboxProps,
	type AriaFieldProps,
	mergeProps,
	useCheckbox,
	useField,
	useFocusRing,
	useHover,
	VisuallyHidden,
} from 'react-aria'
import { useToggleState } from 'react-stately'

import { Description } from '@/description'
import { ErrorMessage } from '@/error-message'
import { Field } from '@/field'
// import { Label } from '@/label'
import { useMergedRef } from '@/lib/use-merged-ref'

const styles = {
	base: cx(
		'text-white',
		'border-2',
		'rounded',
		'w-4',
		'h-4',
		'flex',
		'flex-shrink-0',
		'justify-center',
		'items-center',
		'transition',
		'bg-white',
		'border-neutral-500',
		'data-selected:bg-accent-500',
		'data-selected:border-accent-500',
		'data-focus-visible:border-accent-500',
		'data-disabled:border-neutral-300',
	),
}

export interface CheckBoxStyleProps {}

export interface CheckBoxProps extends AriaCheckboxProps, AriaFieldProps, CheckBoxStyleProps {
	inputRef?: ForwardedRef<HTMLInputElement>
}

export const CheckBox = forwardRef(function CheckBox(
	props: CheckBoxProps,
	forwardedRef: ForwardedRef<HTMLDivElement>,
): JSX.Element {
	const { children: label, description, errorMessage, inputRef, validationState } = props

	const fieldRef = forwardedRef
	const { descriptionProps, errorMessageProps, fieldProps, labelProps } = useField(props)
	const checkBoxRef = useMergedRef(inputRef ?? null, useRef(null))
	const state = useToggleState(props)
	const { inputProps } = useCheckbox(props, state, checkBoxRef)
	const { focusProps, isFocusVisible } = useFocusRing(props)
	const { hoverProps, isHovered } = useHover(props)
	const isDisabled = props.isDisabled === true
	const isIndeterminate = props.isIndeterminate === true
	const isSelected = state.isSelected

	return (
		<Field ref={fieldRef}>
			<label className={cx('inline-flex', 'items-center', 'gap-2')}>
				<VisuallyHidden>
					<input ref={checkBoxRef} {...mergeProps(inputProps, focusProps, hoverProps)} />
				</VisuallyHidden>
				<div
					aria-hidden
					className={cx(styles.base)}
					data-disabled={isDisabled || undefined}
					data-focus-visible={isFocusVisible || undefined}
					data-hovered={isHovered || undefined}
					data-selected={isSelected || undefined}
					data-validation-state={validationState}
				>
					<svg className={cx('stroke-current', 'w-2.5', 'h-2.5')} viewBox="0 0 18 18">
						<polyline
							points="1 9 7 14 15 4"
							fill="none"
							strokeWidth={3}
							strokeDasharray={22}
							strokeDashoffset={isSelected ? 44 : 66}
							style={{ transition: 'all 400ms' }}
						/>
					</svg>
				</div>
				{/* <Label data-disabled={isDisabled || undefined} elementType="span">
					{label}
				</Label> */}
				<span>{label}</span>
			</label>
			{validationState !== 'invalid' && description != null ? (
				<Description {...descriptionProps}>{description}</Description>
			) : null}
			{validationState === 'invalid' && errorMessage != null ? (
				<ErrorMessage {...errorMessageProps}>{errorMessage}</ErrorMessage>
			) : null}
		</Field>
	)
})
