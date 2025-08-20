import { getAverageRequestTiming } from "@/actions/getAverageRequestTiming";
import { getHourlyRequestsToday } from "@/actions/getHourlyRequestsToday";
import { getMostPopularHour } from "@/actions/getMostPopularHour";
import { getTopQueries } from "@/actions/getTopQueries";
import { getTopTenHours } from "@/actions/getTopTenHours";
import { NextResponse } from "next/server";

export const dynamic = "force-static";
export const revalidate = 300; // 5 minutes
export const runtime = 'nodejs'

export async function GET() {
	try {
		const [
			topQueries,
			topTenHours,
			averageRequestTiming,
			mostPopularHour,
			hourlyRequestsToday,
		] = await Promise.all([
			getTopQueries(),
			getTopTenHours(),
			getAverageRequestTiming(),
			getMostPopularHour(),
			getHourlyRequestsToday(),
		]);

		const stats = {
			topQueries,
			topTenHours,
			averageRequestTiming,
			mostPopularHour,
			hourlyRequestsToday,
		};

		const response = NextResponse.json(stats);
		response.headers.set(
      "Cache-Control",
      "public, max-age=3000, stale-while-revalidate=3000"
    );
		return response;
	} catch (error) {
		console.error("Error fetching stats:", error);
		return NextResponse.json(
			{ error: "Failed to fetch stats" },
			{ status: 500 },
		);
	}
}