import type { ReactElement } from "react";
import { Skeleton } from "../skeleton/Skeleton";

export const HomeSkeleton = (): ReactElement => {
	return (
		<>
			<Skeleton className="col-span-1 md:col-span-4 h-64 w-full" />
			<Skeleton className="col-span-1 md:col-span-8 h-128 w-full" />
		</>
	);
};
