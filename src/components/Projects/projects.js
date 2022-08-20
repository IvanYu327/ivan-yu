import { Grid } from "@material-ui/core";
import React from "react";
import ProjectCard from "./ProjectCard/projectCard";
import { ProjectsWrapper, Test, Test2 } from "./projectsElements";

const projects = [1, 2, 3, 4, 5, 6, 7, 8, 9];

const Projects = () => {
  return (
    <ProjectsWrapper id="projects">
      <h1>Projects</h1>
      <h3>I like to build cool stuff, go click on them</h3>
      <Grid container spacing={3}>
        {projects.map((project) => {
          return (
            <Grid item key={project} xs={12} sm={6} md={4} xl={4}>
              {/* <Test> */}
              <ProjectCard />
              {/* </Test> */}
            </Grid>
          );
        })}
      </Grid>
      Projects Projects Projects Projects Projects Projects Projects Projects
      Projects Projects Projects Projects Projects Projects Projects Projects
      Projects Projects Projects Projects Projects Projects Projects Projects
      Projects Projects Projects Projects Projects Projects Projects Projects
      Projects Projects Projects Projects Projects Projects Projects Projects
      Projects Projects Projects Projects Projects Projects Projects Projects
      Projects Projects Projects Projects Projects Projects Projects Projects
      Projects Projects Projects Projects Projects Projects Projects Projects
      Projects Projects Projects Projects Projects Projects Projects Projects
      Projects Projects Projects Projects Projects Projects Projects Projects
      Projects Projects Projects Projects Projects Projects Projects Projects
      Projects Projects Projects Projects Projects Projects Projects Projects
      Projects Projects Projects Projects Projects Projects Projects Projects
      Projects Projects Projects Projects Projects Projects Projects Projects
      Projects Projects Projects Projects Projects Projects Projects Projects
      Projects Projects Projects Projects Projects Projects Projects Projects
      Projects Projects Projects Projects Projects Projects Projects Projects
      Projects Projects Projects Projects Projects Projects Projects Projects
      Projects Projects Projects Projects Projects Projects Projects Projects
      Projects Projects Projects Projects Projects Projects Projects Projects
      Projects Projects Projects Projects Projects Projects Projects Projects
      Projects Projects Projects Projects Projects Projects Projects Projects
      Projects Projects Projects Projects Projects Projects Projects Projects
      Projects Projects Projects Projects Projects Projects Projects Projects
      Projects Projects Projects Projects Projects Projects Projects Projects
      Projects Projects Projects Projects Projects Projects Projects Projects
      Projects Projects Projects Projects Projects Projects Projects Projects
      Projects Projects Projects Projects Projects Projects Projects Projects
      Projects Projects Projects Projects Projects Projects Projects Projects
      Projects Projects Projects Projects Projects Projects Projects Projects
      Projects Projects Projects Projects Projects Projects Projects Projects
      Projects Projects Projects Projects Projects Projects Projects Projects
      Projects Projects Projects Projects Projects Projects Projects Projects
      Projects Projects Projects Projects Projects Projects Projects Projects
      Projects Projects Projects Projects Projects Projects Projects Projects
      Projects Projects Projects Projects Projects Projects Projects Projects
      Projects Projects Projects Projects Projects Projects Projects Projects
      Projects Projects Projects Projects Projects Projects Projects Projects
      Projects Projects Projects Projects Projects Projects Projects Projects
      Projects Projects Projects Projects Projects Projects Projects Projects
      Projects Projects Projects Projects Projects Projects Projects Projects
      Projects Projects Projects Projects Projects Projects Projects Projects
      Projects Projects Projects Projects Projects Projects Projects Projects
      Projects Projects Projects Projects Projects Projects Projects Projects
      Projects Projects Projects Projects Projects Projects Projects Projects
      Projects Projects Projects Projects Projects Projects Projects Projects
      Projects Projects Projects Projects Projects Projects Projects Projects
      Projects Projects Projects Projects Projects Projects Projects Projects
      Projects Projects Projects Projects Projects Projects Projects Projects
      Projects Projects Projects Projects Projects Projects Projects Projects
      Projects Projects Projects Projects Projects Projects Projects Projects
      Projects Projects Projects Projects Projects Projects Projects Projects
      Projects Projects Projects Projects Projects Projects Projects Projects
      Projects Projects Projects Projects Projects Projects Projects Projects
      Projects Projects Projects Projects Projects Projects Projects Projects
      Projects Projects Projects Projects
    </ProjectsWrapper>
  );
};

export default Projects;
