import fluteIcon from "../assets/instrument-icons/flute.png";
import melodicaIcon from "../assets/instrument-icons/melodica.png";
import ukuleleIcon from "../assets/instrument-icons/ukulele.png";
import guitarIcon from "../assets/instrument-icons/guitar.png";
import keyboardIcon from "../assets/instrument-icons/keyboard.png";
import electrigGuitarIcon from "../assets/instrument-icons/electric-guitar.png";

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
  {
    image: guitarIcon,
    name: "Guitar",
  },
  {
    image: keyboardIcon,
    name: "Keyboard",
  },
  {
    image: electrigGuitarIcon,
    name: "Electric Guitar",
  },
];
