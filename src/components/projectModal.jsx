import React from "react";
import styles from "./component.module.scss";
import { ImCross } from "react-icons/im";
import { RxExternalLink } from "react-icons/rx";
import { MdEmail } from "react-icons/md";
import { useNavigate } from "react-router-dom";

function ProjectModal({ modalData, hideModal }) {
  console.log(modalData);

  const navigate = useNavigate();
  return (
    <div className="projModal flex items-center absolute h-[100vh] flex-col max-[768px]:justify-center bg-projModalBg w-full p-[4%]  text-white z-500">
      <div className="bg-[#111111] h-full max-[768px]:h-[80%] w-4/5 max-[768px]:w-full rounded-lg modalShadow">
        <div className="flex w-full justify-end mb-3">
          <ImCross
            size={35}
            className="cursor-pointer bg-curveBG p-2 rounded"
            onClick={() => hideModal(false)}
          />
        </div>
        <div className="flex justify-center w-full h-[75%]">
          <div className="justify-center w-full flex max-[768px]:flex-col max-[768px]:justify-between p-3">
            <div
              className={`w-5/12 max-[768px]:w-full max-[768px]:h-[25%] overflow-y-auto hideScrollBar`}
            >
              <h1 className="font-bold text-2xl">{modalData.name}</h1>
              <h4 className="text-xs">
                {modalData.desc
                  ? modalData.desc
                      .split("\n")
                      .map((paragraph, index) => <p key={index}>{paragraph}</p>)
                  : "Description is not available right now."}
              </h4>
              <h2 className="font-bold text-xl mt-2">Technologies</h2>
              <h4 className="text-xs">{modalData.tech}</h4>
            </div>
            <div className="w-7/12 max-[768px]:w-full max-[768px]:h-[70%]  max-[768px]:mt-2 px-2">
              <img src={modalData.img} className="w-full h-full" alt="" />
            </div>
          </div>
        </div>
        <div className="flex max-[768px]:w-full max-[768px]:flex-col max-[768px]:items-center w-2/6 justify-between items-start  px-3">
          <a
            href={modalData.url !== "" && modalData.url}
            target="_blank"
            className={
              styles.landBtnAbt +
              " flex items-center max-[768px]:w-2/4 justify-center"
            }
            style={{ padding: "11px 50px 10px 25px" }}
          >
            <span>VISIT</span>
            <span
              className={styles.landBtnAbtSpan + " " + styles.projModalBtn}
              style={{ width: 45, height: 45 }}
            >
              <RxExternalLink />
            </span>
          </a>
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
              className={`${
                styles.landBtnAbtSpan +
                " " +
                styles.projModalBtn +
                " max-[768px]:text-xs"
              } `}
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
