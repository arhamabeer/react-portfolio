import React from "react";
import aaa from "../assets/aaa-black.png";
import styles from "./component.module.scss";
import { AiOutlineArrowRight, AiFillHome } from "react-icons/ai";
import { FaUserAlt } from "react-icons/fa";
import { BsCollectionFill } from "react-icons/bs";
import { MdEmail } from "react-icons/md";

const open = "<>  ";
const close = "  </>";
function LandingPage() {
  return (
    <div>
      <div className="overflow-hidden h-[80vh]">
        <div className={styles.curveBG} />
        <div className={styles.landingPic + " fixed w-2/6"}>
          <img src={aaa} alt="photo" className="h-full" />
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
            <button className={styles.landBtnAbt + " flex items-center mt-4"}>
              <span>ABOUT ME &nbsp;</span>
              <span className={styles.landBtnAbtSpan}>
                <AiOutlineArrowRight />
              </span>
            </button>
          </div>
        </div>
      </div>
      <div className="flex absolute top-[20%] right-10 flex-col">
        <button className={styles.landNavBtn}>
          <AiFillHome size={20} className="w-full" color="#fff" /> <h1>Home</h1>
        </button>
        <button className={styles.landNavBtn}>
          <FaUserAlt size={20} className="w-full" color="#fff" />{" "}
          <h1> About</h1>
        </button>
        <button className={styles.landNavBtn}>
          <BsCollectionFill size={20} className="w-full" color="#fff" />{" "}
          <h1> Projects</h1>
        </button>
        <button className={styles.landNavBtn}>
          <MdEmail size={20} className="w-full" color="#fff" />{" "}
          <h1>Get in Touch</h1>
        </button>
      </div>
    </div>
  );
}

export default LandingPage;
