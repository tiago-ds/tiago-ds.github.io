import { Route, Routes } from "react-router-dom";
import Contact from "./components/Contact/Contact";
import Home from "./components/Home/Home";
import Projects from "./components/Projects/Projects";

const AppRoutes: React.FC = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />

      <Route path="/contact" element={<Contact />} />
      <Route path="/projects" element={<Projects />} />
      {/* Catch-all route for 404 Not Found */}
      {/* <Route path="*" element={<NotFound />} /> */}
    </Routes>
  );
};

export default AppRoutes;

{
  /* <div className="d-flex flex-column align-items-center">
<nav className="nav-bar d-flex justify-content-center align-items-center gap-5">
  {NAV.map((item) => {
    return (
      <a href="" className="text-decoration-none">
        {item}
      </a>
    );
  })}
</nav>

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
    src={myPicture}
    alt="Tiago's Picture. He has a purple fringe, and is using a black jacket.
    He has a small smile, and the background of the picture has golden lights"
  />
</div>
</div> */
}
