import React from "react";
import EduAndExpCard from "./eduAndExpCard";

const edu = [
  {
    type: 1,
    duration: "2019-2022",
    desc: "I've completed my Bachelors Degree from here. I've also developed a social platforms for students and teachers to communicate with each other: CS-TALKS (fuuastcstalks.com)",
    company: "Federal Urdu University, Karachi",
    position: "BS Computer Science",
  },
];
const exp = [
  {
    type: 0,
    duration: "2021-2022",
    desc: "Worked on a Web and Mobile projects. Mobile project was for booking a meeting for a workplace. It was like a online meeting scheduler. Web project was a online hiring platform like deel. ",
    company: "Work Hall",
    position: "Software Engineer",
  },
  {
    type: 0,
    duration: "2022",
    desc: "Here I worked on different Web Apps of WEB3, Crypto trading, NFTs selling and others.",
    company: "Ashtar Global Solutions",
    position: "Associat Software Engineer",
  },
  {
    type: 0,
    duration: "2022-present",
    desc: "I've worked on a Vending Machine Software and it's mobile app to pre-reserve meals.",
    company: "BrainCrop",
    position: "Software Engineer",
  },
];
function EduAndExp() {
  return (
    <div className="h-auto">
      <div className="flex items-center justify-center mb-11">
        <h1 className="text-2xl font-bold text-white">
          EXPERIENCE & EDUCATION
        </h1>
      </div>
      <div className="text-white flex mx-2 px-28 justify-between">
        <div className=" w-[50%]">
          {exp.map((experience) => (
            <EduAndExpCard experience={experience} key={experience.company} />
          ))}
        </div>{" "}
        <div className=" w-[50%]">
          {edu.map((experience) => (
            <EduAndExpCard experience={experience} key={experience.company} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default EduAndExp;
