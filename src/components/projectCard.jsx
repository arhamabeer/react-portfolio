import React, { useState } from "react";
import back from "../assets/code.png";

function ProjectCard({ project, setModalData }) {
  const { name, type } = project;

  const divStyles = {
    backgroundImage: `url(${project.img})` || `url(${back})`,
  };
  return (
    <div
      className={`w-[370px] h-[230px] m-2 rounded-2xl cursor-pointer projectCard flex flex-col bg-cover bg-center bg-no-repeat max-sm:w-[80%]`}
      style={divStyles}
      onClick={() => setModalData(project)}
    >
      <div className="m-auto h-full flex flex-col rounded-2xl text-center relative projectCardInner projectCardInnerDiv w-full justify-center">
        <div className="projectCardInnerName">
          <h1 className="text-xl my-2">{type}</h1>
          <h1 className="text-2xl font-bold my-2">{name}</h1>
        </div>
        <div className="absolute bottom-0 left-0 right-0 hidden justify-center projectCardInnerDet items-center h-1/6 bg-curveBG rounded-t-md">
          <h1>Details</h1>
        </div>
      </div>
    </div>
  );
}

export default ProjectCard;
