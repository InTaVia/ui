import type { ReactNode } from "react";

const symbols = {
	"chevron-down-icon": (
		<symbol
			id="chevron-down-icon"
			viewBox="0 0 24 24"
			fill="none"
			stroke="currentColor"
			strokeWidth="2"
			strokeLinecap="round"
			strokeLinejoin="round"
		>
			<polyline points="6 9 12 15 18 9" />
		</symbol>
	),
	"chevron-right-icon": (
		<symbol
			id="chevron-right-icon"
			viewBox="0 0 24 24"
			fill="none"
			stroke="currentColor"
			strokeWidth="2"
			strokeLinecap="round"
			strokeLinejoin="round"
		>
			<polyline points="9 18 15 12 9 6" />
		</symbol>
	),
	"check-icon": (
		<symbol
			id="check-icon"
			viewBox="0 0 24 24"
			fill="none"
			stroke="currentColor"
			strokeWidth="2"
			strokeLinecap="round"
			strokeLinejoin="round"
		>
			<polyline points="20 6 9 17 4 12" />
		</symbol>
	),
	"circle-icon": (
		<symbol
			id="circle-icon"
			viewBox="0 0 24 24"
			fill="none"
			stroke="currentColor"
			strokeWidth="2"
			strokeLinecap="round"
			strokeLinejoin="round"
		>
			<circle cx="12" cy="12" r="10" />
		</symbol>
	),
	"search-icon": (
		<symbol
			id="search-icon"
			viewBox="0 0 24 24"
			fill="none"
			stroke="currentColor"
			strokeWidth="2"
			strokeLinecap="round"
			strokeLinejoin="round"
		>
			<circle cx="11" cy="11" r="8" />
			<line x1="21" y1="21" x2="16.65" y2="16.65" />
		</symbol>
	),
	"spinner-icon": (
		<symbol
			viewBox="0 0 24 24"
			fill="none"
			stroke="currentColor"
			strokeWidth="2"
			strokeLinecap="round"
			strokeLinejoin="round"
		>
			<path d="M21 12a9 9 0 1 1-6.219-8.56" />
		</symbol>
	),
	"x-icon": (
		<symbol
			id="x-icon"
			viewBox="0 0 24 24"
			fill="none"
			stroke="currentColor"
			strokeWidth="2"
			strokeLinecap="round"
			strokeLinejoin="round"
		>
			<line x1="18" y1="6" x2="6" y2="18" />
			<line x1="6" y1="6" x2="18" y2="18" />
		</symbol>
	),
} satisfies Record<string, ReactNode>;

export type IconId = keyof typeof symbols;

export function Icons(): JSX.Element {
	return (
		<svg style={{ display: "none" }}>
			<defs>{Object.values(symbols)}</defs>
		</svg>
	);
}
