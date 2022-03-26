import "./styles/App.css";
import { BrowserRouter as Router } from "react-router-dom";
import Home from "./pages/home";
// import GlobalFonts from "./styles/fonts/fonts";

function App() {
  return (
    <Router>
      <Home />
    </Router>
  );
}

export default App;
