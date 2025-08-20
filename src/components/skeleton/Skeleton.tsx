import { cn } from "@/lib/utils";
import type { HTMLAttributes, ReactElement } from "react";

interface SkeletonProps extends HTMLAttributes<HTMLDivElement> {
	className?: string;
}

export const Skeleton = ({
	className,
	...props
}: SkeletonProps): ReactElement => {
	return (
		<div
			data-slot="skeleton"
			className={cn("bg-gray-200 animate-pulse rounded-md", className)}
			{...props}
		/>
	);
};
