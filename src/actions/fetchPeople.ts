"use server";

import { swapi } from "@/lib/api";

interface PersonResult {
	uid: string;
	properties: {
		name: string;
	};
}

export const fetchPeople = async (search: string) => {
	let url = "/people";

	if (search?.length) {
		url += `/?name=${encodeURIComponent(search)}`;
	}

	const { data } = await swapi.get<{ result: PersonResult[] }>(url);

	const results = data.result?.map((result: PersonResult) => ({
		uid: result.uid,
		name: result.properties.name,
	}));

	return results;
};
