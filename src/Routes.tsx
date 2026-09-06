import { Route, Routes } from "react-router-dom";
import { SECRET_PATH } from "./secret";
import Contact from "./components/Contact/Contact";
import HiddenProjects from "./components/HiddenProjects/HiddenProjects";
import Home from "./components/Home/Home";
import Projects from "./components/Projects/Projects";
import { MoreAboutMe } from "./components/MoreAboutMe/MoreAboutMe";

const AppRoutes: React.FC = () => {
	return (
		<Routes>
			<Route path="/" element={<Home />} />

			<Route path="/contact" element={<Contact />} />
			<Route path="/projects" element={<Projects />} />
			<Route path="/about-me" element={<MoreAboutMe />} />

			{/* Not in the nav: reached with the Konami code. */}
			<Route path={SECRET_PATH} element={<HiddenProjects />} />
			{/* Catch-all route for 404 Not Found */}
			{/* <Route path="*" element={<NotFound />} /> */}
		</Routes>
	);
};

export default AppRoutes;
