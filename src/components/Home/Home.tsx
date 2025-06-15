import myPicture from "../../images/me.jpg";
import "./home.css";

export default function Home() {
  return (
    <div className="d-flex flex-column align-items-center">
      <div className="main-section d-flex flex-row align-items-center m-5 gap-5 justify-content-around">
        <div className="text-section d-flex flex-column w-60 m-1">
          <div className="title-text d-flex flex-column">
            <p>Hello! I am Tiago,</p>
            <p>Fullstack Developer</p>
          </div>

          <p className="regular-text">
            I am Tiago, a Fullstack Developer with a passion for creating and
            developing web applications. I am currently engaged in a bachelor's
            for Computer Science and I like to learn new technologies. Also, I
            like purple a lot.
          </p>
        </div>
        <img
          className="profile-image"
          alt="Tiago's Picture. He has a purple fringe, and is using a black jacket.
          He has a small smile, and the background of the picture has golden lights"
          src={myPicture}
        />
      </div>
    </div>
  );
}
