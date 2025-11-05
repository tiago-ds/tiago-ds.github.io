import AboutTime from "../../../../images/about-time.jpg";
import LaLaLand from "../../../../images/la-la-land.jpg";

import "./myMovies.css";

type Movie = {
	alt: string;
	cover: string;
	name: string;
	description: string;
	url: string;
	year: string;
};

interface IMovieContentProps {
	movie: Movie;
}

const MovieContent: React.FC<IMovieContentProps> = ({ movie }) => {
	return (
		<div className="movie d-flex flex-row gap-3">
			<img
				className="rounded-5"
				src={movie.cover}
				id={movie.name}
				alt={movie.alt}
			/>
			<div className="d-flex flex-column">
				<p className="text-uppercase fw-bold text-start">
					<a
						className="text-decoration-none"
						href={movie.url}
						target="_blank"
						rel="noopener noreferrer"
					>
						{movie.name} ({movie.year})
					</a>
				</p>
				<p className="movie-description">{movie.description}</p>
			</div>
		</div>
	);
};

const movies: Movie[] = [
	{
		alt: "About Time Movie Poster",
		cover: AboutTime,
		name: "About Time",
		description:
			"At the age of 21, Tim discovers he can travel in time and change what happens and has happened in his own life. His decision to make his world a better place by getting a girlfriend turns out not to be as easy as you might think.",
		url: "https://www.imdb.com/title/tt2194499/",
		year: "2013",
	},
	{
		alt: "La La Land Movie Poster",
		cover: LaLaLand,
		name: "La La Land",
		description:
			"When Sebastian, a pianist, and Mia, an actress, follow their passion and achieve success in their respective fields, they find themselves torn between their love for each other and their careers.",
		url: "https://www.imdb.com/title/tt3783958/",
		year: "2016",
	},
];

export default function MyMovies() {
	return (
		<div className="my-movies-component p-4 d-flex flex-column gap-4">
			<h6 className="text-uppercase fw-bold">My favorite movies are</h6>
			<div className="movies-container d-flex flex-column justify-content-between align-items-center gap-4">
				{movies.map((movie) => (
					<MovieContent key={movie.name} movie={movie} />
				))}
			</div>
		</div>
	);
}
