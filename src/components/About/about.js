import React from "react";
import styled from "styled-components";
import { Container, Section } from "../globalComponents";
import IvanImage from "../../images/ivan.jpg";

const ImageContainer = styled.div`
  background-image: url(${IvanImage});
  height: 200px;
  min-width: 200px;
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  // border-radius: 10px;
`;

const AboutContainer = styled.div`
  display: flex;
  background: red;
`;

const AboutContentContainer = styled.div`
  width: 290px;
  padding-left: 20px;
  background: green;
`;

const About = () => {
  return (
    <Section>
      <Container color={"yellow"} flex={true}>
        <ImageContainer />
        <AboutContentContainer>
          sdadfasfsdafsaf sdadfasfsdafsaf sdadfasfsdafsaf sdadfasfsdafsaf
          sdadfasfsdafsaf sdadfasfsdafsaf sdadfasfsdafsaf sdadfasfsdafsaf
          sdadfasfsdafsaf sdadfasfsdafsaf sdadfasfsdafsaf sdadfasfsdafsaf
          sdadfasfsdafsaf sdadfasfsdafsaf sdadfasfsdafsaf sdadfasfsdafsaf
          sdadfasfsdafsaf sdadfasfsdafsaf sdadfasfsdafsaf sdadfasfsdafsaf
          sdadfasfsdafsaf sdadfasfsdafsaf sdadfasfsdafsaf sdadfasfsdafsaf
          sdadfasfsdafsaf sdadfasfsdafsaf sdadfasfsdafsaf sdadfasfsdafsaf
          sdadfasfsdafsaf sdadfasfsdafsaf sdadfasfsdafsaf sdadfasfsdafsaf
          sdadfasfsdafsaf sdadfasfsdafsaf sdadfasfsdafsaf sdadfasfsdafsaf
          sdadfasfsdafsaf sdadfasfsdafsaf sdadfasfsdafsaf sdadfasfsdafsaf
          sdadfasfsdafsaf sdadfasfsdafsaf sdadfasfsdafsaf sdadfasfsdafsaf
          sdadfasfsdafsaf sdadfasfsdafsaf sdadfasfsdafsaf sdadfasfsdafsaf
          sdadfasfsdafsaf sdadfasfsdafsaf sdadfasfsdafsaf sdadfasfsdafsaf
          sdadfasfsdafsaf sdadfasfsdafsaf sdadfasfsdafsaf sdadfasfsdafsaf
          sdadfasfsdafsaf sdadfasfsdafsaf sdadfasfsdafsaf sdadfasfsdafsaf
          sdadfasfsdafsaf sdadfasfsdafsaf sdadfasfsdafsaf sdadfasfsdafsaf
          sdadfasfsdafsaf sdadfasfsdafsaf sdadfasfsdafsaf sdadfasfsdafsaf
          sdadfasfsdafsaf sdadfasfsdafsaf sdadfasfsdafsaf sdadfasfsdafsaf
          sdadfasfsdafsaf sdadfasfsdafsaf sdadfasfsdafsaf sdadfasfsdafsaf
          sdadfasfsdafsaf sdadfasfsdafsaf sdadfasfsdafsaf sdadfasfsdafsaf
          sdadfasfsdafsaf sdadfasfsdafsaf sdadfasfsdafsaf sdadfasfsdafsaf
          sdadfasfsdafsaf sdadfasfsdafsaf{" "}
        </AboutContentContainer>
        other text
      </Container>
    </Section>
  );
};

export default About;
