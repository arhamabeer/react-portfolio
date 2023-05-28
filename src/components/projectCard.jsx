import React from "react";
import back from "../assets/code.png";

function ProjectCard() {
  return (
    <div className="w-[560px] h-[360px] m-2 rounded-3xl flex flex-col p-3 projectCard">
      <img
        src={back}
        alt="photo"
        className="w-[100%] flex self-center  rounded-3xl h-[270px]"
      />
      <div>
        <h2 className="my-1">Project Title</h2>
        <p>Descriptions</p>
      </div>
    </div>
  );
}

export default ProjectCard;
