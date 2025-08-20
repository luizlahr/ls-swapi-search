import type { ReactElement } from 'react';
import { Skeleton } from '../skeleton/Skeleton';

export const PersonMoviesSkeleton = (): ReactElement => {
  return (
    <div className="flex flex-col gap-2">
      { Array.from({ length: 10 }, (_, i) => i + 1).map((number) => (
        <Skeleton key={`item_${number}`} className="flex h-4 w-3/5" />
			))}
		</div>
	);
};