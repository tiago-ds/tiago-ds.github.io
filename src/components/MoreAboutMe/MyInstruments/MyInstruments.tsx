import BaseCard from "../../shared/BaseCard";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import {
	type InstrumentDisplayData,
	instrumentsData,
} from "../../../data/instruments";

import "./myInstruments.css";

export const MyInstruments = () => {
	return (
		<BaseCard title="I play these instruments">
			<InstrumentsCarousel />
		</BaseCard>
	);
};

interface IInstrumentDisplayProps {
	instrument: InstrumentDisplayData;
}

const InstrumentDisplay: React.FC<IInstrumentDisplayProps> = ({
	instrument,
}) => {
	return (
		<div className="flex flex-col items-center justify-center">
			<img
				src={instrument.image}
				alt={instrument.name}
				className="instrument-icon h-auto max-w-full"
			/>
			<p className="font-title mt-4 font-bold uppercase">
				{instrument.name}
			</p>
		</div>
	);
};

function InstrumentsCarousel() {
	const settings = {
		dots: true,
		infinite: true,
		speed: 500,
		slidesToShow: 2,
		slidesToScroll: 1,
		autoplay: true,
		swipe: true,
		autoplaySpeed: 5000,
	};

	return (
		<div className="mt-6">
			<Slider {...settings}>
				{instrumentsData.map((instrument) => (
					<InstrumentDisplay
						key={instrument.name}
						instrument={instrument}
					/>
				))}
			</Slider>
		</div>
	);
}
