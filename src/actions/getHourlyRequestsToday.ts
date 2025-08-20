"use server";

import { prisma } from "@/lib/db";

export interface HourlyRequestResult {
	hour: number;
	count: number;
	percentage: number;
}

export const getHourlyRequestsToday = async (): Promise<
	HourlyRequestResult[]
> => {
	try {
		const now = new Date();
		const startOfDay = new Date(
			now.getFullYear(),
			now.getMonth(),
			now.getDate(),
			0,
			0,
			0,
			0,
		);
		const endOfDay = new Date(
			now.getFullYear(),
			now.getMonth(),
			now.getDate(),
			23,
			59,
			59,
			999,
		);

		const stats = await prisma.stats.findMany({
			where: {
				timestamp: {
					gte: startOfDay,
					lte: endOfDay,
				},
			},
			select: {
				timestamp: true,
			},
		});

		const hourCounts = stats.reduce((acc: Record<number, number>, stat) => {
			const hour = new Date(stat.timestamp).getHours();
			acc[hour] = (acc[hour] || 0) + 1;
			return acc;
		}, {});

		const totalRequests = stats.length;
		const hourResults: HourlyRequestResult[] = [];

		for (let hour = 0; hour < 24; hour++) {
			const count = hourCounts[hour] || 0;
			hourResults.push({
				hour,
				count,
				percentage: totalRequests > 0 ? (count / totalRequests) * 100 : 0,
			});
		}

		return hourResults.sort((a, b) => a.hour - b.hour);
	} catch (error) {
		console.error("Error fetching hourly requests for today:", error);
		return [];
	}
};
