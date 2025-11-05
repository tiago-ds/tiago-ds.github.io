import MyMovies from "./MyMovies/MyMovies";
import NowPlaying from "./NowPlaying/NowPlaying";
import "./moreAboutMe.css";

export function MoreAboutMe() {
	return (
		<div className="css-grid-collage-container m-5">
			<div className="grid-item now-playing-container">
				<NowPlaying />
			</div>

			<div className="grid-item item-B"></div>

			<div className="grid-item movies-container">
				<MyMovies />
			</div>

			<div className="grid-item item-D"></div>

			<div className="grid-item item-E"></div>
		</div>
	);
}
