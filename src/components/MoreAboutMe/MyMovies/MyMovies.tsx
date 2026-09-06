import BaseCard from "../../shared/BaseCard";
import { type Movie, movies } from "../../../data/movies";

import "./myMovies.css";

interface IMovieContentProps {
	movie: Movie;
}

const MovieContent: React.FC<IMovieContentProps> = ({ movie }) => {
	return (
		<div className="movie flex flex-row items-center gap-4 text-xs md:items-start">
			<img
				className="h-auto max-h-[150px] max-w-[40%] rounded-2xl md:h-[85%] md:max-h-none md:max-w-none md:object-contain"
				src={movie.cover}
				id={movie.name}
				alt={movie.alt}
			/>
			<div className="flex min-w-0 flex-col">
				<p className="text-left font-bold uppercase">
					<a
						className="text-title inline-block py-[5px] no-underline"
						href={movie.url}
						target="_blank"
						rel="noopener noreferrer"
					>
						{movie.name} ({movie.year})
					</a>
				</p>
				<p className="text-regular text-justify">{movie.description}</p>
			</div>
		</div>
	);
};

export default function MyMovies() {
	return (
		<BaseCard
			className="flex flex-col gap-6"
			title={"My favorite movies are"}
		>
			<div className="movies-container flex h-full flex-col items-center justify-between gap-6">
				{movies.map((movie) => (
					<MovieContent key={movie.name} movie={movie} />
				))}
			</div>
		</BaseCard>
	);
}
