import type { Decorator } from "@storybook/react";
import { useEffect } from "react";

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

	return <main className="container">{story()}</main>;
};
