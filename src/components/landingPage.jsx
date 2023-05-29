import React from "react";
import back from "../assets/code.png";
import styles from "./component.module.scss";
import { AiOutlineArrowRight } from "react-icons/ai";

const open = "<>  ";
const close = "  </>";
function LandingPage() {
  return (
    <div>
      <div className="overflow-hidden h-[80vh]">
        <div className={styles.curveBG} />
        <div className={styles.landingPic + " fixed w-2/6"}>
          {/* <img src={back} alt="photo" /> */}
        </div>
        <div className="relative top-28 left-[45%] text-white">
          <span className="ml-[-40px] font-black  text-3xl text-[#f74b07]">
            {open}
          </span>
          <h1 className=" font-black text-[#f7ab07] text-5xl">
            I'M ARHAM ABEER.
          </h1>
          <h1 className="my-2  text-4xl font-black">SOFTWARE ENGINEER</h1>
          <span className="ml-[-40px] text-[#f74b07] font-black  text-3xl ">
            {close}
          </span>

          <h4 className="text-xl mt-3">
            <span className="text-[#f7ab07] font-bold text-2xl">
              Coding Maestro!
            </span>
            <br />
            Building <span className="text-[#f7ab07]">
              Bridges
            </span> between <span className="text-[#f7ab07]">Ideas</span> &{" "}
            {` `}
            <span className="text-[#f7ab07]">Digital Realities</span>!
          </h4>
          <div>
            <button className={styles.landBtnAbt + " flex items-center mt-3"}>
              <span>ABOUT ME &nbsp;</span>
              <span className={styles.landBtnAbtSpan}>
                <AiOutlineArrowRight />
              </span>
            </button>
          </div>
        </div>
      </div>
      <div></div>
    </div>
  );
}

export default LandingPage;
