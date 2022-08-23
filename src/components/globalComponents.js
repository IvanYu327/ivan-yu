import styled from "styled-components";

export const Section = styled.div`
  background: ${(props) => props.color};
  padding: 50px 30px 50px 30px;
`;

export const Container = styled.div`
  background: ${(props) => props.color};
  max-width: 1040px;
  margin: auto;

  display: ${(props) => (props.flex ? "flex" : "")};
  flex-wrap: ${(props) => (props.flex ? "wrap" : "")};
`;

export const Line = styled.div`
  margin-top: ${(props) => props.marginTop};
  border-bottom: 1px solid gray;
`;

Line.defaultProps = {
  marginTop: "0px",
};
