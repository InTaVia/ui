import type { Decorator } from "@storybook/react";
import { useEffect } from "react";

export const Main: Decorator = function Main(story, context) {
	const { colorScheme } = context.globals;

	useEffect(() => {
		document.documentElement.dataset["colorScheme"] = colorScheme;
	}, [colorScheme]);

	return <main className="container">{story()}</main>;
};
