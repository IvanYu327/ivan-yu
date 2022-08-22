import styled from "styled-components";

export const ProjectCardWrapper = styled.div`
  width: 300px;
  display: inline-block;
  margin-right: 50px;
  margin-bottom: 20px;

  min-height: 50px;
  background: white;
  border-radius: 10px;
  transition: all 0.2s ease;

  box-shadow: rgba(0, 0, 0, 0.25) 0px 54px 55px,
    rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px,
    rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px;

  &:hover {
    transform: scale(1.05);
  }
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
  padding 0 10px;
`;

export const ProjectCardTag = styled.div`
  display: inline-block;
  border-radius: 5px;
  padding: 5px 10px;
  margin-right: 5px;
  margin-bottom: 5px;
  background-color: white;
  width: fit-content;
`;

export const ProjectCardTitle = styled.h2`
  background-color: #fff;
  margin: 0;
`;
