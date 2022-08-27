import React from "react";
import styled from "styled-components";
import { Container, Heading1, Section, Heading2 } from "../globalComponents";
import IvanImage from "../../images/ivan.jpg";

const ImageContainer = styled.div`
  background-image: url(${IvanImage});
  height: 200px;
  min-width: 200px;
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
`;

const AboutContentContainer = styled.div`
  max-width: 600px;
  min-width: 250px;
  margin-top: 30px;
  margin-bottom: 100px;
`;

const About = () => {
  return (
    <Section>
      <Container>
        <Heading1>Hello there!</Heading1>
        <AboutContentContainer>
          <Heading2>
            I'm Ivan. I enjoy solving complex problems, and looking at how I can
            meaningful contributions through tech.
            <br />
            <br />
            I previously worked at Cognixion, designing and developing
            interfaces to support communication for disabled peoples.
            <br />
            <br />I enjoy rock climbing and playing Tetris (4th fastest player
            in Canada).
          </Heading2>
        </AboutContentContainer>
      </Container>
    </Section>
  );
};

export default About;
