import BaseCard from "../../../shared/BaseCard";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import {
	type InstrumentDisplayData,
	instrumentsData,
} from "../../../../data/instruments";

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
		<div className="d-flex flex-column justify-content-center align-items-center">
			<img
				src={instrument.image}
				alt={instrument.name}
				className=" instrument-icon"
			/>
			<p className="mt-3 title text-uppercase fw-bold">
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
		slidesToScroll: 2,
		autoplay: true,
		swipe: true,
		autoplaySpeed: 5000,
	};

	return (
		<div className="mt-4">
			<Slider {...settings}>
				{instrumentsData.map((instrument, index) => (
					<InstrumentDisplay key={index} instrument={instrument} />
				))}
			</Slider>
		</div>
	);
}

export default InstrumentsCarousel;
