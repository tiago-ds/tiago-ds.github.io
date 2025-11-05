import axios from "axios";
import { useEffect, useState } from "react";
// import useFetch from "../../../hooks/useFetch";
import "./nowPlaying.css";

type NowPlayingData = {
	albumCoverURL: string;
	albumName: string;
	artistName: string;
	trackName: string;
	trackURL: string;
};

const NowPlayingAPIURL = "http://localhost:3000/track-details/tiagodscs";

export default function NowPlaying() {
	const fetchNowPlaying = async () => {
		// const response = await axios.get(NowPlayingAPIURL);
		const response = {
			data: {
				albumCoverURL:
					"https://i.scdn.co/image/ab67616d0000b27391df3331ecc28d6d199255e9",
				albumName: "English Rain",
				artistName: "Gabrielle Aplin",
				trackName: "Home",
				trackURL:
					"https://api.spotify.com/v1/tracks/0OwoAzOM3ULaLoiYpC5axn",
			},
		};
		return response.data;
	};

	const [trackData, setTrackData] = useState<NowPlayingData | null>(null);

	// const { data, loading } = useFetch<NowPlayingData | null>(NowPlayingAPIURL);

	useEffect(() => {
		const getNowPlaying = async () => {
			const data = await fetchNowPlaying();
			setTrackData(data);
		};

		getNowPlaying();
	}, []);

	return (
		<div className="now-playing-component p-4">
			<div className="title-text">
				<h5>I'm currently listening to..</h5>
			</div>
			<div className="player d-flex flex-column">
				<img
					alt={`${trackData?.albumName} cover art, by ${trackData?.artistName}`}
					className="rounded-circle"
					src={trackData?.albumCoverURL}
				/>
				<a
					href={trackData?.trackURL}
					target="_blank"
					rel="noopener noreferrer"
				>
					<div className="d-flex flex-column justify-content-center align-items-center mt-5">
						<h2 className="">{trackData?.trackName}</h2>
						<h3>{trackData?.artistName}</h3>
						<h1>
							<i className="bi bi-play-circle	"></i>
						</h1>
					</div>
				</a>
			</div>
		</div>
	);
}
