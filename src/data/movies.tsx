import AboutTime from "../images/about-time.jpg";
import LaLaLand from "../images/la-la-land.jpg";

export type Movie = {
	alt: string;
	cover: string;
	name: string;
	description: string;
	url: string;
	year: string;
};

export const movies: Movie[] = [
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
