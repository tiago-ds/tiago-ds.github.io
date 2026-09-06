import BaseCard from "../../shared/BaseCard";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import { type Pet, petsData } from "../../../data/pets";

interface IPetDisplayProps {
	pet: Pet;
}

const PetDisplay: React.FC<IPetDisplayProps> = ({ pet }) => {
	return (
		<div className="flex flex-col items-center">
			<img
				src={pet.image}
				alt={pet.name}
				className="border-title h-[125px] w-[125px] rounded-full border-[3px] object-cover"
			/>
			<p className="font-title mt-4 font-bold uppercase">{pet.name}</p>
		</div>
	);
};

function PetsCarousel() {
	const settings = {
		dots: true,
		infinite: true,
		speed: 500,
		slidesToShow: 1,
		autoplay: true,
		swipe: true,
		autoplaySpeed: 5000,
	};

	return (
		<Slider {...settings}>
			{petsData.map((pet) => (
				<PetDisplay key={pet.name} pet={pet} />
			))}
		</Slider>
	);
}

export const MyPets = () => {
	return (
		<BaseCard title="I have three pets">
			<PetsCarousel />
		</BaseCard>
	);
};
