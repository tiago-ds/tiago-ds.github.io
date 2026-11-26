import { useEffect, useState } from "react";
import {
	ARCADE_URL,
	arcadeSnapshot,
	fetchArcadeGames,
	type ArcadeGame,
} from "../../data/arcade";

// The arcade's look: its icon, an uppercase title and a short line, on a
// rounded card.
const GameCard: React.FC<{ game: ArcadeGame }> = ({ game }) => (
	<li>
		<a
			className="bg-card flex h-full items-center gap-4 rounded-[24px] p-[14px] no-underline hover:outline-2 hover:outline-title"
			href={game.url}
			target="_blank"
			rel="noopener noreferrer"
		>
			<img
				className="size-14 shrink-0 md:size-[72px]"
				src={game.icon}
				alt=""
				width={72}
				height={72}
			/>
			<span className="min-w-0">
				<strong className="font-title text-title block text-base font-semibold tracking-[0.04em] uppercase md:text-[19px]">
					{game.name}
				</strong>
				<span className="font-body text-regular block text-xs md:text-base">
					{game.description.en}
				</span>
			</span>
		</a>
	</li>
);

const GameList: React.FC<{ games: ArcadeGame[] }> = ({ games }) => (
	<ul className="m-0 grid list-none gap-3 p-0 text-left md:grid-cols-2">
		{games.map((game) => (
			<GameCard key={game.id} game={game} />
		))}
	</ul>
);

export default function ArcadeGames() {
	const [games, setGames] = useState(arcadeSnapshot);

	useEffect(() => {
		const controller = new AbortController();
		fetchArcadeGames(controller.signal).then((list) => list && setGames(list));
		return () => controller.abort();
	}, []);

	const arcade = games.filter((game) => game.group === "arcade");
	const older = games.filter((game) => game.group === "older");

	return (
		<>
			<a
				className="bg-title mt-4 flex flex-col gap-4 rounded-[24px] p-5 text-left text-[#f6eefb] no-underline hover:outline-2 hover:outline-offset-2 hover:outline-title md:mt-6 md:flex-row md:items-center md:justify-between md:p-6"
				href={ARCADE_URL}
				target="_blank"
				rel="noopener noreferrer"
			>
				<span>
					<strong className="font-title block text-xl font-semibold tracking-[0.04em] uppercase md:text-2xl">
						The arcade <span aria-hidden="true">→</span>
					</strong>
					<span className="font-body block text-xs md:text-base">
						Small games, quick to play and share, in English and Portuguese.
					</span>
				</span>
				<span className="flex shrink-0 gap-2" aria-hidden="true">
					{arcade.map((game) => (
						<img
							key={game.id}
							className="size-8 rounded-[8px] outline-1 outline-[#f6eefb]/40 md:size-10 md:rounded-[10px]"
							src={game.icon}
							alt=""
							width={40}
							height={40}
						/>
					))}
				</span>
			</a>

			<div className="mt-4">
				<GameList games={arcade} />
			</div>

			{older.length > 0 && (
				<>
					<h3 className="font-title text-title mt-6 mb-3 text-left text-base font-semibold tracking-[0.04em] uppercase md:text-xl">
						Older games
					</h3>
					<GameList games={older} />
				</>
			)}
		</>
	);
}
