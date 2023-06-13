import React from "react";
import aaa from "../assets/aaa-black.png";
import styles from "./component.module.scss";
import { AiOutlineArrowRight } from "react-icons/ai";
import SideNav from "./sideNav";

const open = "<>  ";
const close = "  </>";
function LandingPage() {
  return (
    <div>
      <div className="overflow-hidden max-sm:flex max-sm:flex-col h-[100vh]">
        <div className={"max-sm:hidden " + styles.curveBG} />
        <div
          className={
            styles.landingPic +
            " fixed w-2/6 max-sm: flex self-center //max-sm:hidden"
          }
        >
          <img src={aaa} alt="photo" className="h-full" />
        </div>
        <div className="relative top-28 left-[45%] text-white max-sm:left-0 max-sm:items-center max-sm:flex max-sm:flex-col ">
          <span className="ml-[-40px] font-black  text-3xl hidden text-[#f74b07]">
            {open}
          </span>
          <h1 className=" font-black text-[#f7ab07] text-5xl max-sm:text-3xl">
            I'M ARHAM ABEER.
          </h1>
          <h1 className="my-2  text-4xl max-sm:text-2xl font-black">
            SOFTWARE ENGINEER
          </h1>
          <span className="ml-[-40px] text-[#f74b07] font-black  text-3xl hidden ">
            {close}
          </span>

          <h4 className="text-xl max-sm:text-base mt-3 max-sm:text-center">
            <span className="text-[#f7ab07] font-bold text-2xl max-sm:text-lg">
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
            <button className={styles.landBtnAbt + " flex items-center mt-4"}>
              <span>ABOUT ME &nbsp;</span>
              <span className={styles.landBtnAbtSpan}>
                <AiOutlineArrowRight />
              </span>
            </button>
          </div>
        </div>
      </div>
      <SideNav current={0} />
    </div>
  );
}

export default LandingPage;
