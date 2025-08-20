"use client";

import { queryClient } from "@/lib/query-client";
import { QueryClientProvider } from "@tanstack/react-query";
import type { PropsWithChildren, ReactElement } from "react";

interface ProvidersProps extends PropsWithChildren {}

export const Providers = ({ children }: ProvidersProps): ReactElement => {
	return (
		<QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
	);
};
