import React from "react";
import styled from "styled-components";
import { Container, Section, Line } from "./globalComponents";

const LandingTitle = styled.h1`
  max-width: 1000px;
  // margin-left: 20px;
  font-size: 50px;

  @media (max-width: 500px) {
    font-size: 30px;
  }
`;

const Landing = () => {
  return (
    <Section>
      <Container>
        <LandingTitle>
          Hi!{" "}
          <span role="img" aria-label="wave">
            👋
          </span>{" "}
          I'm Ivan.
        </LandingTitle>
        <LandingTitle> I'm an (aspiring) engineer.</LandingTitle>
        <h3>
          Biomedical Engineering at the University of Waterloo, excited about
          software and biotech.
        </h3>
        <Line />
      </Container>
    </Section>
  );
};

export default Landing;
