import React from "react";
import back from "../assets/code.png";
import { Button } from "react-bootstrap";

function LandingPage() {
  return (
    <div>
      <img src={back} alt="" className="w-full h-[88vh]" />
      <div className="absolute top-[20%] ml-[5%] z-50">
        <h1 className=" text-white font-black  text-5xl">
          <span className="text-[#f7ab07]">Coding Maestro!</span> <br />{" "}
          Building <span className="text-[#f7ab07]">Bridges</span> between{" "}
          <br />
          <span className="text-[#f7ab07]">Ideas</span> &{" "}
          <span className="text-[#f7ab07]">Digital Realities</span>!
        </h1>
        <div className="flex justify-center items-center mt-4">
          <Button
            variant="warning"
            className="text-xl font-bold font-mono p-3 mx-1 bg-[#f7ab07]"
          >
            Projects
          </Button>
          <Button
            variant="outline-warning"
            className="text-xl font-bold font-mono p-3 mx-1"
          >
            Get in Touch
          </Button>
        </div>
      </div>
    </div>
  );
}

export default LandingPage;
