import { mergeRefs, useObjectRef } from '@react-aria/utils'
import { type ForwardedRef, type RefObject } from 'react'

export function useMergedRef<T>(...refs: Array<ForwardedRef<T>>): RefObject<T> {
	return useObjectRef(mergeRefs(...refs))
}
