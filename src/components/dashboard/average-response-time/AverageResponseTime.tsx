import { getAverageRequestTiming } from "@/actions/getAverageRequestTiming";
import { Card } from "@/components/card/Card";
import type { ReactElement } from "react";

export const AverageResponseTime = async (): Promise<ReactElement> => {
	const averageRequestTiming = await getAverageRequestTiming();
	return (
		<Card>
			<div className="text-center">
				<div className="text-3xl font-bold text-ls-blue-500">
					{averageRequestTiming.averageDuration.toFixed(1)}ms
				</div>
				<div className="text-sm text-neutral-600">Average Response Time</div>
			</div>
		</Card>
	);
};
