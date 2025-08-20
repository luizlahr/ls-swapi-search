import { fetchMovieCharacters } from "@/actions/fetchMovieCharacters";
import type { FilmCharacter } from "@/types/films";
import Link from "next/link";
import { type ReactElement, Suspense } from "react";

interface MovieCharactersProps {
	characterUrls: string[];
}

export const MovieCharacters = async ({
	characterUrls,
}: MovieCharactersProps): Promise<ReactElement> => {
	const characters = await fetchMovieCharacters(characterUrls);

	return (
		<Suspense fallback={<div>Loading...</div>}>
			<ul className="flex max-w-full flex-wrap gap-1">
				{characters?.map((character: FilmCharacter, index) => (
					<li key={character.uid} className="inline-flex w-fit">
						<Link
							href={`/people/${character.uid}`}
							className="flex w-fit text-blue-600 underline hover:no-underline"
						>
							{character.name}
						</Link>
						{index < characters.length - 1 && <span>, </span>}
					</li>
				))}
			</ul>
		</Suspense>
	);
};
