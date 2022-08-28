import styled from "styled-components";
import React from "react";
import {
  Container,
  Heading1,
  Heading2,
  Heading3,
  Section,
} from "../globalComponents";

const ImageContainer = styled.div`
  background-image: url(${(props) => props.img});
  height: 50vh;
  min-width: 250px;

  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  margin-top: 30px;
`;

const Project = (project) => {
  window.scrollTo(0, 0);
  return (
    <>
      <ImageContainer img={project.project.img} />
      <Section>
        <Container>
          <Heading1>{project.project.name}</Heading1>
          <Heading3>
            <span>Made with:</span> React
          </Heading3>
        </Container>
      </Section>
      {project.project.page()}
    </>
  );
};

export default Project;
