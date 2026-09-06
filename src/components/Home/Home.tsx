import { useNavigate } from "react-router-dom";

import myPicture from "../../assets/me.jpg";
import useTapSequence from "../../hooks/useTapSequence";
import { SECRET_PATH, SECRET_TAPS } from "../../secret";

export default function Home() {
	const navigate = useNavigate();

	// The way in on a phone, where the Konami code cannot be typed.
	const handleTap = useTapSequence(SECRET_TAPS, () => navigate(SECRET_PATH));

	return (
		<div className="bg-card m-4 flex max-w-[var(--container-content)] flex-col-reverse items-center gap-12 justify-self-center rounded-[2rem] p-5 md:m-12 md:p-12 lg:flex-row">
			<div className="m-1 flex flex-col">
				<h1 className="font-title text-title flex flex-col text-left text-base font-bold uppercase md:text-[2.5rem]">
					<span>Hello! I am Tiago,</span>
					<span>Fullstack Developer</span>
				</h1>

				<p className="font-body text-regular text-justify text-xs font-normal md:text-2xl">
					I have a passion for creating and developing web
					applications. I am currently engaged in a bachelor&apos;s for
					Computer Science and I like to learn new technologies. Also,
					I like purple a lot.
				</p>
			</div>
			<img
				className="w-[150px] rounded-full md:w-[270px] xl:w-[350px]"
				onClick={handleTap}
				alt="Tiago's Picture. He has a purple fringe, and is using a black jacket.
          He has a small smile, and the background of the picture has golden lights"
				src={myPicture}
			/>
		</div>
	);
}
