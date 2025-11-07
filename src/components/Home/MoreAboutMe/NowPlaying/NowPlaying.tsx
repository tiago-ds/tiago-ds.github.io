import axios from "axios";
import { useEffect, useState } from "react";
// import useFetch from "../../../hooks/useFetch";
import "./nowPlaying.css";
import BaseCard from "../../../shared/BaseCard";
import { createSpotifyTrackURL } from "../../../../utils/utils";

type NowPlayingData = {
	albumCoverURL: string;
	albumName: string;
	artistName: string;
	id: string;
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
					"https://i.scdn.co/image/ab67616d0000b2731bd6d088d3d81972af4cb81d",
				albumName: "Apricot Princess",
				artistName: "Rex Orange County",
				id: "4fg2EzaeNhR2PWNGXbX18n",
				trackName: "4 Seasons",
				trackURL: "spotify:track:4fg2EzaeNhR2PWNGXbX18n",
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
		<BaseCard
			className="d-flex flex-column"
			title={"I'm currently listening to.."}
		>
			{trackData ? (
				<div className="flex-column">
					<img
						alt={`${trackData?.albumName} cover art, by ${trackData?.artistName}`}
						className="rounded-circle w-100 mt-3"
						src={trackData?.albumCoverURL}
					/>
					<a
						href={createSpotifyTrackURL(trackData?.id)}
						target="_blank"
						rel="noopener noreferrer"
						className="text-decoration-none music-link"
					>
						<div className="d-flex flex-column justify-content-center align-items-center mt-5">
							<h2 className="">{trackData?.trackName}</h2>
							<h3>{trackData?.artistName}</h3>
							<h1>
								<i className="bi bi-play-circle"></i>
							</h1>
						</div>
					</a>
				</div>
			) : (
				<div className="align-self-center">
					{"Unable to connect to my track service! :("}
				</div>
			)}
		</BaseCard>
	);
}
