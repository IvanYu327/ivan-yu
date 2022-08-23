import React from "react";
import styled from "styled-components";

const CardContainer = styled.div`
  display: flex;
  width: 500px;

  margin-top: 30px;
  // margin-right: 30px;
`;

const CompanyImageContainer = styled.div`
  background-image: url(${(props) => props.img});
  height: 200px;
  width: 200px;

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
`;

const CardContentContainer = styled.div`
  width: 290px;
  padding-left: 20px;
`;

const Date = styled.h3`
  color: gray;
  font-weight: normal;
`;

const ExperienceCard = (experience) => {
  return (
    <CardContainer>
      <CompanyImageContainer img={experience.experience.logo} />
      <CardContentContainer>
        <h2>{experience.experience.position}</h2>
        <h3>{experience.experience.company}</h3>
        <Date>{experience.experience.date}</Date>
      </CardContentContainer>
    </CardContainer>
  );
};

export default ExperienceCard;
