import { Grid } from "@material-ui/core";
import React from "react";
import ProjectCard from "./ProjectCard/projectCard";
import { ProjectsWrapper, CardsWrapper } from "./projectsElements";
import { projects } from "./projectInfo.js";

const Projects = () => {
  console.log(projects);
  return (
    <ProjectsWrapper id="projects">
      <h1>Projects</h1>
      <h3>I like to build stuff, go click on them</h3>
      {/* <Grid container spacing={3}> */}
      <CardsWrapper>
        {projects.map((project) => {
          return (
            // <Grid item key={project} xs={12} sm={12} md={6} xl={4}>
            <ProjectCard project={project} />
            // {/* </Grid> */}
          );
        })}
        {/* </Grid> */}
      </CardsWrapper>
    </ProjectsWrapper>
  );
};

export default Projects;
