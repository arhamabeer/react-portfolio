import React from "react";
import SideNav from "../components/sideNav";
import AboutCards from "../components/aboutCards";

const aboutCardsData = [
  { numbers: `2+`, stat: "YEARS OF EXPERIENCE" },
  { numbers: `25+`, stat: "COMPLETED PROJECTS " },
  { numbers: `5+`, stat: "HAPPY CLIENTS & COMPANIES" },
  { numbers: `10+`, stat: "RECOMMENDATIONS" },
];
function About() {
  return (
    <div className="h-auto">
      <div className="h-auto">
        <div className="flex items-center justify-center my-16">
          <h1 className="font-black text-5xl text-white">
            ABOUT <span className="text-[#ffb400]">ME</span>
          </h1>
        </div>
        <div className="text-gray-400 flex w-[90%]">
          <div className="px-16 flex flex-col w-[50%]">
            <h1 className="text-2xl font-bold mb-3 text-white">
              PERSONAL INFO
            </h1>
            <div className="flex items-start justify-between">
              <div>
                <h4 className="text-sm my-3">
                  Name:{" "}
                  <span className="font-medium text-white">Arham Abeer</span>
                </h4>
                <h4 className="text-sm my-3">
                  Age: <span className="font-medium text-white">23 Years</span>
                </h4>
                <h4 className="text-sm my-3">
                  Nationality:{" "}
                  <span className="font-medium text-white">Pakistani</span>
                </h4>
                <h4 className="text-sm my-3">
                  Experience:{" "}
                  <span className="font-medium text-white">2+ Years</span>
                </h4>
              </div>
              <div>
                <h4 className="text-sm my-3">
                  Open to Work:{" "}
                  <span className="font-medium text-green-600">Yes</span>
                </h4>
                <h4 className="text-sm my-3">
                  Email:{" "}
                  <span className="font-medium text-white">
                    avircoder@gmail.com
                  </span>
                </h4>
                <h4 className="text-sm my-3">
                  Languages:{" "}
                  <span className="font-medium text-white">Urdu, English</span>
                </h4>
                <h4 className="text-sm my-3">
                  Education:{" "}
                  <span className="font-medium text-white">
                    BS in Computer Science
                  </span>
                </h4>
              </div>
            </div>
          </div>
          <div className="w-[50%] flex flex-wrap justify-between items-center">
            {aboutCardsData.map((item, ind) => (
              <AboutCards numbers={item.numbers} stat={item.stat} />
            ))}
          </div>
        </div>
      </div>
      <SideNav current={1} />
    </div>
  );
}

export default About;