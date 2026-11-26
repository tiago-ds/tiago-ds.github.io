import snapshot from "./arcadeGames.json";

// The games come from the arcade itself, which publishes its list as
// games.json (see shared/games.ts in tiago-ds/arcade), so a new game shows up
// here without touching this repo. The copy next to this file is what shows
// first, and stays if the fetch fails.

export type ArcadeGame = {
	id: string;
	name: string;
	url: string;
	group: "arcade" | "older";
	icon: string;
	description: { en: string; pt: string };
	github?: string;
};

export const ARCADE_URL = "https://tiago-ds.github.io/arcade/";

// In dev, the arcade's own dev server, when it is running.
const LIST_URL = import.meta.env.DEV ? "http://localhost:5180/games.json" : `${ARCADE_URL}games.json`;

export const arcadeSnapshot = snapshot as ArcadeGame[];

const isGame = (value: unknown): value is ArcadeGame => {
	const game = value as ArcadeGame;
	return (
		typeof game?.id === "string" &&
		typeof game.name === "string" &&
		typeof game.url === "string" &&
		typeof game.icon === "string" &&
		(game.group === "arcade" || game.group === "older") &&
		typeof game.description?.en === "string"
	);
};

export const fetchArcadeGames = async (signal: AbortSignal): Promise<ArcadeGame[] | null> => {
	try {
		const response = await fetch(LIST_URL, { signal });
		if (!response.ok) return null;
		const list: unknown = await response.json();
		return Array.isArray(list) && list.length > 0 && list.every(isGame) ? list : null;
	} catch {
		return null;
	}
};
