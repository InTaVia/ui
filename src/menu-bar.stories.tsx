import { type Meta, type StoryObj } from "@storybook/react";

import {
	MenuBar,
	MenuBarCheckboxItem,
	MenuBarContent,
	MenuBarItem,
	MenuBarMenu,
	MenuBarRadioGroup,
	MenuBarRadioItem,
	MenuBarSeparator,
	MenuBarShortcut,
	MenuBarSub,
	MenuBarSubContent,
	MenuBarSubTrigger,
	MenuBarTrigger,
} from "@/menu-bar.js";

const meta = {
	title: "Components/MenuBar",
	component: MenuBar,
} satisfies Meta<typeof MenuBar>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
	args: {
		defaultChecked: true,
		id: "story",
	},
	render(args) {
		return (
			<MenuBar {...args}>
				<MenuBarMenu>
					<MenuBarTrigger>File</MenuBarTrigger>
					<MenuBarContent>
						<MenuBarItem>
							New Tab <MenuBarShortcut>⌘T</MenuBarShortcut>
						</MenuBarItem>
						<MenuBarItem>
							New Window <MenuBarShortcut>⌘N</MenuBarShortcut>
						</MenuBarItem>
						<MenuBarItem disabled>New Incognito Window</MenuBarItem>
						<MenuBarSeparator />
						<MenuBarSub>
							<MenuBarSubTrigger>Share</MenuBarSubTrigger>
							<MenuBarSubContent>
								<MenuBarItem>Email link</MenuBarItem>
								<MenuBarItem>Messages</MenuBarItem>
								<MenuBarItem>Notes</MenuBarItem>
							</MenuBarSubContent>
						</MenuBarSub>
						<MenuBarSeparator />
						<MenuBarItem>
							Print... <MenuBarShortcut>⌘P</MenuBarShortcut>
						</MenuBarItem>
					</MenuBarContent>
				</MenuBarMenu>
				<MenuBarMenu>
					<MenuBarTrigger>Edit</MenuBarTrigger>
					<MenuBarContent>
						<MenuBarItem>
							Undo <MenuBarShortcut>⌘Z</MenuBarShortcut>
						</MenuBarItem>
						<MenuBarItem>
							Redo <MenuBarShortcut>⇧⌘Z</MenuBarShortcut>
						</MenuBarItem>
						<MenuBarSeparator />
						<MenuBarSub>
							<MenuBarSubTrigger>Find</MenuBarSubTrigger>
							<MenuBarSubContent>
								<MenuBarItem>Search the web</MenuBarItem>
								<MenuBarSeparator />
								<MenuBarItem>Find...</MenuBarItem>
								<MenuBarItem>Find Next</MenuBarItem>
								<MenuBarItem>Find Previous</MenuBarItem>
							</MenuBarSubContent>
						</MenuBarSub>
						<MenuBarSeparator />
						<MenuBarItem>Cut</MenuBarItem>
						<MenuBarItem>Copy</MenuBarItem>
						<MenuBarItem>Paste</MenuBarItem>
					</MenuBarContent>
				</MenuBarMenu>
				<MenuBarMenu>
					<MenuBarTrigger>View</MenuBarTrigger>
					<MenuBarContent>
						<MenuBarCheckboxItem>Always Show Bookmarks Bar</MenuBarCheckboxItem>
						<MenuBarCheckboxItem checked>Always Show Full URLs</MenuBarCheckboxItem>
						<MenuBarSeparator />
						<MenuBarItem inset>
							Reload <MenuBarShortcut>⌘R</MenuBarShortcut>
						</MenuBarItem>
						<MenuBarItem disabled inset>
							Force Reload <MenuBarShortcut>⇧⌘R</MenuBarShortcut>
						</MenuBarItem>
						<MenuBarSeparator />
						<MenuBarItem inset>Toggle Fullscreen</MenuBarItem>
						<MenuBarSeparator />
						<MenuBarItem inset>Hide Sidebar</MenuBarItem>
					</MenuBarContent>
				</MenuBarMenu>
				<MenuBarMenu>
					<MenuBarTrigger>Profiles</MenuBarTrigger>
					<MenuBarContent>
						<MenuBarRadioGroup value="benoit">
							<MenuBarRadioItem value="andy">Andy</MenuBarRadioItem>
							<MenuBarRadioItem value="benoit">Benoit</MenuBarRadioItem>
							<MenuBarRadioItem value="Luis">Luis</MenuBarRadioItem>
						</MenuBarRadioGroup>
						<MenuBarSeparator />
						<MenuBarItem inset>Edit...</MenuBarItem>
						<MenuBarSeparator />
						<MenuBarItem inset>Add Profile...</MenuBarItem>
					</MenuBarContent>
				</MenuBarMenu>
			</MenuBar>
		);
	},
};
