import { DashboardLink } from "@/components/dashboard-link/DashboardLink";
import { Filter } from "@/components/filter/Filter";
import { HomeSkeleton } from "@/components/home-skeleton/HomeSkeleton";
import { Results } from "@/components/results/Results";
import { Suspense } from "react";

export default async function Home() {
	return (
		<div className="grid grid-cols-1 md:grid-cols-12 gap-6">
			<Suspense fallback={<HomeSkeleton />}>
				<div className="col-span-1 md:col-span-4 h-fit">
				<Filter className="h-fit" />
				<DashboardLink />
			</div>
				<Results className="col-span-1 md:col-span-8 h-fit" />
			</Suspense>
		</div>
	);
}
