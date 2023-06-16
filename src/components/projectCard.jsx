import React, { useState } from "react";
import back from "../assets/code.png";

function ProjectCard({ project }) {
  const { name, type } = project;
  const [hovered, setHovered] = useState(false);

  const handleMouseEnter = () => {
    setHovered(true);
  };

  const handleMouseLeave = () => {
    setHovered(false);
  };

  const divStyles = {
    backgroundImage: hovered
      ? "linear-gradient(65deg, rgba(255, 180, 0,0.7), rgba(128, 87, 18,0.2), rgba(7, 13, 31, 0.8)"
      : `url(${project.img})` || `url(${back})`,
  };
  return (
    <div
      className={`w-[370px] h-[230px] m-2 rounded-2xl cursor-pointer projectCard flex flex-col bg-cover bg-center bg-no-repeat max-sm:w-[80%]`}
      style={divStyles}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div className="m-auto h-fit flex-col text-center hidden projectCardInner">
        <h1 className="text-xl my-2">{type}</h1>
        <h1 className="text-2xl font-bold my-2">{name}</h1>
      </div>
    </div>
  );
}

export default ProjectCard;
