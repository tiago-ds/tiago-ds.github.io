import "./App.css";
import { BrowserRouter as Router } from "react-router-dom"; // Only need Router and Link here
import AppRoutes from "./Routes";
import NavComponent from "./components/Nav/NavComponent";

function App() {
  return (
    <Router>
      <header>
        <NavComponent />
      </header>
      <main>
        <AppRoutes />
      </main>
    </Router>
  );
}

export default App;
