import type { ReactNode } from "react";

import { Icon } from "@/icon.js";
import { Icons, symbols as _symbols } from "@/icons.js";

export const symbols = {
	..._symbols,
	"arrow-up-circle-icon": (
		<symbol
			id="arrow-up-circle-icon"
			viewBox="0 0 24 24"
			fill="none"
			stroke="currentColor"
			strokeWidth="2"
			strokeLinecap="round"
			strokeLinejoin="round"
		>
			<circle cx="12" cy="12" r="10" />
			<polyline points="16 12 12 8 8 12" />
			<line x1="12" y1="16" x2="12" y2="8" />
		</symbol>
	),
	"calendar-icon": (
		<symbol
			id="calendar-icon"
			viewBox="0 0 24 24"
			fill="none"
			stroke="currentColor"
			strokeWidth="2"
			strokeLinecap="round"
			strokeLinejoin="round"
		>
			<rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
			<line x1="16" y1="2" x2="16" y2="6" />
			<line x1="8" y1="2" x2="8" y2="6" />
			<line x1="3" y1="10" x2="21" y2="10" />
		</symbol>
	),
	"calendar-days-icon": (
		<symbol
			id="calendar-days-icon"
			viewBox="0 0 24 24"
			fill="none"
			stroke="currentColor"
			strokeWidth="2"
			strokeLinecap="round"
			strokeLinejoin="round"
		>
			<rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
			<line x1="16" y1="2" x2="16" y2="6" />
			<line x1="8" y1="2" x2="8" y2="6" />
			<line x1="3" y1="10" x2="21" y2="10" />
			<path d="M8 14h.01" />
			<path d="M12 14h.01" />
			<path d="M16 14h.01" />
			<path d="M8 18h.01" />
			<path d="M12 18h.01" />
			<path d="M16 18h.01" />
		</symbol>
	),
	"calculator-icon": (
		<symbol
			id="calculator-icon"
			viewBox="0 0 24 24"
			fill="none"
			stroke="currentColor"
			strokeWidth="2"
			strokeLinecap="round"
			strokeLinejoin="round"
		>
			<rect x="4" y="2" width="16" height="20" rx="2" />
			<line x1="8" x2="16" y1="6" y2="6" />
			<line x1="16" x2="16" y1="14" y2="18" />
			<path d="M16 10h.01" />
			<path d="M12 10h.01" />
			<path d="M8 10h.01" />
			<path d="M12 14h.01" />
			<path d="M8 14h.01" />
			<path d="M12 18h.01" />
			<path d="M8 18h.01" />
		</symbol>
	),
	"check-circle-icon": (
		<symbol
			id="check-circle-icon"
			viewBox="0 0 24 24"
			fill="none"
			stroke="currentColor"
			strokeWidth="2"
			strokeLinecap="round"
			strokeLinejoin="round"
		>
			<path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z" />
			<path d="m9 12 2 2 4-4" />
		</symbol>
	),
	"chevrons-up-down-icon": (
		<symbol
			id="chevrons-up-down-icon"
			viewBox="0 0 24 24"
			fill="none"
			stroke="currentColor"
			strokeWidth="2"
			strokeLinecap="round"
			strokeLinejoin="round"
		>
			<path d="m7 15 5 5 5-5" />
			<path d="m7 9 5-5 5 5" />
		</symbol>
	),
	"cloud-icon": (
		<symbol
			id="cloud-icon"
			viewBox="0 0 24 24"
			fill="none"
			stroke="currentColor"
			strokeWidth="2"
			strokeLinecap="round"
			strokeLinejoin="round"
		>
			<path d="M17.5 19H9a7 7 0 1 1 6.71-9h1.79a4.5 4.5 0 1 1 0 9Z" />
		</symbol>
	),
	"credit-card-icon": (
		<symbol
			id="credit-card-icon"
			viewBox="0 0 24 24"
			fill="none"
			stroke="currentColor"
			strokeWidth="2"
			strokeLinecap="round"
			strokeLinejoin="round"
		>
			<rect x="2" y="5" width="20" height="14" rx="2" />
			<line x1="2" y1="10" x2="22" y2="10" />
		</symbol>
	),
	"github-icon": (
		<symbol
			id="github-icon"
			viewBox="0 0 24 24"
			fill="none"
			stroke="currentColor"
			strokeWidth="2"
			strokeLinecap="round"
			strokeLinejoin="round"
		>
			<path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
			<path d="M9 18c-4.51 2-5-2-7-2" />
		</symbol>
	),
	"help-circle-icon": (
		<symbol
			id="help-circle-icon"
			viewBox="0 0 24 24"
			fill="none"
			stroke="currentColor"
			strokeWidth="2"
			strokeLinecap="round"
			strokeLinejoin="round"
		>
			<circle cx="12" cy="12" r="10" />
			<path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3" />
			<line x1="12" y1="17" x2="12.01" y2="17" />
		</symbol>
	),
	"italic-icon": (
		<symbol
			id="italic-icon"
			viewBox="0 0 24 24"
			fill="none"
			stroke="currentColor"
			strokeWidth="2"
			strokeLinecap="round"
			strokeLinejoin="round"
		>
			<line x1="19" y1="4" x2="10" y2="4" />
			<line x1="14" y1="20" x2="5" y2="20" />
			<line x1="15" y1="4" x2="9" y2="20" />
		</symbol>
	),
	"keyboard-icon": (
		<symbol
			id="keyboard-icon"
			viewBox="0 0 24 24"
			fill="none"
			stroke="currentColor"
			strokeWidth="2"
			strokeLinecap="round"
			strokeLinejoin="round"
		>
			<rect x="2" y="4" width="20" height="16" rx="2" ry="2" />
			<path d="M6 8h.001" />
			<path d="M10 8h.001" />
			<path d="M14 8h.001" />
			<path d="M18 8h.001" />
			<path d="M8 12h.001" />
			<path d="M12 12h.001" />
			<path d="M16 12h.001" />
			<path d="M7 16h10" />
		</symbol>
	),
	"life-buoy-icon": (
		<symbol
			id="life-buoy-icon"
			viewBox="0 0 24 24"
			fill="none"
			stroke="currentColor"
			strokeWidth="2"
			strokeLinecap="round"
			strokeLinejoin="round"
		>
			<circle cx="12" cy="12" r="10" />
			<circle cx="12" cy="12" r="4" />
			<line x1="4.93" y1="4.93" x2="9.17" y2="9.17" />
			<line x1="14.83" y1="14.83" x2="19.07" y2="19.07" />
			<line x1="14.83" y1="9.17" x2="19.07" y2="4.93" />
			<line x1="14.83" y1="9.17" x2="18.36" y2="5.64" />
			<line x1="4.93" y1="19.07" x2="9.17" y2="14.83" />
		</symbol>
	),
	"log-out-icon": (
		<symbol
			id="log-out-icon"
			viewBox="0 0 24 24"
			fill="none"
			stroke="currentColor"
			strokeWidth="2"
			strokeLinecap="round"
			strokeLinejoin="round"
		>
			<path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4" />
			<polyline points="16 17 21 12 16 7" />
			<line x1="21" y1="12" x2="9" y2="12" />
		</symbol>
	),
	"mail-icon": (
		<symbol
			id="mail-icon"
			viewBox="0 0 24 24"
			fill="none"
			stroke="currentColor"
			strokeWidth="2"
			strokeLinecap="round"
			strokeLinejoin="round"
		>
			<rect x="2" y="4" width="20" height="16" rx="2" />
			<path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
		</symbol>
	),
	"message-square-icon": (
		<symbol
			id="message-square-icon"
			viewBox="0 0 24 24"
			fill="none"
			stroke="currentColor"
			strokeWidth="2"
			strokeLinecap="round"
			strokeLinejoin="round"
		>
			<path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
		</symbol>
	),
	"more-horizontal-icon": (
		<symbol
			id="more-horizontal-icon"
			viewBox="0 0 24 24"
			fill="none"
			stroke="currentColor"
			strokeWidth="2"
			strokeLinecap="round"
			strokeLinejoin="round"
		>
			<circle cx="12" cy="12" r="1" />
			<circle cx="19" cy="12" r="1" />
			<circle cx="5" cy="12" r="1" />
		</symbol>
	),
	"plus-icon": (
		<symbol
			id="plus-icon"
			viewBox="0 0 24 24"
			fill="none"
			stroke="currentColor"
			strokeWidth="2"
			strokeLinecap="round"
			strokeLinejoin="round"
		>
			<line x1="12" y1="5" x2="12" y2="19" />
			<line x1="5" y1="12" x2="19" y2="12" />
		</symbol>
	),
	"plus-circle-icon": (
		<symbol
			id="plus-circle-icon"
			viewBox="0 0 24 24"
			fill="none"
			stroke="currentColor"
			strokeWidth="2"
			strokeLinecap="round"
			strokeLinejoin="round"
		>
			<circle cx="12" cy="12" r="10" />
			<line x1="12" y1="8" x2="12" y2="16" />
			<line x1="8" y1="12" x2="16" y2="12" />
		</symbol>
	),
	"settings-icon": (
		<symbol
			id="settings-icon"
			viewBox="0 0 24 24"
			fill="none"
			stroke="currentColor"
			strokeWidth="2"
			strokeLinecap="round"
			strokeLinejoin="round"
		>
			<path d="M20 7h-9" />
			<path d="M14 17H5" />
			<circle cx="17" cy="17" r="3" />
			<circle cx="7" cy="7" r="3" />
		</symbol>
	),
	"smile-icon": (
		<symbol
			id="smile-icon"
			viewBox="0 0 24 24"
			fill="none"
			stroke="currentColor"
			strokeWidth="2"
			strokeLinecap="round"
			strokeLinejoin="round"
		>
			<circle cx="12" cy="12" r="10" />
			<path d="M8 14s1.5 2 4 2 4-2 4-2" />
			<line x1="9" y1="9" x2="9.01" y2="9" />
			<line x1="15" y1="9" x2="15.01" y2="9" />
		</symbol>
	),
	"tags-icon": (
		<symbol
			id="tags-icon"
			viewBox="0 0 24 24"
			fill="none"
			stroke="currentColor"
			strokeWidth="2"
			strokeLinecap="round"
			strokeLinejoin="round"
		>
			<path d="M9 5H2v7l6.29 6.29c.94.94 2.48.94 3.42 0l3.58-3.58c.94-.94.94-2.48 0-3.42L9 5Z" />
			<path d="M6 9.01V9" />
			<path d="m15 5 6.3 6.3a2.4 2.4 0 0 1 0 3.4L17 19" />
		</symbol>
	),
	"trash-icon": (
		<symbol
			id="trash-icon"
			viewBox="0 0 24 24"
			fill="none"
			stroke="currentColor"
			strokeWidth="2"
			strokeLinecap="round"
			strokeLinejoin="round"
		>
			<path d="M3 6h18" />
			<path d="M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6" />
			<path d="M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2" />
			<line x1="10" y1="11" x2="10" y2="17" />
			<line x1="14" y1="11" x2="14" y2="17" />
		</symbol>
	),
	"user-icon": (
		<symbol
			id="user-icon"
			viewBox="0 0 24 24"
			fill="none"
			stroke="currentColor"
			strokeWidth="2"
			strokeLinecap="round"
			strokeLinejoin="round"
		>
			<path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2" />
			<circle cx="12" cy="7" r="4" />
		</symbol>
	),
	"user-plus-icon": (
		<symbol
			id="user-plus-icon"
			viewBox="0 0 24 24"
			fill="none"
			stroke="currentColor"
			strokeWidth="2"
			strokeLinecap="round"
			strokeLinejoin="round"
		>
			<path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
			<circle cx="9" cy="7" r="4" />
			<line x1="19" y1="8" x2="19" y2="14" />
			<line x1="22" y1="11" x2="16" y2="11" />
		</symbol>
	),
	"users-icon": (
		<symbol
			id="users-icon"
			viewBox="0 0 24 24"
			fill="none"
			stroke="currentColor"
			strokeWidth="2"
			strokeLinecap="round"
			strokeLinejoin="round"
		>
			<path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
			<circle cx="9" cy="7" r="4" />
			<path d="M22 21v-2a4 4 0 0 0-3-3.87" />
			<path d="M16 3.13a4 4 0 0 1 0 7.75" />
		</symbol>
	),
	"x-circle-icon": (
		<symbol
			id="x-circle-icon"
			viewBox="0 0 24 24"
			fill="none"
			stroke="currentColor"
			strokeWidth="2"
			strokeLinecap="round"
			strokeLinejoin="round"
		>
			<circle cx="12" cy="12" r="10" />
			<line x1="15" y1="9" x2="9" y2="15" />
			<line x1="9" y1="9" x2="15" y2="15" />
		</symbol>
	),
} satisfies Record<string, ReactNode>;

const _ICon = Icon<keyof typeof symbols>;

export { _ICon as Icon, Icons };
