import { Card } from "@/components/card/Card";
import { Skeleton } from "@/components/skeleton/Skeleton";
import type { ReactElement } from "react";

export const StatCardSkeleton = (): ReactElement => {
	return (
		<Card>
			<div className="text-center space-y-2">
				<Skeleton className="h-10 w-20 mx-auto" />
				<Skeleton className="h-4 w-32 mx-auto" />
			</div>
		</Card>
	);
};
