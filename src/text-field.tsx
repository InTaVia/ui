import { type ForwardedRef, forwardRef, useRef } from 'react'
import {
	type AriaTextFieldProps,
	mergeProps,
	useFocusRing,
	useHover,
	useTextField,
} from 'react-aria'

import { Description } from '@/description'
import { ErrorMessage } from '@/error-message'
import { Field } from '@/field'
import { Input } from '@/input'
import { Label } from '@/label'
import { useMergedRef } from '@/lib/use-merged-ref'

export interface TextFieldStyleProps {}

export interface TextFieldProps extends AriaTextFieldProps, TextFieldStyleProps {
	inputRef?: ForwardedRef<HTMLInputElement>
}

export const TextField = forwardRef(function TextField(
	props: TextFieldProps,
	forwardedRef: ForwardedRef<HTMLDivElement>,
): JSX.Element {
	const { description, errorMessage, inputRef, label, validationState } = props

	const fieldRef = forwardedRef
	const textFieldRef = useMergedRef(inputRef ?? null, useRef(null))
	const { descriptionProps, errorMessageProps, inputProps, labelProps } = useTextField(
		props,
		textFieldRef,
	)
	const { focusProps, isFocusVisible } = useFocusRing({ ...props, isTextInput: true })
	const { hoverProps, isHovered } = useHover(props)
	const isDisabled = props.isDisabled === true

	return (
		<Field ref={fieldRef}>
			{label != null ? (
				<Label {...labelProps} data-disabled={isDisabled || undefined}>
					{label}
				</Label>
			) : null}
			<div>
				<Input
					ref={textFieldRef}
					{...mergeProps(inputProps, focusProps, hoverProps)}
					data-disabled={isDisabled || undefined}
					data-focus-visible={isFocusVisible || undefined}
					data-hovered={isHovered || undefined}
					data-validation-state={validationState}
				/>
			</div>
			{validationState !== 'invalid' && description != null ? (
				<Description {...descriptionProps}>{errorMessage}</Description>
			) : null}
			{validationState === 'invalid' && errorMessage != null ? (
				<ErrorMessage {...errorMessageProps}>{description}</ErrorMessage>
			) : null}
		</Field>
	)
})
