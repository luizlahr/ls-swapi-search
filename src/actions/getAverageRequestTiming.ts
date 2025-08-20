"use server";

import { prisma } from "@/lib/db";

export interface AverageTimingResult {
	averageDuration: number;
	totalRequests: number;
}

export const getAverageRequestTiming =
	async (): Promise<AverageTimingResult> => {
		try {
			const result = await prisma.stats.aggregate({
				_avg: {
					duration: true,
				},
				_count: {
					id: true,
				},
			});

			return {
				averageDuration: result._avg.duration || 0,
				totalRequests: result._count.id || 0,
			};
		} catch (error) {
			console.error("Error fetching average request timing:", error);
			return {
				averageDuration: 0,
				totalRequests: 0,
			};
		}
	};
