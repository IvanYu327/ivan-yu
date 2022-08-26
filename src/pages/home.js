import React from "react";

import Landing from "../components/landing";
import Experience from "../components/Experience/experience";
import Projects from "../components/Projects/projects";

const Home = () => {
  return (
    <>
      <Landing />
      <Projects />
      <Experience />
    </>
  );
};

export default Home;
