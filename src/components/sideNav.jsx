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
    <div className="flex fixed top-0 z-50 right-10 max-lg:right-4 m-auto bottom-0 h-fit flex-col  max-md:rounded-t-3xl  max-md:rounded-tr-3xl max-md:sticky max-md:top-auto max-md:bottom-0 max-md:flex-row max-md:right-auto max-md:justify-evenly max-md:w-full max-md:bg-bgGray">
      <button
        onClick={() => navigate("/")}
        className={
          current === 0
            ? styles.landNavBtn + " bg-[#ffb400]"
            : styles.landNavBtn + " bg-[#2b2a2a] max-md:bg-[#0f0f0f]"
        }
      >
        <AiFillHome size={20} className="w-full" color="#fff" />{" "}
        <h1 className="max-md:hidden">Home</h1>
      </button>
      <button
        onClick={() => navigate("/abt")}
        className={
          current === 1
            ? styles.landNavBtn + " bg-[#ffb400]"
            : styles.landNavBtn + " bg-[#2b2a2a] max-md:bg-[#0f0f0f]"
        }
      >
        <FaUserAlt size={20} className="w-full" color="#fff" />{" "}
        <h1 className="max-md:hidden"> About</h1>
      </button>
      <button
        onClick={() => navigate("/projects")}
        className={
          current === 2
            ? styles.landNavBtn + " bg-[#ffb400]"
            : styles.landNavBtn + " bg-[#2b2a2a] max-md:bg-[#0f0f0f]"
        }
      >
        <BsCollectionFill size={20} className="w-full" color="#fff" />{" "}
        <h1 className="max-md:hidden"> Projects</h1>
      </button>
      <button
        onClick={() => navigate("/contact")}
        className={
          current === 3
            ? styles.landNavBtn + " bg-[#ffb400]"
            : styles.landNavBtn + " bg-[#2b2a2a] max-md:bg-[#0f0f0f]"
        }
      >
        <MdEmail size={20} className="w-full" color="#fff" />{" "}
        <h1 className="max-md:hidden">Get in Touch</h1>
      </button>
    </div>
  );
}

export default SideNav;
