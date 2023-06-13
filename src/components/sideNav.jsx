import React from "react";
import styles from "./component.module.scss";
import { AiFillHome } from "react-icons/ai";
import { FaUserAlt } from "react-icons/fa";
import { BsCollectionFill } from "react-icons/bs";
import { MdEmail } from "react-icons/md";
import { useNavigate } from "react-router-dom";

function SideNav({ current }) {
  const navigate = useNavigate();

  return (
    <div className="flex fixed top-0 z-50 right-10 m-auto bottom-0 h-fit flex-col  max-sm:rounded-t-3xl  max-sm:rounded-tr-3xl max-sm:sticky max-sm:top-auto max-sm:bottom-0 max-sm:flex-row max-sm:right-auto max-sm:justify-evenly max-sm:w-full max-sm:bg-bgGray">
      <button
        onClick={() => navigate("/")}
        className={
          current === 0
            ? styles.landNavBtn + " bg-[#ffb400]"
            : styles.landNavBtn + " bg-[#2b2a2a] max-sm:bg-[#0f0f0f]"
        }
      >
        <AiFillHome size={20} className="w-full" color="#fff" />{" "}
        <h1 className="max-sm:hidden">Home</h1>
      </button>
      <button
        onClick={() => navigate("/abt")}
        className={
          current === 1
            ? styles.landNavBtn + " bg-[#ffb400]"
            : styles.landNavBtn + " bg-[#2b2a2a] max-sm:bg-[#0f0f0f]"
        }
      >
        <FaUserAlt size={20} className="w-full" color="#fff" />{" "}
        <h1 className="max-sm:hidden"> About</h1>
      </button>
      <button
        onClick={() => navigate("/projects")}
        className={
          current === 2
            ? styles.landNavBtn + " bg-[#ffb400]"
            : styles.landNavBtn + " bg-[#2b2a2a] max-sm:bg-[#0f0f0f]"
        }
      >
        <BsCollectionFill size={20} className="w-full" color="#fff" />{" "}
        <h1 className="max-sm:hidden"> Projects</h1>
      </button>
      <button
        onClick={() => navigate("/contact")}
        className={
          current === 3
            ? styles.landNavBtn + " bg-[#ffb400]"
            : styles.landNavBtn + " bg-[#2b2a2a] max-sm:bg-[#0f0f0f]"
        }
      >
        <MdEmail size={20} className="w-full" color="#fff" />{" "}
        <h1 className="max-sm:hidden">Get in Touch</h1>
      </button>
    </div>
  );
}

export default SideNav;
