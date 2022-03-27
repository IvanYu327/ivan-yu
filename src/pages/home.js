import React from "react";

import { ContentWrapper, ContentPage } from "../components/globalElements";

import Landing from "../components/Landing/landing";
import Experience from "../components/Experience/experience";
import Projects from "../components/Projects/projects";
import BlogHome from "../components/Blog/HomePreview/blogHome";
import About from "../components/About/about";

const Home = () => {
  return (
    <ContentPage>
      <ContentWrapper>
        <Landing />
        <Projects />
        {/* <Experience /> */}
        <BlogHome />
        <About />
      </ContentWrapper>
    </ContentPage>
  );
};

export default Home;
