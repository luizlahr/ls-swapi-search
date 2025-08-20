import { fetchMovies } from "@/actions/fetchMovies";
import { fetchPeople } from "@/actions/fetchPeople";
import { FilterType } from "@/types/filter";
import { type NextRequest, NextResponse } from "next/server";

export const GET = async (request: NextRequest) => {
	const searchParams = request.nextUrl.searchParams;
	const search = searchParams.get("search") ?? "";
	const type = searchParams.get("type") ?? FilterType.PEOPLE;

	const isPeople = type !== FilterType.FILMS;

	if (!isPeople) {
		const results = await fetchMovies(search);
		return NextResponse.json(results);
	}

	const results = await fetchPeople(search);
	return NextResponse.json(results);
};
