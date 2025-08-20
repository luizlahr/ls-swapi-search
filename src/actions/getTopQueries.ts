"use server";

import { prisma } from "@/lib/db";

export interface TopQueryResult {
	url: string;
	count: number;
	percentage: number;
}

/**
 * Get the top 5 queries from the database
 *
 */
export const getTopQueries = async (): Promise<TopQueryResult[]> => {
	try {
		const stats = await prisma.stats.findMany({
			select: {
				url: true,
			},
		});

		const urlCounts = stats.reduce((acc: Record<string, number>, stat) => {
			acc[stat.url] = (acc[stat.url] || 0) + 1;
			return acc;
		}, {});

		const totalQueries = stats.length;
		const queryResults: TopQueryResult[] = Object.entries(urlCounts)
			.map(([url, count]) => ({
				url,
				count,
				percentage: totalQueries > 0 ? (count / totalQueries) * 100 : 0,
			}))
			.sort((a, b) => b.count - a.count)
			.slice(0, 5);

		return queryResults;
	} catch (error) {
		console.error("Error fetching top queries:", error);
		return [];
	}
};
