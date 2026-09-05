import myPicture from "../../assets/me.jpg";
import "./home.css";

export default function Home() {
	return (
		<div className="main-section d-flex flex-column-reverse flex-lg-row align-items-center m-5 gap-5 rounded-5 p-5">
			<div className="text-section d-flex flex-column m-1">
				<h1 className="title-text d-flex flex-column">
					<span>Hello! I am Tiago,</span>
					<span>Fullstack Developer</span>
				</h1>

				<p className="regular-text">
					I have a passion for creating and developing web
					applications. I am currently engaged in a bachelor&apos;s for
					Computer Science and I like to learn new technologies. Also,
					I like purple a lot.
				</p>
			</div>
			<img
				className="profile-image"
				alt="Tiago's Picture. He has a purple fringe, and is using a black jacket.
          He has a small smile, and the background of the picture has golden lights"
				src={myPicture}
			/>
		</div>
	);
}
