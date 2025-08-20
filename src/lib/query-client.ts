import { QueryClient } from "@tanstack/react-query";

let instance: QueryClient | null = null;

export const getQueryClient = () => {
	if (instance) return instance;

	instance = new QueryClient();

	return instance;
};

export const queryClient = getQueryClient();
