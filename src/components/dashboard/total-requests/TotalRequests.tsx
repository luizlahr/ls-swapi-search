import { getAverageRequestTiming } from "@/actions/getAverageRequestTiming";
import { Card } from "@/components/card/Card";
import type { ReactElement } from "react";

export const TotalRequests = async (): Promise<ReactElement> => {
	const averageRequestTiming = await getAverageRequestTiming();
	return (
		<Card>
			<div className="text-center">
				<div className="text-3xl font-bold text-ls-green-500">
					{averageRequestTiming.totalRequests}
				</div>
				<div className="text-sm text-neutral-600">Total Requests</div>
			</div>
		</Card>
	);
};
