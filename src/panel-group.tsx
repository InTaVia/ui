import { type ComponentPropsWithoutRef } from "react";
import * as PanelPrimitive from "react-resizable-panels";

import { cn } from "@/lib/cn";

export const PanelGroup = PanelPrimitive.PanelGroup;

//

export const Panel = PanelPrimitive.Panel;

//

type PanelResizeHandleProps = ComponentPropsWithoutRef<typeof PanelPrimitive.PanelResizeHandle>;

export function PanelResizeHandle(props: PanelResizeHandleProps): JSX.Element {
	const { className, ...rest } = props;

	return (
		<PanelPrimitive.PanelResizeHandle
			className={cn(
				"relative shrink-0 grow-0 bg-transparent transition hover:bg-neutral-200 data-[panel-group-direction=vertical]:h-2 data-[panel-group-direction=horizontal]:w-2 data-[resize-handle-active]:bg-neutral-500 dark:hover:bg-neutral-600 dark:data-[resize-handle-active]:bg-neutral-300",
				className,
			)}
			{...rest}
		/>
	);
}
