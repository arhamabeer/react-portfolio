import React from "react";
import back from "../assets/code.png";

function ProjectCard() {
  return (
    <div className="w-[370px] h-[230px] m-2 rounded-2xl cursor-pointer flex flex-col projectCard hover:bg-bgTextYellow">
      {/* <img
        src={back}
        alt="photo"
        className="w-full flex self-center rounded-2xl h-full hover:bg-bgTextYellow"
      /> */}
    </div>
  );
}

export default ProjectCard;
