export type HiddenProject = {
	description: string;
	/* A bootstrap-icons class name. */
	icon: string;
	/* Omitted for a private repo, so no dead link is rendered. */
	github?: string;
	/* Omitted until it is hosted somewhere playable. */
	url?: string;
	name: string;
	year: string;
};

export const hiddenProjects: Array<HiddenProject> = [
	{
		description:
			"A p5.js board for the Wavelength party game: a dial with weighted scoring arcs and a needle you spin toward a hidden target, drawn from ratios so it scales to any screen.",
		icon: "bi-broadcast",
		name: "Wavelength",
		url: "https://tiago-ds.github.io/web-wavelength/",
		year: "2025",
	},
	{
		description:
			"Coursework for Computer Graphics at UFPE — a set of small JavaScript programs working through rasterisation, transforms and colour.",
		github: "https://github.com/tiago-ds/Projetos-PG",
		icon: "bi-triangle",
		name: "Projetos PG",
		url: "https://tiago-ds.github.io/Projetos-PG/",
		year: "2024",
	},
	{
		description:
			"Particle systems, fireworks and steering behaviours built while following the Coding Train, with my own ideas mixed in.",
		github: "https://github.com/tiago-ds/P5Js-Experiments",
		icon: "bi-stars",
		name: "p5.js Experiments",
		url: "https://tiago-ds.github.io/P5Js-Experiments/",
		year: "2022",
	},
];
