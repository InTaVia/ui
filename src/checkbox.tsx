import cx from 'clsx'
import { type ForwardedRef, forwardRef, useRef } from 'react'
import {
	type AriaCheckboxProps,
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
import { Label } from '@/label'
import { useMergedRef } from '@/lib/use-merged-ref'

const styles = {
	base: 'text-white border-2 rounded w-5 h-5 flex flex-shrink-0 justify-center items-center transition bg-white border-neutral-500 [data-selected]:bg-accent-500 [data-selected]:border-accent-500 [data-focus-visible]:border-accent-500 [data-disabled]:border-neutral-300',
}

export interface CheckBoxStyleProps {}

export interface CheckBoxProps extends AriaCheckboxProps, CheckBoxStyleProps {
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
			<label className="flex items-center gap-2">
				<VisuallyHidden>
					<input ref={checkBoxRef} {...mergeProps(inputProps, focusProps, hoverProps)} />
				</VisuallyHidden>
				<div
					aria-hidden
					className={cx(styles.base)}
					data-disabled={isDisabled || undefined}
					data-focus-visible={isFocusVisible || undefined}
					data-hovered={isHovered || undefined}
					data-validation-state={validationState}
				>
					<svg className="stroke-current w-3 h-3" viewBox="0 0 18 18">
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
				<Label data-disabled={isDisabled || undefined}>{label}</Label>
			</label>
			{validationState !== 'invalid' && description != null ? (
				<Description {...descriptionProps}>{errorMessage}</Description>
			) : null}
			{validationState === 'invalid' && errorMessage != null ? (
				<ErrorMessage {...errorMessageProps}>{description}</ErrorMessage>
			) : null}
		</Field>
	)
})

// labelProps
