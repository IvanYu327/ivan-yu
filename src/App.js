import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import "./styles/App.css";

import Navbar from "./components/Navbar/navbar";
import Footer from "./components/Footer/footer";

import Home from "./pages/home";
import About from "./pages/about";
import Work from "./pages/work";
import PageNotFound from "./pages/pageNotFound";

import ThemeProvider from "styled-components";
import { Line } from "./components/globalComponents";

const LightTheme = {
  pageBackground: "white",
  titleColor: "#dc658b",
  tagLineColor: "black",
};

const DarkTheme = {
  pageBackground: "#282c36",
  titleColor: "lightpink",
  tagLineColor: "lavender",
};

const themes = { light: LightTheme, dark: DarkTheme };

function App() {
  const [theme, setTheme] = useState("light");

  return (
    <>
      <Router>
        {/* <ThemeProvider theme={themes[theme]}> */}
        <Navbar />
        <Routes>
          <Route path="/*" element={<PageNotFound />} />
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/work" element={<Work />} />
        </Routes>
        {/* </ThemeProvider> */}
        <Footer />
      </Router>
    </>
  );
}

export default App;
