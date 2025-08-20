import { getTopQueries } from "@/actions/getTopQueries";
import { Card } from "@/components/card/Card";
import { Heading } from "@/components/heading/Heading";
import type { ReactElement } from "react";

export const TopQueriesChart = async (): Promise<ReactElement> => {
	const topQueries = await getTopQueries();

	return (
		<Card>
			<Heading className="text-lg mb-4">Top 5 Queries</Heading>
			<div className="space-y-3">
				{topQueries.map((query, index) => (
					<div key={query.url} className="space-y-2">
						<div className="flex justify-between items-center text-sm">
							<span className="truncate flex-1 mr-2" title={query.url}>
								{index + 1}. {query.url}
							</span>
							<span className="font-medium">
								{query.percentage.toFixed(1)}%
							</span>
						</div>
						<div className="w-full bg-ls-gray-200 rounded-full h-2">
							<div
								className="bg-ls-blue-500 h-2 rounded-full transition-all duration-300"
								style={{ width: `${query.percentage}%` }}
							/>
						</div>
						<div className="text-xs text-neutral-600">
							{query.count} requests
						</div>
					</div>
				))}
			</div>
		</Card>
	);
};
