import type { ReactElement } from "react";
import { MovieCharacterSkeleton } from "../movie-characters/MovieCharacter.skeleton";
import { Skeleton } from "../skeleton/Skeleton";

const TextSkeleton = () => {
	return (
		<div className="flex flex-col gap-2">
			<Skeleton className="h-4 w-3/4" />
			<Skeleton className="h-4 w-3/4" />
			<Skeleton className="h-4 w-3/4" />
			<Skeleton className="h-4 w-1/2" />
		</div>
	);
};

export const MovieDetailSkeleton = (): ReactElement => {
	return (
		<>
			<Skeleton className="h-10 max-w-72 w-full" />
			<div className="flex flex-col sm:flex-row sm:justify-between py-4 gap-8 sm:gap-0 flex-1">
				<div className="flex flex-col w-full sm:w-2/5">
					<h2 className="flex h-fit w-full text-lg font-bold border-b pb-2 mb-4 border-ls-gray-400">
						Opening Crawl
					</h2>
					<div className="flex flex-col gap-6">
						<TextSkeleton />
						<TextSkeleton />
						<TextSkeleton />
					</div>
				</div>
				<div className="flex flex-col w-full sm:w-2/5">
					<h2 className="flex h-fit w-full text-lg font-bold border-b pb-2 mb-4 border-ls-gray-400">
						Characters
					</h2>
					<MovieCharacterSkeleton />
				</div>
			</div>
			<Skeleton className="max-w-60 w-full h-12 rounded-full" />
		</>
	);
};
