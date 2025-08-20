import { Card } from "@/components/card/Card";
import { Skeleton } from "@/components/skeleton/Skeleton";
import type { ReactElement } from "react";

export const TopQueriesChartSkeleton = (): ReactElement => {
	return (
		<Card>
			<Skeleton className="h-6 w-32 mb-4" />
			<div className="space-y-4">
				{Array.from({ length: 5 }, (_, index) => index + 1).map((number) => (
					<div key={number} className="space-y-2">
						<div className="flex justify-between items-center">
							<Skeleton className="h-3 w-20" />
							<Skeleton className="h-3 w-20" />
						</div>
						<Skeleton className="h-2 w-full" />
						<Skeleton className="h-3 w-80" />
					</div>
				))}
			</div>
		</Card>
	);
};
