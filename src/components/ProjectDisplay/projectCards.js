import React from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";

const CardContainer = styled.div`
  margin-top: 30px;
  margin-right: 30px;
  width: auto;
`;

const ProjectImageContainer = styled.div`
  background-image: url(${(props) => props.img});
  // height: 250px;
  // min-width: 250px;

  // background-size: cover;
  // background-repeat: no-repeat;
  // background-position: center;
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
  width: 100%;
  height: 0;
  padding-top: 60%;

  cursor: pointer;

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
  max-width: 260px;
`;

const ProjectName = styled.h2`
  margin-top: 10px;
  margin-bottom: 0px;

  -webkit-transition: 0.3s;
  -moz-transition: 0.3s;
  -o-transition: 0.3s;
  -ms-transition: 0.3s;
  transition: 0.3s;

  & > ${"span"} {
    cursor: pointer;

    text-decoration: none;
    background-image: linear-gradient(#d99a5a, #d99a5a);
    background-size: 0% 0.1em;
    background-position-y: 90%;
    background-position-x: 100%;
    background-repeat: no-repeat;
    transition: background-size 0.3s ease-in-out;

    &:hover,
    &:focus,
    &:active {
      background-size: 100% 0.1em;
      background-position-x: 0%;
    }
  }
`;

const Tags = styled.h3`
  margin-top: 5px;
  margin-bottom: 0px;
  color: gray;
`;

const ProjectCard = ({ project }) => {
  let tags = "";

  project.tags.forEach((tag, i) => {
    tags = tags.concat(tag);
    if (i !== project.tags.length - 1) tags = tags.concat(", ");
  });

  const navigate = useNavigate();

  const handleClick = (page) => {
    navigate(`../${page}`);
  };

  const projectURL = project.name.replaceAll(" ", "-").toLowerCase();

  return (
    <CardContainer>
      <ProjectImageContainer
        img={project.img}
        onClick={() => handleClick(projectURL)}
      />
      <CardContentContainer>
        <ProjectName onClick={() => handleClick(projectURL)}>
          <span>{project.name}</span>
        </ProjectName>
        <Tags>{tags}</Tags>
      </CardContentContainer>
    </CardContainer>
  );
};

export default ProjectCard;
