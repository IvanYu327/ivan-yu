import React from "react";
import { Container, Section } from "../globalComponents";
import { PROJECTS } from "../../content/projectData";
import ProjectCard from "./projectCard";
import { Grid } from "@mui/material";

const ProjectDisplay = () => {
  return (
    <Section color="#e5e5e5">
      <Container>
        <h2>Projects</h2>
        <Container>
          <Grid container spacing={1} columns={{ xs: 4, sm: 8, md: 12 }}>
            {PROJECTS.map((project) =>
              project.favourite ? (
                <Grid
                  key={PROJECTS.indexOf(project)}
                  item
                  xs={6}
                  sm={6}
                  md={6}
                  lg={6}
                  xl={6}
                >
                  <ProjectCard project={project} />
                </Grid>
              ) : (
                ""
              )
            )}
          </Grid>
        </Container>
      </Container>
    </Section>
  );
};

export default ProjectDisplay;
