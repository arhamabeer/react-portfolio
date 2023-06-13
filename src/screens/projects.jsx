import React from "react";
import SideNav from "../components/sideNav";
import ProjectCard from "../components/projectCard";
import { myProjects } from "../projects";

function Projects() {
  return (
    <div className="h-[100vh] flex flex-col">
      <div className="flex items-center justify-center my-12">
        <h1 className="font-black text-5xl text-white">
          MY <span className="text-[#ffb400]">PROJECTS</span>
        </h1>
      </div>

      <div className="flex justify-center items-center text-white flex-wrap ">
        {myProjects.map((proj) => (
          <ProjectCard project={proj} key={proj.name} />
        ))}
      </div>
      <SideNav current={2} />
    </div>
  );
}

export default Projects;
