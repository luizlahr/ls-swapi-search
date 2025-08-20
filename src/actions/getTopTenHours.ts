"use server";

import { prisma } from "@/lib/db";

export interface TopHourResult {
	hour: number;
	count: number;
	percentage: number;
}

/**
 * Get the top 10 hours with the most requests
 *
 */
export const getTopTenHours = async (): Promise<TopHourResult[]> => {
	try {
		const stats = await prisma.stats.findMany({
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
		const hourResults: TopHourResult[] = Object.entries(hourCounts)
			.map(([hour, count]) => ({
				hour: parseInt(hour),
				count,
				percentage: totalRequests > 0 ? (count / totalRequests) * 100 : 0,
			}))
			.sort((a, b) => b.count - a.count)
			.slice(0, 10);

		return hourResults;
	} catch (error) {
		console.error("Error fetching top five hours:", error);
		return [];
	}
};
