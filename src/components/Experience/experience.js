import React from "react";
import { Container, Section, Line } from "../globalComponents";
import ExperienceCard from "./experienceCard";

const Experience = () => {
  return (
    <Section>
      <Container color={"yellow"}>
        <ExperienceCard></ExperienceCard>
      </Container>
      <Container>
        <Line />
      </Container>
    </Section>
  );
};

export default Experience;
