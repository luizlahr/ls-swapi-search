import { cn } from "@/lib/utils";
import type { ReactElement } from "react";

interface EmptyStateProps {
	isLoading: boolean;
}

export const EmptyState = ({ isLoading }: EmptyStateProps): ReactElement => {
	return (
		<div
			className={cn(
				"flex w-full flex-1 items-center justify-center",
				"text-center text-neutral-500 font-bold",
			)}
		>
			{isLoading && <p>Searching...</p>}
			{!isLoading && (
				<p className="text-balance">
					There are zero matches.
					<br />
					Use the form to search for People or Movies.
				</p>
			)}
		</div>
	);
};
