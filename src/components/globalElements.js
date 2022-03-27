import styled from "styled-components";
import { MenuVars } from "./Menu/menuVars";

export const ContentPage = styled.div`
  display: flex;
  word-wrap: break-word;
`;

export const ContentWrapper = styled.div`
  flex-grow: 1;
  padding-left: ${MenuVars.NavWidth / 2}px;
  padding-top: 0px;
  // background-color: red;

  @media screen and (max-width: 768px) {
    padding-left: 0px;
    padding-top: ${MenuVars.TopbarHeight / 2}px;
  }
`;
