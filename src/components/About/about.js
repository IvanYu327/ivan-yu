import React from "react";
import styled from "styled-components";
import { Container, Heading1, Section, Heading2 } from "../globalComponents";
import IvanImage from "../../images/ivan.jpg";
import IvanHeadImage from "../../images/ivan-head.jpg";

const MobileImageContainer = styled.div`
  background-image: url(${IvanHeadImage});

  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;

  height: 100px;
  width: 100px;
  margin-left: 30px;

  @media (min-width: 1000px) {
    display: none;
  }
`;

const ImageContainer = styled.div`
  background-image: url(${IvanImage});

  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;

  height: 350px;
  width: 350px;
  margin-top: 50px;
  margin: auto 0;
  margin-left: 30px;

  @media (max-width: 1000px) {
    display: none;
  }
`;

const AboutContentContainer = styled.div`
  max-width: 550px;
  min-width: 250px;
  margin-top: 30px;
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
            {/* <MobileImageContainer /> */}
          </AboutHeadingContainer>
          <Heading2>
            I enjoy solving complex problems, and looking at how I can
            meaningful contributions through tech.
            <br />
            <br />
            Currently, I am studying Biomedical Engineering at uWaterloo while
            working on neurotech software applications and full stack
            development.
            <br />
            <br />
            I previously worked at Cognixion, designing and developing
            interfaces to support communication for disabled peoples.
            <br />
            <br />
            In my spare time, I enjoy rock climbing and playing Tetris (4th
            fastest in Canada / 91rst globally).
          </Heading2>
        </AboutContentContainer>
        {/* <ImageContainer /> */}
      </Container>
    </Section>
  );
};

export default About;
