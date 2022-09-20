import React from "react";
import styled from "styled-components";
import { Container, Section, Line, Heading2 } from "../globalComponents";
import ExperienceCard from "./experienceCard";
import {
  CURRENT_EXPERIENCE,
  PAST_EXPERIENCE,
} from "../../content/experienceData";

const WorkContainer = styled.div`
  max-width: 450px;
  min-width: 250px;
  width: 450px;
  margin-right: 20px;
  margin-bottom: 30px;
`;

const Experience = () => {
  return (
    <Section>
      <Container flex={true}>
        <WorkContainer>
          <Heading2>Where I'm Working.</Heading2>
          <Line marginTop={0} />
          {CURRENT_EXPERIENCE.map((experience) => (
            <ExperienceCard
              key={CURRENT_EXPERIENCE.indexOf(experience)}
              experience={experience}
            />
          ))}
        </WorkContainer>

        <WorkContainer>
          <Heading2>Where I've Worked.</Heading2>
          <Line marginTop={0} />
          {PAST_EXPERIENCE.map((experience) => (
            <ExperienceCard
              key={PAST_EXPERIENCE.indexOf(experience)}
              experience={experience}
            />
          ))}
        </WorkContainer>
      </Container>
    </Section>
  );
};

export default Experience;
