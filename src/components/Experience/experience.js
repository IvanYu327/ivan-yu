import React from "react";
import { Container, Section, Line } from "../globalComponents";
import ExperienceCard from "./experienceCard";
import { experienceData } from "./experienceData";

const Experience = () => {
  return (
    <Section>
      <Container flex={true}>
        {experienceData.map((experience) => (
          <ExperienceCard experience={experience} />
        ))}
      </Container>
      <Container>
        <Line />
      </Container>
    </Section>
  );
};

export default Experience;
