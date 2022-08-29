import styled from "styled-components";
import React from "react";
import { Container, Heading1, Heading3, Section } from "../globalComponents";
import Chip from "@material-ui/core/Chip";
import { FaWrench } from "react-icons/fa";

const ImageContainer = styled.div`
  background-image: url(${(props) => props.img});
  height: 50vh;
  min-width: 250px;

  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  margin-top: 30px;
`;

const ToolsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  max-width: 800px;
`;

const Project = ({ project }) => {
  window.scrollTo(0, 0);
  return (
    <>
      <Section>
        <Container>
          <ImageContainer img={project.img} />
          <Heading1>{project.name}</Heading1>

          {"tools" in project ? (
            <ToolsContainer>
              <Chip
                style={{
                  fontSize: "15px",
                  border: "none",
                  fontWeight: "bold",
                  color: "gray",
                }}
                icon={<FaWrench />}
                label={"Built with:"}
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
            </ToolsContainer>
          ) : (
            ""
          )}
          <Heading3>{project.description}</Heading3>
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
        </Container>
      </Section>
      {"more" in project ? project.more() : ""}
    </>
  );
};

export default Project;
