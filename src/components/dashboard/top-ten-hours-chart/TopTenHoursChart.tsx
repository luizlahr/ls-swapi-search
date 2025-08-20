import { getTopTenHours } from "@/actions/getTopTenHours";
import { Card } from "@/components/card/Card";
import { Heading } from "@/components/heading/Heading";
import type { ReactElement } from "react";

export const TopTenHoursChart = async (): Promise<ReactElement> => {
	const topTenHours = await getTopTenHours();

	return (
		<Card>
			<Heading className="text-lg mb-4">Top 10 Hours</Heading>
			<div className="space-y-2">
				{topTenHours.map((hour) => (
					<div key={hour.hour} className="flex items-center space-x-3">
						<div className="w-12 text-sm font-medium">
							{hour.hour.toString().padStart(2, "0")}:00
						</div>
						<div className="flex-1">
							<div className="w-full bg-ls-gray-200 rounded-full h-2">
								<div
									className="bg-ls-green-500 h-2 rounded-full transition-all duration-300"
									style={{ width: `${hour.percentage}%` }}
								/>
							</div>
						</div>
						<div className="w-16 text-xs text-neutral-600 text-right">
							{hour.count} reqs
						</div>
					</div>
				))}
			</div>
		</Card>
	);
};
