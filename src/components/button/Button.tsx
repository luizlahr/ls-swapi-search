import { cn } from "@/lib/utils";
import type { ButtonHTMLAttributes, ReactElement } from "react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
	isFullWidth?: boolean;
}

export const Button = ({
	children,
	isFullWidth,
	type = "button",
	disabled,
	...props
}: ButtonProps): ReactElement => {
	return (
		<button
			disabled={disabled}
			className={cn(
				"bg-ls-green-500 rounded-full px-6 py-2 border border-ls-green-500 box-sizing-border",
				"font-bold text-white uppercase not-disabled:hover:bg-ls-green-400",
				"outline-4 focus-visible:outline-ls-green-500/50 focus-visible:border-white",
				{ "w-full": isFullWidth },
				{ "w-fit": !isFullWidth },
				{ "bg-ls-gray-200 border-ls-gray-200 cursor-not-allowed": disabled },
			)}
			{...props}
		>
			{children}
		</button>
	);
};
