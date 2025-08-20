import { fetchPersonMovies } from "@/actions/fetchPersonMovies";
import type { PersonMovie } from "@/types/people";
import Link from "next/link";
import { type ReactElement, Suspense } from "react";

interface PersonMoviesProps {
	filmUrls: string[];
}

export const PersonMovies = async ({
	filmUrls,
}: PersonMoviesProps): Promise<ReactElement> => {
	const films = await fetchPersonMovies(filmUrls);

	return (
		<Suspense fallback={<div>Loading...</div>}>
			<ul className="flex flex-col gap-1">
				{films?.map((film: PersonMovie) => (
					<li key={film.uid}>
						<Link
							href={`/movies/${film.uid}`}
							className="flex w-fit text-blue-600 underline hover:no-underline"
						>
							{film.title}
						</Link>
					</li>
				))}
			</ul>
		</Suspense>
	);
};
