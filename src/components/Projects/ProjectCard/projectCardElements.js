import styled from "styled-components";

export const ProjectCardWrapper = styled.div`
  width: 250px;
  min-height: 50px;
  background: purple;
  margin: 0 auto;
  border-radius: 10px;
  //   padding: 0;
`;

export const ProjectCardImage = styled.img`
  //   max-width: 100%;
  //   max-height: 100%;
  object-fit: cover;
  width: 100%;
  max-height: 200px;
  margin: auto;
  border-radius: 10px 10px 0 0;
`;

export const ProjectCardContent = styled.div`
padding 0 10px;`;

export const ProjectCardTitle = styled.h2`
  background-color: #fff;
  margin: 0;
`;
