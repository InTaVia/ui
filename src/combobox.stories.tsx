import type { Meta, StoryObj } from "@storybook/react";
import { useState } from "react";

import { ComboBox, ComboBoxContent, ComboBoxEmpty, ComboBoxInput, ComboBoxItem } from "@/combobox";

const meta = {
	title: "Components/ComboBox",
	component: ComboBox,
} satisfies Meta<typeof ComboBox>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
	/* @ts-expect-error No idea, probably because of missing `headlessui` generics. */
	args: {},
	render(args) {
		const people = [
			"Durward Reynolds",
			"Kenton Towne",
			"Therese Wunsch",
			"Benedict Kessler",
			"Katelyn Rohan",
		];

		// eslint-disable-next-line react-hooks/rules-of-hooks, @typescript-eslint/no-non-null-assertion
		const [selectedPerson, setSelectedPerson] = useState(people[0]!);
		// eslint-disable-next-line react-hooks/rules-of-hooks
		const [searchTerm, setSearchTerm] = useState("");

		const filteredPeople =
			searchTerm === ""
				? people
				: people.filter((person) => {
						return person.toLowerCase().includes(searchTerm.toLowerCase());
				  });

		return (
			<ComboBox {...args} value={selectedPerson} onValueChange={setSelectedPerson}>
				<ComboBoxInput
					className="w-[200px]"
					onChange={(event) => {
						setSearchTerm(event.currentTarget.value);
					}}
				/>
				<ComboBoxContent>
					{filteredPeople.map((person) => {
						return (
							<ComboBoxItem key={person} value={person}>
								{person}
							</ComboBoxItem>
						);
					})}
					{filteredPeople.length === 0 ? <ComboBoxEmpty>Nothing found.</ComboBoxEmpty> : null}
				</ComboBoxContent>
			</ComboBox>
		);
	},
};