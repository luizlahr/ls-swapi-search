"use server";

import { prisma } from "@/lib/db";

export interface PopularHourResult {
	hour: number;
	count: number;
	percentage: number;
}

export const getMostPopularHour = async (): Promise<PopularHourResult | null> => {
	try {
		const stats = await prisma.stats.findMany({
			select: {
				timestamp: true,
			},
		});

		if (stats.length === 0) {
			return null;
		}

		const hourCounts = stats.reduce((acc: Record<number, number>, stat) => {
			const hour = new Date(stat.timestamp).getHours();
			acc[hour] = (acc[hour] || 0) + 1;
			return acc;
		}, {});

		const totalRequests = stats.length;
		const hourResults: PopularHourResult[] = Object.entries(hourCounts)
			.map(([hour, count]) => ({
				hour: parseInt(hour),
				count,
				percentage: totalRequests > 0 ? (count / totalRequests) * 100 : 0,
			}))
			.sort((a, b) => b.count - a.count);

		return hourResults[0] || null;
	} catch (error) {
		console.error("Error fetching most popular hour:", error);
		return null;
	}
};
