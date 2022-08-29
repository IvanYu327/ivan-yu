import React from "react";
import { useParams } from "react-router-dom";

import { PROJECTS } from "../content/projectData";
import Project from "../components/Projects/project";
import PageNotFound from "./pageNotFound";

const ProjectPage = () => {
  const urlName = useParams().projectName;

  for (var i = 0; i < PROJECTS.length; i++) {
    if (urlName === PROJECTS[i].name.replaceAll(" ", "-").toLowerCase()) {
      return <Project project={PROJECTS[i]} />;
    }
  }

  return <PageNotFound />;
};

export default ProjectPage;
