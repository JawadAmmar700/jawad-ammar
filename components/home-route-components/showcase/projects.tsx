import React from "react";
import { projectsQuery } from "../../../lib/queries";
import Cards from "./cards";

const Projects = async () => {
  const projects = await projectsQuery();

  return (
    <>
      <Cards data={projects} />
    </>
  );
};

export default Projects;
