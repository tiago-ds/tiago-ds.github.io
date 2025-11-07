import fluteIcon from "../assets/instrument-icons/flute.png";
import melodicaIcon from "../assets/instrument-icons/melodica.png";
import ukuleleIcon from "../assets/instrument-icons/ukulele.png";

export type InstrumentDisplayData = {
	image: string;
	name: string;
};

export const instrumentsData: InstrumentDisplayData[] = [
	{
		image: fluteIcon,
		name: "Flute",
	},
	{
		image: melodicaIcon,
		name: "Melodica",
	},
	{
		image: ukuleleIcon,
		name: "Ukulele",
	},
];
