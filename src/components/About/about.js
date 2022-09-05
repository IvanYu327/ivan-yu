import React from "react";
import styled from "styled-components";
import { Container, Heading1, Section, Heading2 } from "../globalComponents";

const AboutContentContainer = styled.div`
  max-width: 550px;
  min-width: 250px;
  min-height: 80vh;
  max-height: 800px;

  margin-top: 5vh;
  margin-bottom: 30px;
`;

const Aboutheading = styled(Heading1)`
  margin: auto 0;
  margin-right: 20px;
`;

const AboutHeadingContainer = styled.div`
  display: flex;
  align-items: center;
`;

const About = () => {
  return (
    <Section>
      <Container flex={true}>
        <AboutContentContainer>
          <AboutHeadingContainer>
            <Aboutheading>Hello there!</Aboutheading>
          </AboutHeadingContainer>
          <Heading2>
            I'm Ivan! I enjoy solving complex problems and looking at how I can
            meaningful contributions through tech.
            <br />
            <br />
            I am currently:
            <br />
            Studying: Biomedical Engineering @uWaterloo
            <br />
            <br />
            Learning: Back End Engineering
            <br />
            <br />
            Reading: Deep Work
            <br />
            <br />
            Enjoying: Rock Climbing, LEGOs
            <br />
            <br />
            Playing: Valorant, Tetris
          </Heading2>
        </AboutContentContainer>
      </Container>
    </Section>
  );
};

export default About;
