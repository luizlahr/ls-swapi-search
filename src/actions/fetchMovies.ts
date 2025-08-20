"use server";

import { swapi } from "@/lib/api";

interface MovieResult {
	uid: string;
	properties: {
		title: string;
	};
}

export const fetchMovies = async (search: string) => {
	let url = "/films";

	if (search?.length) {
		url += `/?title=${encodeURIComponent(search)}`;
	}

	const { data } = await swapi.get<{ result: MovieResult[] }>(url);

	const results = data.result.map((result: MovieResult) => ({
		uid: result.uid,
		name: result.properties.title,
	}));

	return results;
};
