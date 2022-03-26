import styled from "styled-components";

export const ContentPage = styled.div`
  display: flex;
  word-wrap: break-word;
`;

export const ContentWrapper = styled.div`
  flex-grow: 1;
  padding-left: 200px;
  padding-top: 0px;
  background-color: red;

  @media screen and (max-width: 768px) {
    padding-left: 0px;
    padding-top: 80px;
  }
`;
