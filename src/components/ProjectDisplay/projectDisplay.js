import React from "react";
import { Container, Section, Line } from "../globalComponents";
import { projectData } from "../../content/projectData";
import ProjectCard from "./projectCards";
import { Grid } from "@mui/material";

const ProjectDisplay = () => {
  return (
    <Section color="#e5e5e5">
      <Container>
        <h2>I haven't cured cancer, but I made some cool stuff.</h2>
        <Line />
        <Container>
          <Grid container spacing={1} columns={{ xs: 4, sm: 8, md: 12 }}>
            {projectData.map((project) => (
              <Grid item xs={6} sm={4} md={4} lg={4} xl={4}>
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