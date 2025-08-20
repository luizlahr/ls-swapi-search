import { api } from "@/lib/api";
import type { FilterParams } from "@/types/filter";
import { useQuery } from "@tanstack/react-query";

const searchFunc = async (params: FilterParams) => {
	const { data } = await api.get("/search", { params });
	return data;
};

export const useSearch = (params: FilterParams) =>
	useQuery({
		queryKey: ["search", params.search, params.type],
		queryFn: async () => await searchFunc(params),
		enabled: !!params.search?.length,
	});
