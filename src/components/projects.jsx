import React from "react";
import ProjectCard from "./projectCard";

function Projects() {
  return (
    <div className="flex justify-center flex-col items-center">
      <h1 className="text-5xl my-2 text-white">Projects</h1>
      <div className="flex justify-center w-[100%] flex-wrap">
        {[1, 1, 11, 1].map((proj) => (
          <ProjectCard />
        ))}
      </div>
    </div>
  );
}

export default Projects;
