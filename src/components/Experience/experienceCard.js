import React from "react";
import styled from "styled-components";
import { Heading2, Heading3 } from "../globalComponents";

const CardContainer = styled.div`
  display: flex;

  margin-top: 30px;
  margin-right: 30px;
`;

const CompanyImageContainer = styled.div`
  background-image: url(${(props) => props.img});
  height: 160px;
  min-width: 160px;

  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;

  -webkit-transition: 0.3s;
  -moz-transition: 0.3s;
  -o-transition: 0.3s;
  -ms-transition: 0.3s;
  transition: 0.3s;

  &:hover {
    transform: scale(0.95);
  }

  @media (max-width: 768px) {
    height: 100px;
    min-width: 100px;
  }
`;

const CardContentContainer = styled.div`
  width: 260px;
  padding-left: 20px;

  -webkit-transition: 0.3s;
  -moz-transition: 0.3s;
  -o-transition: 0.3s;
  -ms-transition: 0.3s;
  transition: 0.3s;

  @media (max-width: 768px) {
    width: 180px;
  }
`;

const Position = styled(Heading2)`
  margin-top: 10px;
  margin-bottom: 10px;

  @media (max-width: 768px) {
    margin-top: 0px;
  }
`;

const Company = styled(Heading3)`
  margin-top: 10px;
  margin-bottom: 0px;
`;

const Date = styled(Heading3)`
  color: gray;
  font-weight: normal;
  margin-top: 10px;
  margin-bottom: 0px;
`;

const ExperienceCard = (experience) => {
  return (
    <CardContainer>
      <CompanyImageContainer img={experience.experience.logo} />
      <CardContentContainer>
        <Position>{experience.experience.position}</Position>
        <Company>{experience.experience.company}</Company>
        <Date>{experience.experience.date}</Date>
      </CardContentContainer>
    </CardContainer>
  );
};

export default ExperienceCard;
