import styled from "styled-components";
import { Link as LinkS } from "react-scroll";

export const LandingWrapper = styled.div`
  position: relative;
  // background: #fff;
  flex-grow: 1;
  height: 100vh;
  max-height: 700px;
  padding: 0px;
  min-width: 300px;

  @media screen and (max-width: 768px) {
    min-height: 80vh;
  }
`;

export const LandingContent = styled.div`
  // background: green;
  position: absolute;
  top: 50%;
  transform: translate(0, -50%);

  box-sizing: border-box;
  min-width: 100%;
  padding: 15px;
  padding-right: 50px;
  padding-left: 50px;
`;

export const Name = styled.span`
  color: blue;
`;

export const LandingP = styled.p`
  margin-top: 10px;
`;

export const Arrow = styled.span`
  font-size: 20px;
`;

export const CheckOutMyWork = styled(LinkS)`
  margin-top: 50px;
  font-size: 16px;
  cursor: pointer;
`;
