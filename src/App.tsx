import "./App.css";
import { HashRouter } from "react-router-dom";
import AppRoutes from "./Routes";
import NavComponent from "./components/Nav/NavComponent";

function App() {
  return (
    <HashRouter>
      <header>
        <NavComponent />
      </header>
      <main>
        <AppRoutes />
      </main>
    </HashRouter>
  );
}

export default App;
