import { type ReactNode } from "react";

interface IBaseCardProps {
	title: string;
	className?: string;
	mainCard?: boolean;
	children: ReactNode;
}

const BaseCard: React.FC<IBaseCardProps> = ({
	title,
	children,
	mainCard,
	className,
}) => {
	return (
		<section
			className={`bg-card text-title max-h-fit w-full max-w-[min(100%,var(--container-content))] justify-self-center rounded-[2rem] p-5 md:p-12 ${
				className || ""
			}`}
		>
			{mainCard ? (
				<h1 className="font-title text-left text-[min(2rem,calc(1.325rem+0.9vw))] font-semibold uppercase">
					{title}
				</h1>
			) : (
				<h2 className="font-title mb-4 text-xl font-semibold uppercase">
					{title}
				</h2>
			)}
			<div className="h-full">{children}</div>
		</section>
	);
};

export default BaseCard;
