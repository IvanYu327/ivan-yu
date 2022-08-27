import React from "react";
import { Container, Section, Line } from "../globalComponents";
import ExperienceCard from "./experienceCard";
import { experienceData } from "../../content/experienceData";

const Experience = () => {
  return (
    <Section>
      <Container>
        <h2>Where I've Worked.</h2>
        <Line marginTop={0} />
      </Container>
      <Container flex={true}>
        {experienceData.map((experience) => (
          <ExperienceCard key={experience.id} experience={experience} />
        ))}
      </Container>
    </Section>
  );
};

export default Experience;
