import React from "react";
import styled from "styled-components";

import { Container } from "../components/globalComponents";

const PageNotFoundMessage = styled.h3`
  margin-top: 30vh;
  text-align: center;
`;

const PageNotFound = () => {
  return (
    <Container>
      <PageNotFoundMessage>
        Nothing to see here! Are you sure your link is correct?
      </PageNotFoundMessage>
    </Container>
  );
};

export default PageNotFound;
