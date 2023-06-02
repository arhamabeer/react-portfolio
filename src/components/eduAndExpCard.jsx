import React from "react";
import { MdWork } from "react-icons/md";
import styles from "./component.module.scss";
function EduAndExpCard() {
  return (
    <div className="my-4 w-[45%]">
      <div className="relative -left-4">
        <div className="bg-[#ffb400] rounded-3xl w-fit p-2">
          <MdWork size={20} className="w-full" color="#fff" />
        </div>
      </div>
      <div className={styles.EduAndExpCard + " pl-3"}>
        <h3
          className={
            styles.EduAndExpCardYear +
            " rounded-2xl text-[11px] w-fit py-[2px] px-1"
          }
        >
          2020-2021
        </h3>
        <h1 className="font-bold my-2">
          <span className={styles.EduAndExpCardPos}>WEB DEVELOPER</span>
          <span className={styles.EduAndExpCardCompany}> - BRAINCROP</span>
        </h1>
        <h4 className="text-xs">
          Lorem, ipsum dolor sit amet consectetur adipisicing text-2xl font-bold
          mb-3 text-whitetext-2xl font-bold mb-3 text-whitetext-2xl font-bold
        </h4>
      </div>
    </div>
  );
}

export default EduAndExpCard;
