import React from "react";
import SideNav from "../components/sideNav";
import EduAndExp from "../components/eduAndExp";
import PersonalInfo from "../components/personalInfo";
import styles from "./screens.module.scss";
import Skills from "../components/skills";

const aboutCardsData = [
  { numbers: `2+`, stat: "YEARS OF EXPERIENCE" },
  { numbers: `25+`, stat: "COMPLETED PROJECTS " },
  { numbers: `5+`, stat: "HAPPY CLIENTS & COMPANIES" },
  { numbers: `10+`, stat: "RECOMMENDATIONS" },
];
function About() {
  return (
    <div className="h-auto flex flex-col">
      <PersonalInfo aboutCardsData={aboutCardsData} />
      <hr className={styles.seperator} />
      <Skills />
      <hr className={styles.seperator} />
      <EduAndExp />
      <SideNav current={1} />
    </div>
  );
}

export default About;
