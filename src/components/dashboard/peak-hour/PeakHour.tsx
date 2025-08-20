import { getMostPopularHour } from "@/actions/getMostPopularHour";
import { Card } from "@/components/card/Card";
import type { ReactElement } from "react";

export const PeakHour = async (): Promise<ReactElement> => {
	const mostPopularHour = await getMostPopularHour();
	return (
		<Card>
			<div className="text-center">
				<div className="text-3xl font-bold text-ls-blue-500">
					{mostPopularHour?.hour || 0}:00
				</div>
				<div className="text-sm text-neutral-600">Peak Hour</div>
			</div>
		</Card>
	);
};
