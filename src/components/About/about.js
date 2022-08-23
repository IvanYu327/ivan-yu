import React from "react";
import styled from "styled-components";
import { Container, Section } from "../globalComponents";
import IvanImage from "../../images/ivan.jpg";

const ImageContainer = styled.div`
  background-image: url(${IvanImage});
  height: 300px;
  width: 300px;
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  border-radius: 10px;
`;

const About = () => {
  return (
    <Section>
      <Container color={"yellow"}>
        ABOUT ME
        <ImageContainer />
      </Container>
    </Section>
  );
};

export default About;
