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
  -webkit-transition: 0.8s;
  -moz-transition: 0.8s;
  -o-transition: 0.8s;
  -ms-transition: 0.8s;
  transition: 0.8s;

  &:hover {
    transform: scale(0.9);
  }
`;

const CardContentContainer = styled.div`
  width: 290px;
  padding-left: 20px;
`;

const Date = styled.h3`
  color: gray;
`;

const ExperienceCard = (experience) => {
  console.log(experience);
  console.log(experience.position);
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
