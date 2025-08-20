"use client";

import { FilterType } from "@/types/filter";
import { zodResolver } from "@hookform/resolvers/zod";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import type { PropsWithChildren, ReactElement } from "react";
import { useForm } from "react-hook-form";
import z from "zod";
import { Button } from "../button/Button";
import { Card } from "../card/Card";
import { Input } from "../input/Input";
import { Radio } from "../radio/Radio";

interface FilterProps extends PropsWithChildren {
	className?: string;
}

const filterSchema = z.object({
	type: z.enum(FilterType),
	search: z.string().optional().transform((val) => encodeURIComponent(val ?? ""),)
});

type FilterPayload = z.infer<typeof filterSchema>;

export const Filter = ({ className }: FilterProps): ReactElement => {
	const params = useSearchParams();
	const router = useRouter();
	const pathname = usePathname();

	const form = useForm({
		resolver: zodResolver(filterSchema),
		defaultValues: {
			type: (params.get("type") as FilterType) ?? FilterType.PEOPLE,
			search: params.get("search") ?? "",
		},
	});

	const handleSubmit = (data: FilterPayload) => {
		const searchParams = new URLSearchParams(params);

		if (data.type === FilterType.PEOPLE) {
			searchParams.delete("type");
		}

		if (!data.search?.length) {
			searchParams.delete("search");
		}

		if (!!data?.type && data?.type !== FilterType.PEOPLE) {
			searchParams.set("type", data.type);
		}
		if (data?.search?.length) {
			searchParams.set("search", data.search);
		}

		let url = pathname;

		if (searchParams.toString()) {
			url += `?${searchParams.toString()}`;
		}

		router.push(url);
	};

	const handleClearSearch = () => {
		form.setValue("search", "");
		handleSubmit({
			type: form.getValues("type"),
			search: "",
		});
	};

	const filterType = form.watch("type");
	const searchTypeLabel =
		filterType === FilterType.PEOPLE ? "People" : "Movies";
	const hasSearch = form.watch("search")?.length;

	return (
		<aside className={className}>
			<Card>
				<h2 className="text-base font-semibold text-balance">
					What are you searching for?
				</h2>
				<form
					onSubmit={form.handleSubmit(handleSubmit)}
					className="flex flex-col gap-4"
				>
					<fieldset className="flex flex-row flex-wrap gap-6">
						<legend className="sr-only">Search type selection</legend>
						<Radio
							checked={filterType === FilterType.PEOPLE}
							value="people"
							label="People"
							{...form.register("type")}
						/>
						<Radio
							checked={filterType === FilterType.FILMS}
							value="films"
							label="Movies"
							{...form.register("type")}
						/>
					</fieldset>
					<div className="flex flex-col">
						<Input
							autoFocus
							inputMode="search"
							allowClear
							onClear={handleClearSearch}
							aria-label={`Search for ${searchTypeLabel}`}
							{...form.register("search")}
						/>
					</div>
					<Button disabled={!hasSearch} type="submit" isFullWidth>
						Search
					</Button>
				</form>
			</Card>
		</aside>
	);
};
