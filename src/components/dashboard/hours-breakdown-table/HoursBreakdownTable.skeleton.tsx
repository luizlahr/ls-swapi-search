import { Card } from "@/components/card/Card";
import { Skeleton } from "@/components/skeleton/Skeleton";
import type { ReactElement } from "react";

export const HoursBreakdownTableSkeleton = (): ReactElement => {
	return (
		<Card>
			<Skeleton className="h-6 w-32 mb-4" />
			<div className="space-y-4">
				<div className="flex justify-between items-center mb-4">
					<span className="flex w-32">
						<Skeleton className="py-2 h-4 w-24" />
					</span>
					<span className="flex w-52">
						<Skeleton className="py-2 h-4 w-12" />
					</span>
					<span className="flex w-64">
						<Skeleton className="py-2 h-4 w-16" />
					</span>
					<span className="flex flex-1">
						<Skeleton className="py-2 h-4 w-36" />
					</span>
				</div>
				{Array.from({ length: 24 }, (_, index) => index + 1).map((number) => (
					<div key={number} className="flex justify-between items-center">
						<span className="flex w-32">
							<Skeleton className="h-3 w-20" />
						</span>
						<span className="flex w-52">
							<Skeleton className="h-3 w-8" />
						</span>
						<span className="flex w-64">
							<Skeleton className="h-3 w-10" />
						</span>
						<span className="flex flex-1">
							<Skeleton className="h-3 w-32" />
						</span>
					</div>
				))}
			</div>
		</Card>
	);
};
