import React from "react";
import {
  ProjectCardWrapper,
  ProjectCardImage,
  ProjectCardTitle,
  ProjectCardContent,
  ProjectCardTag,
} from "./projectCardElements";

const ProjectCard = ({ project }) => {
  console.log(project);
  return (
    <ProjectCardWrapper>
      <ProjectCardImage src="https://imgs.mongabay.com/wp-content/uploads/sites/20/2021/04/06143653/Screen-Shot-2021-04-06-at-9.35.41-AM.png" />
      <ProjectCardContent>
        <ProjectCardTag>pee pee</ProjectCardTag>
        <ProjectCardTag>pee pee</ProjectCardTag>
        <ProjectCardTag>pee pee</ProjectCardTag>
        <ProjectCardTag>pee pee</ProjectCardTag>
        <ProjectCardTitle>{project.name}</ProjectCardTitle>
        <p>
          ha ha ha ha ha ha ha ha ha ha ha ha ha ha ha ha ha ha ha ha ha ha ha
          ha ha ha ha ha
        </p>
        <p>View Porject, github idk</p>
      </ProjectCardContent>
    </ProjectCardWrapper>
  );
};

export default ProjectCard;
