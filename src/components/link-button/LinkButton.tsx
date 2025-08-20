import { cn } from "@/lib/utils";
import Link from "next/link";
import type { AnchorHTMLAttributes, ReactElement } from "react";

interface LinkButtonProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
	href: string;
}

export const LinkButton = ({
	children,
	type = "button",
	href,
	...props
}: LinkButtonProps): ReactElement => {
	return (
		<Link
			href={href}
			className={cn(
				"bg-ls-green-500 rounded-full px-6 py-2 box-sizing-border",
				"hover:bg-ls-green-400",
				"font-bold text-white uppercase w-fit",
				"outline-4 focus-visible:outline-ls-green-500/50",
			)}
			{...props}
		>
			{children}
		</Link>
	);
};
