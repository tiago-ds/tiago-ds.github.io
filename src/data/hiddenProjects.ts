export type HiddenSection = "games" | "experiments";

export const hiddenSections: Array<{ id: HiddenSection; title: string }> = [
	{ id: "games", title: "Games" },
	{ id: "experiments", title: "Experiments" },
];

export type HiddenProject = {
	description: string;
	/* A bootstrap-icons class name. */
	icon: string;
	/* Omitted for a private repo, so no dead link is rendered. */
	github?: string;
	/* Omitted until it is hosted somewhere playable. */
	url?: string;
	name: string;
	section: HiddenSection;
	year: string;
};

export const hiddenProjects: Array<HiddenProject> = [
	{
		description:
			"Hear a chord and name it in six guesses, with each note marked by how close it is. A new chord every day, the same for everybody. Part of my arcade of small games built with AI.",
		icon: "bi-music-note-beamed",
		name: "Daily Chord",
		section: "games",
		url: "https://tiago-ds.github.io/arcade/games/daily-chord/",
		year: "2026",
	},
	{
		description:
			"Hold a button for exactly the target time, with no timer on screen. One try a day, and the share shows how far off you were. Also in the arcade.",
		icon: "bi-stopwatch",
		name: "Internal Clock",
		section: "games",
		url: "https://tiago-ds.github.io/arcade/games/internal-clock/",
		year: "2026",
	},
	{
		description:
			"A p5.js board for the Wavelength party game: a dial with weighted scoring arcs and a needle you spin toward a hidden target, drawn from ratios so it scales to any screen.",
		icon: "bi-broadcast",
		name: "Wavelength",
		section: "games",
		url: "https://tiago-ds.github.io/arcade/games/wavelength/",
		year: "2025",
	},
	{
		description:
			"Five \"Who's that Pokémon?\" silhouettes a day, the same for everyone, with hints that open as you miss and a spoiler-free result to share.",
		github: "https://github.com/tiago-ds/poke-quiz-ui",
		icon: "bi-question-circle",
		name: "Poke Quiz",
		section: "games",
		url: "https://tiago-ds.github.io/poke-quiz-ui/",
		year: "2025",
	},
	{
		description:
			"Tic-tac-toe where each player can only have three pieces on the board: placing a fourth removes your oldest. Made before I started building with AI.",
		github: "https://github.com/tiago-ds/tic-tac-toe",
		icon: "bi-grid-3x3",
		name: "Tic-tac-toe",
		section: "games",
		url: "https://tiago-ds.github.io/tic-tac-toe/",
		year: "2024",
	},
	{
		description:
			"Coursework for Computer Graphics at UFPE — a set of small JavaScript programs working through rasterisation, transforms and colour.",
		github: "https://github.com/tiago-ds/Projetos-PG",
		icon: "bi-triangle",
		name: "Projetos PG",
		section: "experiments",
		url: "https://tiago-ds.github.io/Projetos-PG/",
		year: "2024",
	},
	{
		description:
			"Particle systems, fireworks and steering behaviours built while following the Coding Train, with my own ideas mixed in.",
		github: "https://github.com/tiago-ds/P5Js-Experiments",
		icon: "bi-stars",
		name: "p5.js Experiments",
		section: "experiments",
		url: "https://tiago-ds.github.io/P5Js-Experiments/",
		year: "2022",
	},
	{
		description:
			"A gallery for a computational creativity course, using song measurements to pair K-pop imagery with style-transfer experiments automatically, from the companion notebook.",
		github: "https://github.com/tiago-ds/kpopifier",
		icon: "bi-palette",
		name: "Kpopifier",
		section: "experiments",
		url: "https://tiago-ds.github.io/kpopifier-github-io/",
		year: "2022",
	},
];
