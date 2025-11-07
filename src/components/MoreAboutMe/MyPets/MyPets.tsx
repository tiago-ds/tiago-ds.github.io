import BaseCard from "../../shared/BaseCard";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./myPets.css";

import { type Pet, petsData } from "../../../data/pets";

interface IPetDisplayProps {
	pet: Pet;
}

const PetDisplay: React.FC<IPetDisplayProps> = ({ pet }) => {
	return (
		<div className="d-flex flex-column align-items-center ">
			<img
				src={pet.image}
				alt={pet.name}
				className="rounded-circle pet-image"
			/>
			<p className="mt-3 title text-uppercase fw-bold">{pet.name}</p>
		</div>
	);
};

function PetsCarousel() {
	const settings = {
		dots: true,
		infinite: true,
		speed: 500,
		itemsToShow: 1,
		autoplay: true,
		swipe: true,
		autoplaySpeed: 5000,
	};

	return (
		<Slider {...settings}>
			{petsData.map((pet, index) => (
				<PetDisplay key={index} pet={pet} />
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
