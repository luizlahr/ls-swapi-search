import type { ReactElement } from "react";
import { PersonMoviesSkeleton } from "../person-movies/PersonMovies.skeleton";
import { Skeleton } from "../skeleton/Skeleton";

export const PersonDetailSkeleton = (): ReactElement => {
	return (
		<>
			<Skeleton className="h-10 max-w-72 w-full" />
			<div className="flex flex-col sm:flex-row sm:justify-between py-4 gap-8 sm:gap-0 flex-1">
      <div className="flex flex-col w-full sm:w-2/5">
      <h2 className="flex h-fit w-full text-lg font-bold border-b pb-2 mb-4 border-ls-gray-400">
						Details
					</h2>
					<div className="flex flex-col gap-2">
						<Skeleton className="h-4 w-2/5" />
						<Skeleton className="h-4 w-2/5" />
						<Skeleton className="h-4 w-2/5" />
						<Skeleton className="h-4 w-2/5" />
						<Skeleton className="h-4 w-2/5" />
						<Skeleton className="h-4 w-2/5" />
					</div>
				</div>
				<div className="flex flex-col w-full sm:w-2/5">
					<h2 className="flex h-fit w-full text-lg font-bold border-b pb-2 mb-4 border-ls-gray-400">
						Movies
					</h2>
					<PersonMoviesSkeleton />
				</div>
			</div>
			<Skeleton className="max-w-60 w-full h-12 rounded-full" />
		</>
	);
};
