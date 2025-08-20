import { StatCardSkeleton } from "@/components/dashboard/_composition/_composition/StatCard.skeleton";
import { AverageResponseTime } from "@/components/dashboard/average-response-time/AverageResponseTime";
import { HoursBreakdownTable } from "@/components/dashboard/hours-breakdown-table/HoursBreakdownTable";
import { HoursBreakdownTableSkeleton } from "@/components/dashboard/hours-breakdown-table/HoursBreakdownTable.skeleton";
import { PeakHour } from "@/components/dashboard/peak-hour/PeakHour";
import { TopQueriesChart } from "@/components/dashboard/top-queries-chart/TopQueriesChart";
import { TopQueriesChartSkeleton } from "@/components/dashboard/top-queries-chart/TopQueriesChart.skeleton";
import { TopTenHoursChart } from "@/components/dashboard/top-ten-hours-chart/TopTenHoursChart";
import { TopTenHoursChartSkeleton } from "@/components/dashboard/top-ten-hours-chart/TopTenHoursChart.skeleton";
import { TotalRequests } from "@/components/dashboard/total-requests/TotalRequests";
import { Heading } from "@/components/heading/Heading";
import { cn } from "@/lib/utils";
import { ArrowLeftIcon } from "lucide-react";
import Link from "next/link";
import { Suspense } from "react";

export const dynamic = "force-static";
export const revalidate = 300; // 5 minutes

export default async function Dashboard() {
	const lastUpdated = new Date().toLocaleString("en-US", {
		timeZone: "America/Sao_Paulo",
		year: "numeric",
		month: "short",
		day: "numeric",
		hour: "2-digit",
		minute: "2-digit",
		second: "2-digit",
	});

	return (
		<div className="space-y-6">
			<div className="flex items-center justify-between">
				<div className="flex items-center gap-2">
					<Link
						href="/"
						className={cn(
							"flex size-8 rounded-lg transition-all items-center justify-center",
							"hover:bg-blue-500 hover:text-white",
							"focus-visible:bg-blue-500 focus-visible:text-white focus-visible:outline-4  outline-blue-500/50",
						)}
					>
						<ArrowLeftIcon className="w-6 h-6" />
					</Link>
					<Heading>Analytics Dashboard</Heading>
				</div>
				<div className="flex flex-col text-sm text-neutral-600">
					<span>Last updated: {lastUpdated}</span>
					<small>Updated every 5 minutes</small>
				</div>
			</div>

			<div className="grid grid-cols-1 md:grid-cols-3 gap-6">
				<Suspense fallback={<StatCardSkeleton />}>
					<AverageResponseTime />
				</Suspense>
				<Suspense fallback={<StatCardSkeleton />}>
					<TotalRequests />
				</Suspense>
				<Suspense fallback={<StatCardSkeleton />}>
					<PeakHour />
				</Suspense>
			</div>

			<div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
				<Suspense fallback={<TopQueriesChartSkeleton />}>
					<TopQueriesChart />
				</Suspense>
				<Suspense fallback={<TopTenHoursChartSkeleton />}>
					<TopTenHoursChart />
				</Suspense>
			</div>

			<div className="grid grid-cols-1 gap-6">
				<Suspense fallback={<HoursBreakdownTableSkeleton />}>
					<HoursBreakdownTable />
				</Suspense>
			</div>
		</div>
	);
}
