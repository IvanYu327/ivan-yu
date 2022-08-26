import styled from "styled-components";

export const Section = styled.div`
  background: ${(props) => props.color};
  padding: 50px 30px 50px 30px;
  min-width: 300px;
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

export const Heading2 = styled.h2`
  -webkit-transition: 0.3s;
  -moz-transition: 0.3s;
  -o-transition: 0.3s;
  -ms-transition: 0.3s;
  transition: 0.3s;

  @media (max-width: 768px) {
    font-size: 20px;
  }
`;

export const Heading3 = styled.h3`
  -webkit-transition: 0.3s;
  -moz-transition: 0.3s;
  -o-transition: 0.3s;
  -ms-transition: 0.3s;
  transition: 0.3s;

  @media (max-width: 768px) {
    font-size: 15px;
  }
`;
