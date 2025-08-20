import { Card } from "@/components/card/Card";
import { PersonDetail } from "@/components/person-detail/PersonDetail";
import { PersonDetailSkeleton } from "@/components/person-detail/PersonDetail.skeleton";
import { Suspense } from "react";

interface PageProps {
	params: Promise<{ uid: string }>;
}

export default async function Page(pageProps: PageProps) {
	const { uid } = await pageProps.params;

	return (
		<Card className="h-fit min-h-128">
			<Suspense fallback={<PersonDetailSkeleton />}>
				<PersonDetail uid={uid} />
			</Suspense>
		</Card>
	);
}
