import { LinkButton } from "@/components/link-button/LinkButton";
import { FilterType } from "@/types/filter";
import type { Result as TResult } from "@/types/result";
import type { ReactElement } from "react";

interface ResultProps {
	className?: string;
	result: TResult;
	type: FilterType;
}

export const Result = ({
	result,
	type,
	...props
}: ResultProps): ReactElement => {
	const baseUrl = type === FilterType.FILMS ? "/movies" : "/people";

	return (
		<li
			{...props}
			className="flex flex-row justify-between items-center border-b border-ls-gray-400 py-2"
		>
			<span className="font-bold text-lg">{result.name}</span>
			<LinkButton href={`${baseUrl}/${result.uid}`}>See Details</LinkButton>
		</li>
	);
};
