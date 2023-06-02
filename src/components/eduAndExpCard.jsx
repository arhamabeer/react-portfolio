import React from "react";
import { MdWork, MdCastForEducation } from "react-icons/md";
import styles from "./component.module.scss";

function EduAndExpCard({ experience }) {
  return (
    <div className="my-4">
      <div className="relative -left-4">
        <div className="bg-[#ffb400] rounded-3xl w-fit p-2">
          {!experience.type ? (
            <MdWork size={20} className="w-full" color="#fff" />
          ) : (
            <MdCastForEducation size={20} className="w-full" color="#fff" />
          )}
        </div>
      </div>
      <div className={styles.EduAndExpCard + " pl-6"}>
        <h3
          className={
            styles.EduAndExpCardYear +
            " rounded-2xl text-[11px] w-fit py-[2px] px-2"
          }
        >
          {experience.duration}
        </h3>
        <h1 className="font-bold my-2">
          <span className={styles.EduAndExpCardPos}>
            {experience.position.toUpperCase()}
          </span>
          <span className={styles.EduAndExpCardCompany}>
            {" "}
            - {experience.company.toUpperCase()}
          </span>
        </h1>
        <h4 className="text-xs">{experience.desc}</h4>
      </div>
    </div>
  );
}

export default EduAndExpCard;
