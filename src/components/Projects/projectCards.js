import React from "react";
import styled from "styled-components";

const CardContainer = styled.div`
  background: red;

  margin-top: 30px;
  margin-right: 30px;
  width: auto;
`;

const ProjectImageContainer = styled.div`
  background-image: url(${(props) => props.img});
  height: 250px;
  min-width: 250px;

  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;

  -webkit-transition: 0.3s;
  -moz-transition: 0.3s;
  -o-transition: 0.3s;
  -ms-transition: 0.3s;
  transition: 0.3s;

  &:hover {
    transform: scale(0.95);
  }
`;

const CardContentContainer = styled.div`
  width: 260px;

  -webkit-transition: 0.3s;
  -moz-transition: 0.3s;
  -o-transition: 0.3s;
  -ms-transition: 0.3s;
  transition: 0.3s;
`;

const ProjectName = styled.h2`
  margin: 0;
`;

const Tags = styled.h3`
  margin: 0;
`;

const ProjectCard = (project) => {
  console.log(project);
  return (
    <CardContainer>
      <ProjectImageContainer img={project.project.img} />
      <CardContentContainer>
        <ProjectName>{project.project.name}</ProjectName>
        <Tags>{project.project.tags}</Tags>
      </CardContentContainer>
    </CardContainer>
  );
};

export default ProjectCard;
