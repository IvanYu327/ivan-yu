import "./styles/App.css";
import { BrowserRouter as Router } from "react-router-dom";
import Menu from "./components/Menu/menu";
import Home from "./pages/home";

function App() {
  console.log("bruh");
  return (
    <>
      <Menu />
      <Router>
        <div>sdiopfspakfopdaskf</div>
        <Home />
      </Router>
    </>
  );
}

export default App;
