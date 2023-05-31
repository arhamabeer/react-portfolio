import React from "react";
import EduAndExpCard from "./eduAndExpCard";

function EduAndExp() {
  return (
    <div className="h-auto">
      <div className="flex items-center justify-center mb-11">
        <h1 className="text-2xl font-bold text-white">
          EXPERIENCE & EDUCATION
        </h1>
      </div>
      <div className="text-white">
        <div>
          <EduAndExpCard />
        </div>
        <div></div>
      </div>
    </div>
  );
}

export default EduAndExp;
