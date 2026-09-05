import BaseCard from "../shared/BaseCard";
import { projects, type Project } from "../../data/projects";

import "./projects.css";

interface IProjectCard {
	project: Project;
}

const ProjectCard: React.FC<IProjectCard> = ({ project }) => {
	return (
		<div className="project-card d-flex flex-column flex-md-row">
			<a href={project.url} target="_blank" rel="noopener noreferrer">
				<img src={project.icon} alt={`${project.name} icon`} />
			</a>
			<div className="text-content d-flex flex-column">
				{/*
				 * The GitHub link is a sibling of the title link, never a
				 * child: nesting one <a> inside another is invalid HTML and
				 * the parser silently un-nests it.
				 */}
				<div className="header d-flex flex-row align-items-baseline gap-2">
					<h3 className="title mt-2 mt-md-0">
						<a
							href={project.url}
							target="_blank"
							rel="noopener noreferrer"
						>
							{project.name}{" "}
							<span className="year text">{`(${project.year})`}</span>
						</a>
					</h3>
					<a
						href={project.github}
						target="_blank"
						rel="noopener noreferrer"
						aria-label={`${project.name} on GitHub`}
					>
						<i className="bi bi-github" />
					</a>
				</div>
				<p className="description">{project.description}</p>
			</div>
		</div>
	);
};

const Projects = () => {
	return (
		<BaseCard title="Projects" mainCard className="m-5">
			<div className="projects-container flex-column flex-md-row mt-3 mt-md-5">
				{projects.map((project) => (
					<ProjectCard key={project.name} project={project} />
				))}
			</div>
		</BaseCard>
	);
};

export default Projects;
