import React, { useState } from "react";
import SideNav from "../components/sideNav";
import ProjectCard from "../components/projectCard";
import { myProjects } from "../projects";
import ProjectModal from "../components/projectModal";

function Projects() {
  const [modalData, setModalData] = useState({
    open: false,
    img: "",
    name: "",
    tech: "",
    url: "",
  });

  return (
    <div
      className={`h-[100vh] flex flex-col z-10 ${
        modalData.open && "overflow-hidden"
      }`}
    >
      <div className="flex items-center justify-center my-12">
        <h1 className="font-black text-5xl text-white">
          MY <span className="text-[#ffb400]">PROJECTS</span>
        </h1>
      </div>

      <div className="flex justify-center items-center text-white flex-wrap ">
        {myProjects.map((proj) => (
          <ProjectCard
            project={proj}
            key={proj.name}
            setModalData={(e) => {
              setModalData({
                open: true,
                img: e.img,
                name: e.name,
                tech: e.tech,
                url: e.url,
              });
            }}
          />
        ))}
      </div>
      <SideNav current={2} />
      {modalData.open && (
        <ProjectModal
          modalData={modalData}
          hideModal={(val) =>
            setModalData((prev) => ({
              ...prev,
              open: val,
            }))
          }
        />
      )}
    </div>
  );
}

export default Projects;
