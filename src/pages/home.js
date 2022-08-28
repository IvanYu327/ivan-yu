import React from "react";

import Landing from "../components/landing";
import Experience from "../components/Experience/experience";
import ProjectDisplay from "../components/ProjectDisplay/projectDisplay";

const Home = () => {
  return (
    <>
      <Landing />
      <ProjectDisplay />
      <Experience />
    </>
  );
};

export default Home;
