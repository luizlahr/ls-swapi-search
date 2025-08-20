import { getHourlyRequestsToday } from "@/actions/getHourlyRequestsToday";
import { Card } from "@/components/card/Card";
import { Heading } from "@/components/heading/Heading";
import type { ReactElement } from "react";

export const HoursBreakdownTable = async (): Promise<ReactElement> => {
	const hourlyRequestsToday = await getHourlyRequestsToday();

	return (
		<Card>
			<Heading className="text-lg mb-4">All Hours Breakdown</Heading>
			<div className="overflow-x-auto">
				<table className="w-full text-sm">
					<thead>
						<tr className="border-b border-ls-gray-200">
							<th className="text-left py-2">Hour</th>
							<th className="text-left py-2">Requests</th>
							<th className="text-left py-2">Percentage</th>
							<th className="text-left py-2">Visual</th>
						</tr>
					</thead>
					<tbody>
						{Array.from({ length: 24 }, (_, index) => {
							const hourData = hourlyRequestsToday.find(
								(h) => h.hour === index,
							);
							const count = hourData?.count || 0;
							const percentage = hourData?.percentage || 0;

							return (
								<tr
									key={hourData?.hour}
									className="border-b border-ls-gray-200"
								>
									<td className="py-2 font-medium">
										{index.toString().padStart(2, "0")}:00
									</td>
									<td className="py-2">{count}</td>
									<td className="py-2">{percentage.toFixed(1)}%</td>
									<td className="py-2">
										<div className="w-24 bg-ls-gray-200 rounded-full h-1">
											<div
												className="bg-ls-green-500 h-1 rounded-full"
												style={{ width: `${Math.max(percentage, 2)}%` }}
											/>
										</div>
									</td>
								</tr>
							);
						})}
					</tbody>
				</table>
			</div>
		</Card>
	);
};
