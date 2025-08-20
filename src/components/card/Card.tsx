import { cn } from "@/lib/utils";
import type { PropsWithChildren, ReactElement } from "react";

interface CardProps extends PropsWithChildren {
	className?: string;
}

export const Card = ({ children, className }: CardProps): ReactElement => {
	return (
		<div
			className={cn(
				"flex flex-col gap-4 p-6 bg-white rounded w-full",
				"border border-ls-gray-200 shadow-ls-lg ",
				className,
			)}
		>
			{children}
		</div>
	);
};
