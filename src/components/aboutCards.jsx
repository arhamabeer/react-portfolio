import React from "react";
import styles from "./component.module.scss";

function AboutCards({ numbers, stat }) {
  return (
    <div
      className={
        "w-[45%] py-3 px-10 m-2 border rounded-md max-sm:h-48 max-sm:px-3 max-md:w-full max-sm:w-[45%] break-all " +
        styles.abtCard
      }
    >
      <h1 className="text-5xl font-extrabold my-2 text-[#ffb400]">{numbers}</h1>
      <h4 className="text-xl text-white font-semibold">- {stat}</h4>
    </div>
  );
}

export default AboutCards;
