import React from "react";
import styles from "./component.module.scss";
import { ImCross } from "react-icons/im";
import { RxExternalLink } from "react-icons/rx";
import { MdEmail } from "react-icons/md";
import { useNavigate } from "react-router-dom";

function ProjectModal({ modalData, hideModal }) {
  const navigate = useNavigate();
  return (
    <div className="projModal flex items-center absolute h-[100vh] flex-col max-[768px]:justify-center bg-projModalBg w-full p-[4%] text-white z-50">
      <div className="bg-[#111111] h-full max-[768px]:h-[80%] w-4/5 max-[768px]:w-full rounded-lg modalShadow">
        <div className="flex w-full justify-end mb-3">
          <ImCross
            size={35}
            className="cursor-pointer bg-curveBG p-2 rounded"
            onClick={() => hideModal(false)}
          />
        </div>
        <div className="flex justify-center h-4/6">
          <div className="justify-center flex max-[768px]:flex-col p-3">
            <div
              className={`w-2/6 max-[768px]:w-full overflow-y-auto hideScrollBar`}
            >
              <h1 className="font-bold text-2xl">{modalData.name}</h1>
              <h4 className="text-xs">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum
                incidunt nisi veniam dolorem dolorum eveniet, corporis
                obcaecati. Ipsum, illo perferendis hic blanditiis eligendi illum
                dolores, adipisci saepe distinctio, odio sequi!
              </h4>
              <h2 className="font-bold text-xl mt-2">Technologies</h2>
              <h4 className="text-xs">{modalData.tech}</h4>
            </div>
            <div className="w-4/6 max-[768px]:w-full  max-[768px]:mt-2 px-2">
              <img src={modalData.img} className="w-full h-full" alt="" />
            </div>
          </div>
        </div>
        <div className="flex max-[768px]:w-full max-[768px]:flex-col max-[768px]:items-center w-2/6 justify-between items-start  px-3">
          <button
            //   onClick={() => navigate("/abt")}
            className={
              styles.landBtnAbt +
              " flex items-center max-[768px]:w-2/4 justify-center"
            }
            style={{ padding: "11px 50px 10px 25px" }}
          >
            <span>VISIT</span>
            <span
              className={styles.landBtnAbtSpan}
              style={{ width: 45, height: 45 }}
            >
              <RxExternalLink />
            </span>
          </button>
          <button
            onClick={() => navigate("/contact")}
            className={
              styles.landBtnAbt +
              " flex items-center max-[768px]:w-2/4 max-[768px]:mt-2"
            }
            style={{ padding: "11px 50px 10px 25px" }}
          >
            <span>CONTACT ME</span>
            <span
              className={`${styles.landBtnAbtSpan + " max-[768px]:text-xs"}`}
              style={{ width: 45, height: 45 }}
            >
              <MdEmail />
            </span>
          </button>
        </div>
      </div>
    </div>
  );
}

export default ProjectModal;
