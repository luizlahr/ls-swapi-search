import { swapi } from "@/lib/api";
import type { Film } from "@/types/films";
import { notFound } from "next/navigation";
import { type ReactElement, Suspense } from "react";
import { Heading } from "../heading/Heading";
import { LinkButton } from "../link-button/LinkButton";
import { MovieCharacterSkeleton } from "../movie-characters/MovieCharacter.skeleton";
import { MovieCharacters } from "../movie-characters/MovieCharacters";

interface MovieDetailProps {
	uid: string;
}

export const MovieDetail = async ({
	uid,
}: MovieDetailProps): Promise<ReactElement> => {
	const fetchDetails = async (): Promise<Film | null> => {
		try {
			const { data } = await swapi.get(`/films/${uid}`);

			return {
				uid,
				openingCrawl: data.result.properties.opening_crawl,
				title: data.result.properties.title,
				characters: data.result.properties.characters,
			};
		} catch {
			return null;
		}
	};

	const movie = await fetchDetails();
	if (!movie) return notFound();
	return (
		<>
			<Heading>{movie.title}</Heading>
			<div className="flex flex-col sm:flex-row sm:justify-between py-4 gap-8 sm:gap-0 flex-1">
				<div className="flex flex-col w-full sm:w-2/5">
					<h2 className="flex h-fit w-full text-lg font-bold border-b pb-2 mb-4 border-ls-gray-400">
						Opening Crawl
					</h2>
					<pre className="font-sans">{movie.openingCrawl}</pre>
				</div>
				<div className="flex flex-col w-full sm:w-2/5">
					<h2 className="flex h-fit w-full text-lg font-bold border-b pb-2 mb-4 border-ls-gray-400">
						Characters
					</h2>
					<Suspense fallback={<MovieCharacterSkeleton />}>
						<MovieCharacters characterUrls={movie.characters} />
					</Suspense>
				</div>
			</div>
			<LinkButton href="/">Back to Search</LinkButton>
		</>
	);
};
