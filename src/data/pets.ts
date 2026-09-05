import PierrePicture from "../assets/pets/pierre.jpg";
import LuzPicture from "../assets/pets/luz.jpg";
import MadalenaPicture from "../assets/pets/madalena.jpg";

export type Pet = {
	name: string;
	image: string;
};

export const petsData: Pet[] = [
	{
		name: "Pierre",
		image: PierrePicture,
	},
	{
		name: "Madalena",
		image: MadalenaPicture,
	},
	{
		name: "Luz",
		image: LuzPicture,
	},
];
