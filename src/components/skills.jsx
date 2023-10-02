import React from "react";
import SkillProgress from "./skillProgress";
import { skills } from "../projects";

function Skills() {
  return (
    <div>
      <div className="flex items-center justify-center mb-11">
        <h1 className="text-2xl font-bold text-white">MY SKILLS</h1>
      </div>
      <div className="flex flex-wrap px-[10%] max-sm:px-2 justify-center">
        {skills.map((item) => (
          <SkillProgress data={item} />
        ))}
      </div>
    </div>
  );
}

export default Skills;
