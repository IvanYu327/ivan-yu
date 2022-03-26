import React from "react";

import { ContentWrapper, ContentPage } from "../components/contentWrapper";

import About from "../components/About/about";
import Experience from "../components/Experience/experience";

const Home = () => {
  return (
    <ContentPage>
      <ContentWrapper>
        <About />
        <Experience />
      </ContentWrapper>
    </ContentPage>
  );
};

export default Home;
