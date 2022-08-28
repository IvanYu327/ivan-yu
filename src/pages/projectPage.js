import React from "react";
import styled from "styled-components";
import { useParams } from "react-router-dom";

import { projectData } from "../content/projectData";
import Project from "../components/Projects/project";
import PageNotFound from "./pageNotFound";

const PageNotFoundMessage = styled.h3`
  margin-top: 30vh;
  margin-bottom: 50vh;
  text-align: center;
`;

const ProjectPage = () => {
  const urlName = useParams().projectName;

  for (var i = 0; i < projectData.length; i++) {
    if (urlName === projectData[i].name.replace(" ", "-").toLowerCase()) {
      return <Project project={projectData[i]} />;
    }
  }

  return <PageNotFound />;
};

export default ProjectPage;
