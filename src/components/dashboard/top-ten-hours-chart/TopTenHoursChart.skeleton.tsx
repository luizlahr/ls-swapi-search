import { Card } from "@/components/card/Card";
import { Skeleton } from "@/components/skeleton/Skeleton";
import type { ReactElement } from "react";

export const TopTenHoursChartSkeleton = (): ReactElement => {
	return (
		<Card>
			<Skeleton className="h-6 w-32 mb-4" />
			<div className="space-y-3">
				{Array.from({ length: 10 }, (_, index) => index + 1).map((number) => (
					<div key={number} className="flex items-center space-x-3">
						<Skeleton className="h-4 w-12" />
						<Skeleton className="h-2 flex-1" />
						<Skeleton className="h-4 w-16" />
					</div>
				))}
			</div>
		</Card>
	);
};
