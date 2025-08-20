import { cn } from "@/lib/utils";
import Link from "next/link";
import type { ReactElement } from "react";

export const Header = (): ReactElement => {
	return (
		<header
			className={cn(
				"flex flex-row justify-center h-10 bg-white items-center px-6",
				"shadow-ls",
				"text-lg font-bold text-ls-green-500",
			)}
		>
			<Link href="/" className="hover:text-ls-green-400 transition-colors">
				SWStarter
			</Link>
		</header>
	);
};
