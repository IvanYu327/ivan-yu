import React from "react";
import styled from "styled-components";
import { Container, Heading1, Heading2, Section } from "./globalComponents";
import SocialIcons from "./social";

const LandingContainer = styled.div`
  max-width: 800px;
  min-width: 250px;
  margin-top: 10vh;

  height: 70vh;
  max-height: 800px;
  padding-top: 50px;
  padding-right: 10px;
`;

const Landing = () => {
  return (
    <Section>
      <Container>
        <LandingContainer>
          <Heading1>
            Hi!{" "}
            <span role="img" aria-label="wave">
              👋
            </span>{" "}
            I'm Ivan.
            <br />
            I'm an engineer.
          </Heading1>
          <Heading2>
            Biomedical Engineering at the University of Waterloo.
            <br />
            Excited about software engineering, biotech, and UX.
          </Heading2>
          <SocialIcons />
        </LandingContainer>
      </Container>
    </Section>
  );
};

export default Landing;
