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
				"bg-transparent transition relative shrink-0 grow-0 hover:bg-neutral-200 data-[resize-handle-active]:bg-neutral-500 data-[panel-group-direction=horizontal]:w-2 data-[panel-group-direction=vertical]:h-2",
				"dark:hover:bg-neutral-600 dark:data-[resize-handle-active]:bg-neutral-300",
				className,
			)}
			{...rest}
		/>
	);
}
