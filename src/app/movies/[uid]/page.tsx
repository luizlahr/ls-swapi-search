import { Card } from "@/components/card/Card";
import { MovieDetail } from "@/components/movie-detail/MovieDetail";
import { MovieDetailSkeleton } from "@/components/movie-detail/MovieDetail.skeleton";
import { Suspense } from "react";

interface PageProps {
	params: Promise<{ uid: string }>;
}

export default async function Page(pageProps: PageProps) {
	const { uid } = await pageProps.params;

	return (
		<Card className="h-fit min-h-128">
			<Suspense fallback={<MovieDetailSkeleton />}>
				<MovieDetail uid={uid} />
			</Suspense>
		</Card>
	);
}
