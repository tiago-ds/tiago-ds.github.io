import GithubIoIcon from "../../images/github-io-icon.png";
import MarquinhosIcon from "../../images/marquinhos-icon.png";
import MasterBallIcon from "../../images/master-ball-icon.png";
import TicTacToeIcon from "../../images/tic-tac-toe-icon.png";
import ProjectCard from "./ProjectCard";

interface Project {
  description: string;
  icon: string;
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
      name: "Marquinhos Bot",
      url: "https://github.com/Devaneios/MarquinhosBOT",
      year: "2020",
    },
    {
      description:
        "The Github repository for this website.  It is built with React and TypeScript, showcasing my portfolio and projects.",
      icon: GithubIoIcon,
      name: "tiago-ds.github.io",
      url: "https://tiago-ds.github.io",
      year: "2025",
    },
    {
      description:
        "A React training project allowing users to search, view details (description, types), and favorite Pokémon using The Poké API. It also lets them visualize their favorited Pokémon.",
      icon: MasterBallIcon,
      name: "Pokemon Favoriter",
      url: "https://github.com/tiago-ds/pokemon-favoriter",
      year: "2024",
    },
    {
      description:
        "A unique take on the classic game where players are limited to 3 pieces on the board simultaneously. When a player places a fourth piece, their oldest piece is automatically removed, adding a strategic layer to the gameplay.",
      icon: TicTacToeIcon,
      name: "My custom tic-tac-toe",
      url: "https://github.com/tiago-ds/tic-tac-toe",
      year: "2024",
    },
  ];

  return (
    <div className="d-flex flex-column align-items-center main-section m-5">
      <h2 className="align-self-start title-text">Projects</h2>
      <div className="projects-container mt-5">
        {projects.map((project) => (
          <ProjectCard
            key={project.name}
            description={project.description}
            icon={project.icon}
            name={project.name}
            url={project.url}
            year={project.year}
          />
        ))}
      </div>
    </div>
  );
};

export default Projects;
