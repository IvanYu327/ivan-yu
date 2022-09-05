import styled from "styled-components";
import React from "react";
import {
  Container,
  Heading1,
  Heading2,
  Heading3,
  Section,
  Line,
} from "../globalComponents";
import Chip from "@material-ui/core/Chip";
import { FaWrench } from "react-icons/fa";
import { Stack } from "@mui/material";

const ImageContainer = styled.div`
  background-image: url(${(props) => props.img});
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
  width: 100%;
  height: 0;
  padding-top: 60%;
`;

const ToolsContainer = styled.div`
  max-width: 800px;
`;

const Block = styled.div`
  padding: 10px 60px;
  margin: 30px 20px;
`;

const Project = ({ project }) => {
  window.scrollTo(0, 0);
  return (
    <>
      <Section>
        <Container>
          <ImageContainer img={project.img} />
          <Heading1>{project.name}</Heading1>
          <Heading2>{project.intro}</Heading2>
          <Line marginTop={"30px"} />
          <Block>
            {"tools" in project ? (
              <Stack
                direction="row"
                justifyContent="flex-start"
                alignItems="center"
                spacing={0}
              >
                <Chip
                  style={{
                    fontSize: "15px",
                    border: "none",
                    fontWeight: "bold",
                    color: "gray",
                  }}
                  icon={<FaWrench />}
                  label={"Tools:"}
                  variant="outlined"
                />
                {project.tools.map((tool) => (
                  <Chip
                    key={project.tools.indexOf(tool)}
                    style={{
                      fontSize: "15px",
                      border: "none",
                      fontWeight: "bold",
                    }}
                    icon={tool.icon}
                    label={tool.name}
                    variant="outlined"
                  />
                ))}
              </Stack>
            ) : (
              ""
            )}

            {"description" in project ? <p>{project.description}</p> : ""}

            <h4>{"award" in project ? project.award : ""}</h4>
            {"links" in project ? (
              <ToolsContainer>
                {project.links.map((link) => (
                  <Chip
                    key={project.links.indexOf(link)}
                    style={{
                      fontSize: "15px",
                      border: "none",
                      fontWeight: "bold",
                      padding: "4px",
                    }}
                    icon={link.icon}
                    label={"name" in link ? link.name : ""}
                    variant="outlined"
                    component="a"
                    href={link.link}
                    target="_blank"
                    clickable
                  />
                ))}
              </ToolsContainer>
            ) : (
              ""
            )}
          </Block>
        </Container>
      </Section>
      {"more" in project ? project.more() : ""}
    </>
  );
};

export default Project;
