import GithubIoIcon from "../assets/project-icons/github-io-icon.png";
import MarquinhosIcon from "../assets/project-icons/marquinhos-icon.png";
import MasterBallIcon from "../assets/project-icons/master-ball-icon.png";
import MiniWazeIcon from "../assets/project-icons/mini-waze-icon.svg";
import PokequizIcon from "../assets/project-icons/poke-quiz-icon.png";
import TicTacToeIcon from "../assets/project-icons/tic-tac-toe-icon.png";

export type Project = {
	description: string;
	icon: string;
	github: string;
	name: string;
	url: string;
	year: string;
};

export const projects: Array<Project> = [
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
		url: "https://tiago-ds.github.io/tic-tac-toe/",
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
			"An Angular-based web application that quizzes users on Pokémon trivia, testing their knowledge of the Pokémon universe in a fun and interactive way.",
		icon: PokequizIcon,
		github: "https://github.com/tiago-ds/poke-quiz-ui",
		name: "Poke Quiz",
		url: "https://tiago-ds.github.io/poke-quiz-ui/",
		year: "2025",
	},
];
