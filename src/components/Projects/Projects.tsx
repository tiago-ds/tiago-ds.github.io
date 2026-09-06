import BaseCard from "../shared/BaseCard";
import { projects, type Project } from "../../data/projects";

import "./projects.css";

interface IProjectCard {
	project: Project;
}

const ProjectCard: React.FC<IProjectCard> = ({ project }) => {
	return (
		<div className="project-card flex flex-col md:flex-row">
			<a
				className="shrink-0"
				href={project.url}
				target="_blank"
				rel="noopener noreferrer"
			>
				<img src={project.icon} alt={`${project.name} icon`} />
			</a>
			<div className="text-content flex min-w-0 flex-col text-left md:ml-5">
				{/* Sibling, not nested: an <a> inside an <a> is invalid HTML. */}
				<div className="header flex flex-row items-baseline gap-2">
					<h3 className="font-title mt-2 text-base font-bold uppercase md:mt-0">
						<a
							href={project.url}
							target="_blank"
							rel="noopener noreferrer"
						>
							{project.name}{" "}
							<span className="text-xs font-bold">{`(${project.year})`}</span>
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
				<p className="mt-0 text-left text-xs">{project.description}</p>
			</div>
		</div>
	);
};

const Projects = () => {
	return (
		<BaseCard title="Projects" mainCard className="m-4 md:m-12">
			<div className="projects-container mt-4 md:mt-12">
				{projects.map((project) => (
					<ProjectCard key={project.name} project={project} />
				))}
			</div>
		</BaseCard>
	);
};

export default Projects;
