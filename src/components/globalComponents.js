import styled from "styled-components";

export const Section = styled.div`
  background: ${(props) => props.color};
`;

Section.defaultProps = {
  color: "#faf9f6",
};

export const Container = styled.div`
  background: ${(props) => props.color};
  max-width: 1000px;
  margin: auto;

  padding: 20px 30px 20px 30px;
`;

Container.defaultProps = {
  color: "#faf9f6",
};

export const Line = styled.div`
  margin-top: 50px;
  border-bottom: 2px solid black;
`;
