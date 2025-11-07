import { MyInstruments } from "./MyInstruments/MyInstruments";
import MyMovies from "./MyMovies/MyMovies";
import { MyPets } from "./MyPets/MyPets";
import NowPlaying from "./NowPlaying/NowPlaying";
import "./moreAboutMe.css";

export function MoreAboutMe() {
	return (
		<div className="css-grid-collage-container m-5">
			<div className="grid-item now-playing-container">
				<NowPlaying />
			</div>

			<div className="grid-item my-instruments-container">
				<MyInstruments />
			</div>

			<div className="grid-item movies-container">
				<MyMovies />
			</div>

			<div className="grid-item pets-container">
				<MyPets />
			</div>
		</div>
	);
}
