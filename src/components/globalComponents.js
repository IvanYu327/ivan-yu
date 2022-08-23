import styled from "styled-components";

export const Section = styled.div`
  background: ${(props) => props.color};
`;

export const Container = styled.div`
  background: ${(props) => props.color};
  max-width: 1040px;
  margin: auto;

  padding: 20px 30px 20px 30px;

  display: ${(props) => (props.flex ? "flex" : "")};
  flex-wrap: wrap;
  // align-items: center;
  // justify-content: center;
`;

export const Line = styled.div`
  margin-top: ${(props) => props.marginTop};
  border-bottom: 2px solid black;
`;

Line.defaultProps = {
  marginTop: "50px",
};
