import "./styles/App.css";
import { BrowserRouter as Router } from "react-router-dom";
import Menu from "./components/Menu/menu";
import About from "./components/About/about";
import Home from "./pages/home";
// import GlobalFonts from "./styles/fonts/fonts";

function App() {
  return (
    <>
      <Menu />
      <Router>
        <Home />
      </Router>
    </>
  );
}

export default App;
