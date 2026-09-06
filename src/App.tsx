import "./App.css";
import { HashRouter } from "react-router-dom";
import AppRoutes from "./Routes";
import KonamiUnlock from "./components/KonamiUnlock";
import NavComponent from "./components/Nav/NavComponent";

function App() {
	return (
		<HashRouter>
			<KonamiUnlock />

			<header>
				<NavComponent />
			</header>
			<main className="flex justify-center">
				<AppRoutes />
			</main>
		</HashRouter>
	);
}

export default App;
