import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import "./styles/App.css";
import { ThemeProvider } from "styled-components";

import Navbar from "./components/navbar";
import Footer from "./components/footer";

import Home from "./pages/home";
import About from "./pages/aboutPage";
import Work from "./pages/work";
import PageNotFound from "./pages/pageNotFound";
import ProjectPage from "./pages/projectPage";

const theme = {
  light: {
    primary: "#000",
    text: "#fff",
  },
};

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/*" element={<PageNotFound />} />
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/work" element={<Work />} />
          <Route path="/:projectName" element={<ProjectPage />} />
        </Routes>
        <Footer />
      </Router>
    </ThemeProvider>
  );
}

export default App;
