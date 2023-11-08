import React from "react";
import aaa from "../assets/avat1.png";
import styles from "./component.module.scss";
import { AiOutlineArrowRight } from "react-icons/ai";
import SideNav from "./sideNav";
import { useNavigate } from "react-router-dom";

const open = "<>  ";
const close = "  </>";
function LandingPage() {
  const navigate = useNavigate();

  return (
    <div>
      <div className="overflow-hidden max-md:flex max-md:flex-col h-[100vh]">
        <div className={"max-md:hidden " + styles.curveBG} />
        <div
          className={
            styles.landingPic +
            " fixed w-2/6 max-md: flex self-center max-md:p-4"
          }
        >
          <img src={aaa} alt="avatarphoto" className="h-full" />
        </div>
        <div className="relative top-28 left-[45%] max-md:top-14 text-white max-md:left-0 max-md:items-center max-md:flex max-md:flex-col ">
          <span className="ml-[-40px] font-black  text-3xl hidden text-[#f74b07]">
            {open}
          </span>
          <h1
            className={`font-black text-[#f7ab07] text-5xl max-md:text-3xl ${styles.textStroke}`}
          >
            I'M ARHAM ABEER.
          </h1>
          <h1 className="my-2  text-[#f7ab07] text-4xl max-md:text-2xl font-black">
            SOFTWARE ENGINEER
          </h1>
          <span className="ml-[-40px] text-[#f74b07] font-black  text-3xl hidden ">
            {close}
          </span>

          <h4 className="text-xl max-md:text-base mt-3 max-md:text-center">
            <span className="text-[#f7ab07] font-bold text-2xl max-md:text-lg">
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
            <button
              onClick={() => navigate("/abt")}
              className={styles.landBtnAbt + " flex items-center mt-4"}
            >
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
