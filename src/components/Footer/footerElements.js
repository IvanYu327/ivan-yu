import styled from "styled-components";

export const FooterWrapper = styled.div`
  //   background: red;
  position: relative;
  display: flex;
  justify-content: center;
  height: 200px;
  padding: 0px;
`;

export const Status = styled.p`
  position: absolute;
  top: 40px;
  margin: 0 auto;
  text-align: center;
`;

export const FooterContent = styled.div`
  //   background: green;
  position: absolute;
  top: 92px;
  transform: translate(0, -50%);
  display: flex;
  flex-direction: row;

  box-sizing: border-box;
  padding: 15px;
  padding-right: 50px;
  padding-left: 50px;
`;

export const Copyright = styled.p`
  position: absolute;
  margin: 0 auto;
  top: 120px;
`;

export const FooterIcon = styled.a`
  color: black;
  font-size: 20px;
  flex: 1 1 0px;
  margin-right: 30px;
  margin-left: 30px;
  cursor: pointer;
`;
