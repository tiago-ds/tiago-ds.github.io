import { useEffect, useState } from "react";
import BaseCard from "../../shared/BaseCard";
import { createSpotifyTrackURL } from "../../../utils/utils";

type NowPlayingData = {
	albumCoverURL: string;
	albumName: string;
	artistName: string;
	id: string;
	trackName: string;
};

type NowPlayingState =
	| { status: "loading" }
	| { status: "ready"; track: NowPlayingData }
	| { status: "error" };

// Dev goes through the Vite proxy: the service only allows the prod origin.
const NowPlayingAPIURL = import.meta.env.DEV
	? "/api/track-details/tiagodscs"
	: "https://spotify-current-scrobbling.onrender.com/track-details/tiagodscs";

export default function NowPlaying() {
	const [state, setState] = useState<NowPlayingState>({ status: "loading" });

	useEffect(() => {
		let cancelled = false;

		const getNowPlaying = async () => {
			try {
				const response = await fetch(NowPlayingAPIURL);

				if (!response.ok) {
					throw new Error(`Request failed: ${response.status}`);
				}

				const track: NowPlayingData = await response.json();

				if (!cancelled) {
					setState({ status: "ready", track });
				}
			} catch (error) {
				console.error("Unable to fetch the current track: ", error);

				if (!cancelled) {
					setState({ status: "error" });
				}
			}
		};

		getNowPlaying();

		return () => {
			cancelled = true;
		};
	}, []);

	return (
		<BaseCard
			className="flex flex-col"
			title={"I'm currently listening to.."}
		>
			{state.status === "loading" && (
				<div className="self-center" role="status">
					{"Waking up my track service.."}
				</div>
			)}

			{state.status === "error" && (
				<div className="self-center" role="status">
					{"Unable to connect to my track service! :("}
				</div>
			)}

			{state.status === "ready" && (
				<div className="flex-col">
					<img
						alt={`${state.track.albumName} cover art, by ${state.track.artistName}`}
						className="mt-4 w-full rounded-full"
						src={state.track.albumCoverURL}
					/>
					<a
						href={createSpotifyTrackURL(state.track.id)}
						target="_blank"
						rel="noopener noreferrer"
						className="text-title no-underline"
					>
						<div className="mt-12 flex flex-col items-center justify-center">
							<h3 className="text-[min(2rem,calc(1.325rem+0.9vw))]">{state.track.trackName}</h3>
							<h4 className="text-[min(1.75rem,calc(1.3rem+0.6vw))]">{state.track.artistName}</h4>
							<i className="bi bi-play-circle mt-2 block text-[2.5rem] leading-none" />
						</div>
					</a>
				</div>
			)}
		</BaseCard>
	);
}
