import { type ReactNode } from "react";

interface IBaseCardProps {
	title: string | ReactNode;
	className?: string;
	displayOverride?: string;
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
		<section className={`base-card p-5 rounded-5 ${className || ""}`}>
			{title && mainCard ? (
				<h2 className="text-start text-uppercase fw-semibold title">
					{title}
				</h2>
			) : (
				<h5 className="mb-3 fw-semibold text-uppercase title">
					{title}
				</h5>
			)}
			<div className="h-100">{children}</div>
		</section>
	);
};

export default BaseCard;
