import React from "react";
import SkillProgress from "./skillProgress";

const skills = [
  {
    skill: "HTML",
    percent: 0.85,
  },
  {
    skill: "CSS",
    percent: 0.8,
  },
  {
    skill: "SCSS",
    percent: 0.66,
  },
  {
    skill: "JAVASCRIPT",
    percent: 0.64,
  },
  {
    skill: "TYPESCRIPT",
    percent: 0.6,
  },
  {
    skill: "REACT",
    percent: 0.73,
  },
  {
    skill: "REACT NATIVE",
    percent: 0.7,
  },
  {
    skill: "C#",
    percent: 0.45,
  },
  {
    skill: ".NET CORE",
    percent: 0.4,
  },
  {
    skill: "NODE",
    percent: 0.4,
  },
];

function Skills() {
  return (
    <div>
      <div className="flex items-center justify-center mb-11">
        <h1 className="text-2xl font-bold text-white">MY SKILLS</h1>
      </div>
      <div className="flex flex-wrap px-[10%] justify-center">
        {skills.map((item) => (
          <SkillProgress data={item} />
        ))}
      </div>
    </div>
  );
}

export default Skills;
