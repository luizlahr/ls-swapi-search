import { api } from "@/lib/api";
import type { PersonMovie } from "@/types/people";

export const fetchPersonMovies = async (
	urls: string[],
): Promise<PersonMovie[]> => {
	const films = await Promise.all(
		urls.map(async (film: string) => {
			const { data } = await api.get(film);
			return {
				title: data.result.properties.title,
				uid: data.result.uid,
			};
		}),
	);

	return films;
};
