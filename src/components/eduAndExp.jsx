import React from "react";
import EduAndExpCard from "./eduAndExpCard";
import styles from "./component.module.scss";
import { edu, exp } from "../projects";

function EduAndExp() {
  return (
    <div className="h-auto">
      <div className="flex items-center justify-center mb-11 max-sm:mb-6">
        <h1 className="text-2xl font-bold text-white">
          EXPERIENCES & EDUCATION
        </h1>
      </div>
      <div className="text-white flex max-sm:flex-col mx-2 px-28 max-sm:px-6 justify-between">
        <div className=" w-[50%] max-sm:w-full">
          {exp.map((experience) => (
            <EduAndExpCard experience={experience} key={experience.company} />
          ))}
        </div>{" "}
        <hr
          className={"max-sm:flex max-sm:my-2 flex-none " + styles.seperator}
        />
        <div className=" w-[50%] max-sm:w-full">
          {edu.map((experience) => (
            <EduAndExpCard experience={experience} key={experience.company} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default EduAndExp;
