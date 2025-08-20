import { api } from "@/lib/api";
import type { FilmCharacter } from "@/types/films";

export const fetchMovieCharacters = async (
	characterUrls: string[],
): Promise<FilmCharacter[]> => {
	const characters = await Promise.all(
		characterUrls.map(async (character: string) => {
			const { data } = await api.get(character);
			return {
				name: data.result.properties.name,
				uid: data.result.uid,
			};
		}),
	);

	return characters;
};
