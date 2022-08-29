import React from "react";
import { useParams } from "react-router-dom";

import { projectData } from "../content/projectData";
import Project from "../components/Projects/project";
import PageNotFound from "./pageNotFound";

const ProjectPage = () => {
  const urlName = useParams().projectName;

  for (var i = 0; i < projectData.length; i++) {
    if (urlName === projectData[i].name.replaceAll(" ", "-").toLowerCase()) {
      return <Project project={projectData[i]} />;
    }
  }

  return <PageNotFound />;
};

export default ProjectPage;
