import "./projects.css";

interface IProjectCard {
	description: string;
	github: string;
	icon: string;
	name: string;
	url: string;
	year: string;
}

const NavItemComponent: React.FC<IProjectCard> = ({
	description,
	github,
	icon,
	name,
	url,
	year,
}) => {
	return (
		<div className="project-card d-flex flex-column flex-md-row">
			<a href={url} target="_blank">
				<img src={icon} alt={`${name} icon`} />
			</a>
			<div className="text-content d-flex flex-column">
				<div className="header d-flex flex-row">
					<a href={url} target="_blank">
						<h3 className="title mt-2 mt-md-0">
							{name}{" "}
							<span className="year text">{`(${year})`}</span>{" "}
							<small>
								<a
									href={github}
									target="_blank"
									rel="noopener noreferrer"
								>
									<i className="bi bi-github" />
								</a>
							</small>
						</h3>
					</a>
				</div>
				<p className="description">{description}</p>
			</div>
		</div>
	);
};

export default NavItemComponent;
