import type { Decorator } from "@storybook/react";
import { Fragment, useEffect } from "react";

import { Icons, symbols } from "@/storybook/icons.js";

export const Main: Decorator = function Main(story, context) {
	const { colorScheme } = context.globals;
	const isDocsViewMode = context.viewMode === "docs";

	useEffect(() => {
		const element = isDocsViewMode
			? document.getElementById("docs-root")
			: document.documentElement;

		if (element != null) {
			element.dataset["colorScheme"] = colorScheme;
		}
	}, [colorScheme, isDocsViewMode]);

	return (
		<Fragment>
			<Icons symbols={symbols} />
			<main className="container">{story()}</main>
		</Fragment>
	);
};
