"use client";

import { useSearch } from "@/hooks/useSearch";
import type { FilterType } from "@/types/filter";
import type { Result as TResult } from "@/types/result";
import { useSearchParams } from "next/navigation";
import type { ReactElement } from "react";
import { EmptyState } from "../../empty-state/EmptyState";
import { Result } from "./Result";

export const ResultsList = (): ReactElement => {
	const params = useSearchParams();

	const { data: results, isLoading } = useSearch({
		search: params.get("search") ?? "",
		type: params.get("type") as FilterType,
	});

	const data: TResult[] = results ?? [];

	return (
		<>
			{!data?.length && !isLoading && <EmptyState isLoading={false} />}
			{isLoading && <EmptyState isLoading={true} />}
			{!!data?.length && (
				<ul>
					{data?.map((result: TResult) => (
						<Result
							key={result.uid}
							result={result}
							type={params.get("type") as FilterType}
						/>
					))}
				</ul>
			)}
		</>
	);
};
