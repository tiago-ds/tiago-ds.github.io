import { useEffect, useState } from "react";
import "./nowPlaying.css";
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

// In dev this goes through the Vite proxy (see vite.config.ts) because the
// track service only allows the production origin; in a build it is called
// directly.
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
			className="d-flex flex-column"
			title={"I'm currently listening to.."}
		>
			{state.status === "loading" && (
				<div className="align-self-center" role="status">
					{"Waking up my track service.."}
				</div>
			)}

			{state.status === "error" && (
				<div className="align-self-center" role="status">
					{"Unable to connect to my track service! :("}
				</div>
			)}

			{state.status === "ready" && (
				<div className="flex-column">
					<img
						alt={`${state.track.albumName} cover art, by ${state.track.artistName}`}
						className="rounded-circle w-100 mt-3"
						src={state.track.albumCoverURL}
					/>
					<a
						href={createSpotifyTrackURL(state.track.id)}
						target="_blank"
						rel="noopener noreferrer"
						className="text-decoration-none music-link"
					>
						<div className="d-flex flex-column justify-content-center align-items-center mt-5">
							<h3 className="fs-2">{state.track.trackName}</h3>
							<h4 className="fs-3">{state.track.artistName}</h4>
							<i className="bi bi-play-circle play-icon" />
						</div>
					</a>
				</div>
			)}
		</BaseCard>
	);
}
