import BaseCard from "../shared/BaseCard";
import { projects, type Project } from "../../data/projects";

import "./projects.css";

interface IProjectCard {
	project: Project;
}

const ProjectCard: React.FC<IProjectCard> = ({ project }) => {
	return (
		<div className="project-card d-flex flex-column flex-md-row">
			<a href={project.url} target="_blank">
				<img src={project.icon} alt={`${project.name} icon`} />
			</a>
			<div className="text-content d-flex flex-column">
				<div className="header d-flex flex-row">
					<a href={project.url} target="_blank">
						<h3 className="title mt-2 mt-md-0">
							{project.name}{" "}
							<span className="year text">{`(${project.year})`}</span>{" "}
							<small>
								<a
									href={project.github}
									target="_blank"
									rel="noopener noreferrer"
								>
									<i className="bi bi-github" />
								</a>
							</small>
						</h3>
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
