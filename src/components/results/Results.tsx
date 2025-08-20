import { Card } from "@/components/card/Card";
import { cn } from "@/lib/utils";
import { type PropsWithChildren, type ReactElement } from "react";
import { ResultsList } from "./_composition/ResultsList";

interface ResultsListProps extends PropsWithChildren {
	className?: string;
}

export const Results = async ({
	className,
}: ResultsListProps): Promise<ReactElement> => {
	return (
		<Card className={cn("min-h-128", className)}>
			<h1 className="flex w-full pb-2 border-b border-ls-gray-400 text-lg font-bold">
				Results
			</h1>
			<ResultsList />
		</Card>
	);
};
