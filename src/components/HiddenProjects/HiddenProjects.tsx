import BaseCard from "../shared/BaseCard";
import { hiddenProjects, type HiddenProject } from "../../data/hiddenProjects";

import "./hiddenProjects.css";

interface IHiddenProjectCard {
	project: HiddenProject;
}

const HiddenProjectCard: React.FC<IHiddenProjectCard> = ({ project }) => {
	return (
		<li className="hidden-project d-flex flex-row gap-3">
			<i className={`bi ${project.icon} project-icon`} aria-hidden="true" />

			<div className="d-flex flex-column">
				<h3 className="title mt-0">
					{project.url ? (
						<a
							href={project.url}
							target="_blank"
							rel="noopener noreferrer"
						>
							{project.name}
						</a>
					) : (
						project.name
					)}{" "}
					<span className="year">{`(${project.year})`}</span>
					{!project.url && (
						<span className="badge-soon">not hosted yet</span>
					)}
					{project.github && (
						<a
							className="github-link"
							href={project.github}
							target="_blank"
							rel="noopener noreferrer"
							aria-label={`${project.name} on GitHub`}
						>
							<i className="bi bi-github" />
						</a>
					)}
				</h3>

				<p className="description">{project.description}</p>
			</div>
		</li>
	);
};

export default function HiddenProjects() {
	return (
		<BaseCard title="You found it" mainCard className="m-5">
			<p className="regular-text intro mt-3">
				A few things that never made it onto the projects page.
			</p>

			<ul className="hidden-projects-container mt-3 mt-md-4">
				{hiddenProjects.map((project) => (
					<HiddenProjectCard key={project.name} project={project} />
				))}
			</ul>
		</BaseCard>
	);
}
