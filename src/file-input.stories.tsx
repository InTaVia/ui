import type { Meta, StoryObj } from "@storybook/react";

import { FileInput, FileInputTrigger } from "@/file-input";

const meta = {
	title: "Components/FileInput",
	component: FileInput,
} satisfies Meta<typeof FileInput>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
	args: {
		onValueChange(files) {
			// eslint-disable-next-line no-console
			console.log(files);
		},
	},
	render(args) {
		return (
			<FileInput {...args}>
				<FileInputTrigger>Select a file</FileInputTrigger>
			</FileInput>
		);
	},
};
