import type { ReactNode } from "react";

const symbols = {
	spinner: <path d="M21 12a9 9 0 1 1-6.219-8.56" />,
} satisfies Record<string, ReactNode>;

export function Icons(): JSX.Element {
	return (
		<svg style={{ display: "none" }}>
			<defs>
				{Object.entries(symbols).map(([id, symbol]) => {
					return (
						<symbol key={id} id={id}>
							{symbol}
						</symbol>
					);
				})}
			</defs>
		</svg>
	);
}
