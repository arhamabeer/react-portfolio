import React from "react";
import styles from "./component.module.scss";
import { AiFillHome } from "react-icons/ai";
import { FaUserAlt } from "react-icons/fa";
import { BsCollectionFill } from "react-icons/bs";
import { MdEmail } from "react-icons/md";

function SideNav({ current }) {
  return (
    <div className="flex absolute top-[25%] right-10 flex-col">
      <button
        className={
          current == 0
            ? styles.landNavBtn + " bg-[#ffb400]"
            : styles.landNavBtn + " bg-[#2b2a2a]"
        }
      >
        <AiFillHome size={20} className="w-full" color="#fff" /> <h1>Home</h1>
      </button>
      <button
        className={
          current == 1
            ? styles.landNavBtn + " bg-[#ffb400]"
            : styles.landNavBtn + " bg-[#2b2a2a]"
        }
      >
        <FaUserAlt size={20} className="w-full" color="#fff" /> <h1> About</h1>
      </button>
      <button
        className={
          current == 2
            ? styles.landNavBtn + " bg-[#ffb400]"
            : styles.landNavBtn + " bg-[#2b2a2a]"
        }
      >
        <BsCollectionFill size={20} className="w-full" color="#fff" />{" "}
        <h1> Projects</h1>
      </button>
      <button
        className={
          current == 3
            ? styles.landNavBtn + " bg-[#ffb400]"
            : styles.landNavBtn + " bg-[#2b2a2a]"
        }
      >
        <MdEmail size={20} className="w-full" color="#fff" />{" "}
        <h1>Get in Touch</h1>
      </button>
    </div>
  );
}

export default SideNav;
