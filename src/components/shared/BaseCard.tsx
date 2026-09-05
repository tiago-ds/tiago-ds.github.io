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
		<section className={`base-card p-5 rounded-5 ${className || ""}`}>
			{/* fs-* keeps the previous h2/h5 sizing. */}
			{mainCard ? (
				<h1 className="text-start text-uppercase fw-semibold title fs-2">
					{title}
				</h1>
			) : (
				<h2 className="mb-3 fw-semibold text-uppercase title fs-5">
					{title}
				</h2>
			)}
			<div className="h-100">{children}</div>
		</section>
	);
};

export default BaseCard;
