import BaseCard from "../../../shared/BaseCard";
import { type Movie, movies } from "../../../../data/movies";

import "./myMovies.css";

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

export default function MyMovies() {
	return (
		<BaseCard
			className="p-4 d-flex flex-column gap-4"
			title={"My favorite movies are"}
		>
			<div className="movies-container d-flex flex-column justify-content-between align-items-center gap-4">
				{movies.map((movie) => (
					<MovieContent key={movie.name} movie={movie} />
				))}
			</div>
		</BaseCard>
	);
}
