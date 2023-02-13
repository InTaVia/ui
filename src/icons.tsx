import { Check, ChevronDown, ChevronRight, Circle } from "lucide-react";
import { type SVGProps } from "react";

export function CheckMarkIcon(props: SVGProps<SVGSVGElement>): JSX.Element {
	return <Check {...props} />;
}

export function ChevronDownIcon(props: SVGProps<SVGSVGElement>): JSX.Element {
	return <ChevronDown {...props} />;
}

export function ChevronRightIcon(props: SVGProps<SVGSVGElement>): JSX.Element {
	return <ChevronRight {...props} />;
}

export function CircleIcon(props: SVGProps<SVGSVGElement>): JSX.Element {
	return <Circle {...props} />;
}
