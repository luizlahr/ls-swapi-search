import { cn } from "@/lib/utils";
import type { PropsWithChildren, ReactElement } from "react";

interface HeadingProps extends PropsWithChildren {
	className?: string;
}

export const Heading = ({
	children,
	className,
}: HeadingProps): ReactElement => {
	return <h1 className={cn("text-2xl font-bold", className)}>{children}</h1>;
};
