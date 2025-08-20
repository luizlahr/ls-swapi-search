import { cn } from "@/lib/utils";
import {
  type InputHTMLAttributes,
  type ReactElement,
  type Ref,
  useId,
} from "react";

type DefaultInputProps = Omit<InputHTMLAttributes<HTMLInputElement>, "type">;

interface RadioProps extends DefaultInputProps {
	ref: Ref<HTMLInputElement>;
	label: string;
}

export const Radio = ({ ref, label, ...props }: RadioProps): ReactElement => {
	const id = useId();
	return (
		<span className="has-focus-visible:outline-4 rounded outline-ls-green-500/50 flex flex-row gap-2">
			<input
				{...props}
				id={id}
				ref={ref}
				type="radio"
				className={cn(
					"w-full px-4 py-2 text-base",
					"accent-ls-green-500 border-ls-gray-400",
					"outline-none",
				)}
			/>
			<label className="font-bold" htmlFor={id}>
				{label}
			</label>
		</span>
	);
};
