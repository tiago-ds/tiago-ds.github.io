import { Route, Routes } from "react-router-dom";
import Contact from "./components/Contact/Contact";
import Home from "./components/Home/Home";
import Projects from "./components/Projects/Projects";
import { MoreAboutMe } from "./components/Home/MoreAboutMe/MoreAboutMe";

const AppRoutes: React.FC = () => {
	return (
		<Routes>
			<Route path="/" element={<Home />} />

			<Route path="/contact" element={<Contact />} />
			<Route path="/projects" element={<Projects />} />
			<Route path="/grid-collage" element={<MoreAboutMe />} />
			{/* Catch-all route for 404 Not Found */}
			{/* <Route path="*" element={<NotFound />} /> */}
		</Routes>
	);
};

export default AppRoutes;
