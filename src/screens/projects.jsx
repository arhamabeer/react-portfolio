import React from "react";
import SideNav from "../components/sideNav";

function Projects() {
  return (
    <div className="h-[100vh] flex flex-col">
      <div className="flex items-center justify-center my-12">
        <h1 className="font-black text-5xl text-white">
          MY <span className="text-[#ffb400]">PROJECTS</span>
        </h1>
      </div>

      <div className="flex justify-center items-center text-white mt-44 flex-col h-full">
        <h1 className="text-3xl h-full text-center">
          This section is under development, please revisit in a day. Thanks{" "}
        </h1>
        <SideNav current={2} />
      </div>
    </div>
  );
}

export default Projects;
