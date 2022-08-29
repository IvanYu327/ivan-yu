import React from "react";
import styled from "styled-components";
import { Heading3 } from "../globalComponents";

const CardContainer = styled.div`
  margin-top: 30px;
  margin-right: 30px;
`;

const Position = styled(Heading3)`
  margin-bottom: 2px;
`;

const Company = styled.a`
  color: black;

  text-decoration-color: #ea215a;
  text-decoration-thickness: 0.125em;
  text-underline-offset: 1.5px;
`;

const ExperienceCard = ({ experience }) => {
  return (
    <CardContainer>
      <Position>
        {experience.position}{" "}
        <span
          style={{
            fontWeight: "normal",
          }}
        >
          at
        </span>{" "}
        <Company href={experience.link} target="_blank">
          {experience.company}
        </Company>
      </Position>
      {experience.description}
    </CardContainer>
  );
};

export default ExperienceCard;
