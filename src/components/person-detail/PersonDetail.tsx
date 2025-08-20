import { swapi } from "@/lib/api";
import type { Person } from "@/types/people";
import { notFound } from "next/navigation";
import { type ReactElement, Suspense } from "react";
import { Heading } from "../heading/Heading";
import { LinkButton } from "../link-button/LinkButton";
import { PersonMovies } from "../person-movies/PersonMovies";
import { PersonMoviesSkeleton } from "../person-movies/PersonMovies.skeleton";

interface PersonDetailProps {
	uid: string;
}

export const PersonDetail = async ({
	uid,
}: PersonDetailProps): Promise<ReactElement> => {
	const fetchDetails = async (): Promise<Person | null> => {
		try {
			const { data } = await swapi.get(`/people/${uid}`);

			return {
				uid,
				name: data.result.properties.name,
				birthYear: data.result.properties.birth_year,
				gender: data.result.properties.gender,
				eyeColor: data.result.properties.eye_color,
				hairColor: data.result.properties.hair_color,
				height: data.result.properties.height,
				mass: data.result.properties.mass,
				films: data.result.properties.films,
			};
		} catch {
			return null;
		}
	};

	const person = await fetchDetails();
	if (!person) return notFound();

	return (
		<>
			<Heading>{person.name}</Heading>
			<div className="flex flex-col sm:flex-row sm:justify-between py-4 gap-8 sm:gap-0 flex-1">
				<div className="flex flex-col w-full sm:w-2/5">
					<h2 className="flex h-fit w-full text-lg font-bold border-b pb-2 mb-4 border-ls-gray-400">
						Details
					</h2>
					<ul className="flex flex-col">
						<li>
							<strong>Birth Year</strong>: {person.birthYear}
						</li>
						<li>
							<strong>Gender</strong>: {person.gender}
						</li>
						<li>
							<strong>Eye Color</strong>: {person.eyeColor}
						</li>
						<li>
							<strong>Hair Color</strong>: {person.hairColor}
						</li>
						<li>
							<strong>Height</strong>: {person.height}
						</li>
						<li>
							<strong>Mass</strong>: {person.mass}
						</li>
					</ul>
				</div>
				<div className="flex flex-col w-full sm:w-2/5">
					<h2 className="flex h-fit w-full text-lg font-bold border-b pb-2 mb-4 border-ls-gray-400">
						Movies
					</h2>
					<Suspense fallback={<PersonMoviesSkeleton />}>
						<PersonMovies filmUrls={person.films} />
					</Suspense>
				</div>
			</div>
			<LinkButton href="/">Back to Search</LinkButton>
		</>
	);
};
