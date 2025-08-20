import { cn } from "@/lib/utils";
import { X } from "lucide-react";
import {
  type InputHTMLAttributes,
  type ReactElement,
  type Ref,
  useRef,
} from "react";
import { mergeRefs } from "react-merge-refs";

type DefaultInputProps = Omit<InputHTMLAttributes<HTMLInputElement>, "type">;

interface InputProps extends DefaultInputProps {
	ref?: Ref<HTMLInputElement>;
	allowClear?: boolean;
	onClear?: () => void;
}

export const Input = ({
	ref,
	allowClear,
	onClear,
	...props
}: InputProps): ReactElement => {
	const inputRef = useRef<HTMLInputElement>(null);
	const hasValue = inputRef.current?.value.length;

	const handleClear = () => {
		onClear?.();
		inputRef.current?.focus();
	};

	return (
		<div className="flex w-full relative">
			<input
				ref={mergeRefs([ref, inputRef])}
				{...props}
				type="text"
				className={cn(
					"w-full px-4 py-2 text-base",
					"rounded-md border border-ls-gray-400 shadow-ls-inset",
					"focus-visible:outline-4 focus-visible:outline-ls-green-500/50",
					{ "pr-10": allowClear },
				)}
			/>
			{allowClear && !!hasValue && (
				<button
					className={cn(
						"absolute flex isolate size-6 right-2 top-1/2 -translate-y-1/2 rounded",
						"border border-transparent hover:border-gray-200",
						"bg-gray-100 cursor-pointer",
						"focus-visible:outline-2 outline-ls-green-500/50",
					)}
					onClick={handleClear}
					type="button"
					title="Clear search"
					aria-label="Clear search"
				>
					<X className="text-blue-600" />
				</button>
			)}
		</div>
	);
};
