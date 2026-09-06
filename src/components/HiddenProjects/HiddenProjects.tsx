import BaseCard from "../shared/BaseCard";
import { hiddenProjects, type HiddenProject } from "../../data/hiddenProjects";

interface IHiddenProjectCard {
	project: HiddenProject;
}

const HiddenProjectCard: React.FC<IHiddenProjectCard> = ({ project }) => {
	return (
		<li className="text-title flex flex-row gap-4">
			<i
				className={`bi ${project.icon} shrink-0 text-[2rem] leading-none md:text-[2.5rem]`}
				aria-hidden="true"
			/>

			<div className="flex min-w-0 flex-col">
				<h3 className="font-title mt-0 mb-1 text-base font-bold uppercase md:text-2xl">
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
					<span className="text-xs font-normal md:text-base">{`(${project.year})`}</span>
					{!project.url && (
						<span className="bg-title ml-2 rounded-full px-2 py-[2px] align-middle text-[0.6rem] font-semibold text-white uppercase">not hosted yet</span>
					)}
					{project.github && (
						<a
							className="text-title ml-2 inline-flex min-h-[44px] min-w-[44px] items-center justify-center align-middle"
							href={project.github}
							target="_blank"
							rel="noopener noreferrer"
							aria-label={`${project.name} on GitHub`}
						>
							<i className="bi bi-github" />
						</a>
					)}
				</h3>

				<p className="text-regular font-body m-0 text-xs md:text-base">{project.description}</p>
			</div>
		</li>
	);
};

export default function HiddenProjects() {
	return (
		<BaseCard title="You found it!" mainCard className="m-4 md:m-12">
			<p className="text-regular font-body intro mt-4 text-justify text-xs md:text-base">
				A few projects that I like, but won&apos;t go to the projects
				page.
			</p>

			<ul className="mt-4 flex list-none flex-col gap-5 p-0 text-left md:mt-6 md:gap-7">
				{hiddenProjects.map((project) => (
					<HiddenProjectCard key={project.name} project={project} />
				))}
			</ul>
		</BaseCard>
	);
}
