import type { ReactElement } from "react";
import { Skeleton } from "../skeleton/Skeleton";

export const MovieCharacterSkeleton = (): ReactElement => {
	return (
		<div className="flex flex-wrap gap-2">
			{Array.from({ length: 10 }, (_, i) => i + 1).map((number) => (
				<Skeleton
					key={`item_${number}`}
					className="inline-flex h-4 w-full basis-1/4 shrink-1 grow-1 last:grow-0"
				/>
			))}
		</div>
	);
};
