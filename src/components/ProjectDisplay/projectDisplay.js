import React from "react";
import { Container, Section, Line } from "../globalComponents";
import { PROJECTS } from "../../content/projectData";
import ProjectCard from "./projectCards";
import { Grid } from "@mui/material";

const ProjectDisplay = () => {
  return (
    <Section color="#e5e5e5">
      <Container>
        <h2>
          I haven't cured cancer or built Google, but I made some cool stuff.
        </h2>
        <Line />
        <Container>
          <Grid container spacing={1} columns={{ xs: 4, sm: 8, md: 12 }}>
            {PROJECTS.map((project) => (
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
            ))}
          </Grid>
        </Container>
      </Container>
    </Section>
  );
};

export default ProjectDisplay;
