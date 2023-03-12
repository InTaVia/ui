import { type Meta, type StoryObj } from "@storybook/react";

import { Panel, PanelGroup, PanelResizeHandle } from "@/panel-group.js";

const meta = {
	title: "Components/PanelGroup",
	component: PanelGroup,
} satisfies Meta<typeof PanelGroup>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
	args: {
		direction: "horizontal",
	},
	render(args) {
		return (
			<div className="grid h-96">
				<PanelGroup {...args}>
					<Panel defaultSize={20} minSize={20}>
						<div className="grid h-full w-full place-items-center overflow-hidden rounded bg-neutral-100 dark:bg-neutral-800">
							left
						</div>
					</Panel>
					<PanelResizeHandle />
					<Panel minSize={30}>
						<div className="grid h-full w-full place-items-center overflow-hidden rounded bg-neutral-100 dark:bg-neutral-800">
							middle
						</div>
					</Panel>
					<PanelResizeHandle />
					<Panel defaultSize={20} minSize={20}>
						<div className="grid h-full w-full place-items-center overflow-hidden rounded bg-neutral-100 dark:bg-neutral-800">
							right
						</div>
					</Panel>
				</PanelGroup>
			</div>
		);
	},
};
