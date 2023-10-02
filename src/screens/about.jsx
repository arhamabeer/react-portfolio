import React from "react";
import SideNav from "../components/sideNav";
import EduAndExp from "../components/eduAndExp";
import PersonalInfo from "../components/personalInfo";
import styles from "./screens.module.scss";
import Skills from "../components/skills";
import { aboutCardsData } from "../projects";

function About() {
  return (
    <div className="h-auto flex flex-col max-lg:mb-14">
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
