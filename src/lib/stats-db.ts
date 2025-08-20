import { prisma } from "./db";

export type StatEntry = {
	url: string;
	method: string;
	status?: number | null;
	duration: number;
	timestamp?: Date;
};

export async function createStat(stat: StatEntry) {
	return await prisma.stats.create({
		data: {
			url: stat.url,
			method: stat.method,
			status: stat.status,
			duration: stat.duration,
			timestamp: stat.timestamp || new Date(),
		},
	});
}

export async function getStats() {
	return await prisma.stats.findMany({
		orderBy: {
			timestamp: "desc",
		},
	});
}

export async function getStatsSummary() {
	const stats = await prisma.stats.findMany();

	const summary = {
		totalCalls: stats.length,
		successfulCalls: stats.filter(
			(stat: StatEntry) => stat.status && stat.status < 400,
		).length,
		failedCalls: stats.filter(
			(stat: StatEntry) => stat.status && stat.status >= 400,
		).length,
		averageDuration:
			stats.length > 0
				? stats.reduce(
						(acc: number, stat: StatEntry) => acc + stat.duration,
						0,
					) / stats.length
				: 0,
		endpoints: {} as Record<
			string,
			{
				calls: number;
				avgDuration: number;
				failures: number;
			}
		>,
	};

	stats.forEach((stat: StatEntry) => {
		if (!summary.endpoints[stat.url]) {
			summary.endpoints[stat.url] = {
				calls: 0,
				avgDuration: 0,
				failures: 0,
			};
		}

		const endpoint = summary.endpoints[stat.url];
		endpoint.calls++;

		if (stat.status && stat.status >= 400) {
			endpoint.failures++;
		}

		endpoint.avgDuration =
			(endpoint.avgDuration * (endpoint.calls - 1) + stat.duration) /
			endpoint.calls;
	});

	return summary;
}

export async function clearStats() {
	return await prisma.stats.deleteMany();
}
