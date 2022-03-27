import "./styles/App.css";
import { BrowserRouter as Router } from "react-router-dom";
import Menu from "./components/Menu/menu";
import Home from "./pages/home";
import Footer from "./components/Footer/footer";
import { ContentPage, ContentWrapper } from "./components/globalElements";

function App() {
  console.log("bruh");
  return (
    <>
      <Menu />
      <Router>
        <ContentPage>
          <ContentWrapper>
            <Home />
            <Footer />
          </ContentWrapper>
        </ContentPage>
      </Router>
    </>
  );
}

export default App;
