import React from "react";
import styled from "styled-components";
import { Container, Heading1, Section, Heading2 } from "../globalComponents";
import { Grid } from "@mui/material";

const AboutContentContainer = styled.div`
  // max-width: 700px;
  min-width: 250px;
  min-height: 80vh;
  max-height: 800px;

  margin-top: 5vh;
  margin-bottom: 30px;
`;

const Aboutheading = styled(Heading1)`
  margin: auto 0;
  margin-right: 20px;
`;

const AboutHeadingContainer = styled.div`
  display: flex;
  align-items: center;
`;

const Category = styled.div`
  width: 150px;
`;

const Item = styled.div`
  min-width: 500px;
  text-align: right;
`;

const Itemm = styled.h3`
  text-align: left;
`;

const SIDE_THINGS_DATA = [
  { category: "learning", items: "Calisthenics, Back End Engineering" },
  { category: "reading", items: "Deep Work by Cal Newport" },
  { category: "playing", items: "Valorant, Tetris" },
  {
    category: "interests",
    items: "Rock climbing, Human Computer Interaction, Legos ",
  },
];

const About = () => {
  return (
    <Section>
      <Container flex={true}>
        <AboutContentContainer>
          <AboutHeadingContainer>
            <Aboutheading>More about me</Aboutheading>
          </AboutHeadingContainer>
          <Heading2>
            My pursuit of knowledge and skill does not end at engineering and
            design.
            <br />
            <br />
            I'm always curious and looking to explore new topics.
          </Heading2>
          <Grid
            container
            direction="row"
            justifyContent="center"
            alignItems="center"
            rowSpacing={3}
            columnSpacing={3}
          >
            {SIDE_THINGS_DATA.map((sideThing) => (
              <Grid
                key={SIDE_THINGS_DATA.indexOf(sideThing)}
                item
                xs={6}
                sm={6}
                md={6}
                lg={6}
                xl={6}
              >
                <h1>{sideThing.category}</h1>
                <h3>{sideThing.items}</h3>
              </Grid>
            ))}
          </Grid>
        </AboutContentContainer>
      </Container>
    </Section>
  );
};

export default About;
