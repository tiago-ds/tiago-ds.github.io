import GithubIoIcon from "../../images/github-io-icon.png";
import MarquinhosIcon from "../../images/marquinhos-icon.png";
import MasterBallIcon from "../../images/master-ball-icon.png";
import MiniWazeIcon from "../../images/mini-waze-icon.svg";
import PokequizIcon from "../../images/poke-quiz-icon.png";
import TicTacToeIcon from "../../images/tic-tac-toe-icon.png";
import ProjectCard from "./ProjectCard";

interface Project {
	description: string;
	icon: string;
	github: string;
	name: string;
	url: string;
	year: string;
}
const Projects = () => {
	const projects: Array<Project> = [
		{
			description:
				'A Discord bot in JavaScript that manages messages, links, and permissions, contextualizes server entries/exits, gives recommendations, and interacts with daily events, adding "love" to the server.',
			icon: MarquinhosIcon,
			github: "https://github.com/Devaneios/MarquinhosBOT",
			name: "Marquinhos Bot",
			url: "https://github.com/Devaneios/MarquinhosBOT",
			year: "2020",
		},
		{
			description:
				"The Github repository for this website.  It is built with React and TypeScript, showcasing my portfolio and projects.",
			icon: GithubIoIcon,
			github: "https://github.com/tiago-ds/tiago-ds.github.io",
			name: "tiago-ds.github.io",
			url: "https://tiago-ds.github.io",
			year: "2025",
		},
		{
			description:
				"A React training project allowing users to search, view details (description, types), and favorite Pokémon using The Poké API. It also lets them visualize their favorited Pokémon.",
			icon: MasterBallIcon,
			github: "https://github.com/tiago-ds/pokemon-favoriter",
			name: "Pokemon Favoriter",
			url: "https://pokemon-favoriter.vercel.app",
			year: "2024",
		},
		{
			description:
				"A unique take on the classic game where players are limited to 3 pieces on the board simultaneously. When a player places a fourth piece, their oldest piece is automatically removed, adding a strategic layer to the gameplay.",
			icon: TicTacToeIcon,
			github: "https://github.com/tiago-ds/tic-tac-toe",
			name: "My custom tic-tac-toe",
			url: "https://github.com/tiago-ds/tic-tac-toe",
			year: "2024",
		},
		{
			description:
				"A simple web application that implements A* algorithm in a graph visualization. It allows users to visualize the pathfinding result, making it a good tool for understanding the algorithm.",
			icon: MiniWazeIcon,
			github: "https://github.com/tiago-ds/mini-waze",
			name: "Mini Waze",
			url: "https://tiago-ds.github.io/mini-waze/",
			year: "2025",
		},
		{
			description:
				"A React-based web application that quizzes users on Pokémon trivia, testing their knowledge of the Pokémon universe in a fun and interactive way.",
			icon: PokequizIcon,
			github: "https://github.com/tiago-ds/poke-quiz-ui",
			name: "Poke Quiz",
			url: "https://tiago-ds.github.io/poke-quiz-ui/",
			year: "2025",
		},
	];

	return (
		<div className="d-flex flex-column align-items-center main-section m-5">
			<h2 className="align-self-md-start title-text">Projects</h2>
			<div className="projects-container flex-column flex-md-row mt-3 mt-md-5">
				{projects.map((project) => (
					<ProjectCard
						key={project.name}
						description={project.description}
						icon={project.icon}
						name={project.name}
						url={project.url}
						year={project.year}
						github={project.github}
					/>
				))}
			</div>
		</div>
	);
};

export default Projects;
