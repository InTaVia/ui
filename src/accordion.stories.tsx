import { type Meta, type StoryObj } from "@storybook/react";

import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/accordion.js";

const meta = {
	title: "Components/Accordion",
	component: Accordion,
} satisfies Meta<typeof Accordion>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
	args: {
		collapsible: true,
		defaultValue: "item-1",
		type: "single",
	},
	render(args) {
		return (
			<Accordion {...args}>
				<AccordionItem value="item-1">
					<AccordionTrigger>Item one</AccordionTrigger>
					<AccordionContent>
						Culpa voluptate dolore cupidatat laborum mollit voluptate culpa eu enim adipisicing
						fugiat consequat adipisicing. Ad dolor Lorem Lorem aliquip in id in. Est velit Lorem
						fugiat aliquip. Sit consequat sint deserunt ad consectetur aliquip. Occaecat proident
						non qui dolore adipisicing ex. Cillum incididunt consectetur voluptate nisi laboris
						proident consequat. Aliquip amet aliqua cupidatat proident.
					</AccordionContent>
				</AccordionItem>

				<AccordionItem value="item-2">
					<AccordionTrigger>Item two</AccordionTrigger>
					<AccordionContent>
						Lorem in exercitation sunt nulla do consequat consectetur anim. Commodo est Lorem nisi
						nulla et duis deserunt non cillum consequat. Et consequat dolore ut exercitation
						proident ad aliquip pariatur excepteur proident irure tempor ad consectetur. Ad ad irure
						duis duis ipsum duis voluptate. Commodo ea fugiat non minim voluptate anim anim et.
					</AccordionContent>
				</AccordionItem>
			</Accordion>
		);
	},
};
