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
    desc: "",
  });

  return (
    <div
      className={`h-[100vh] flex flex-col z-10 max-lg:mb-14 ${
        modalData.open && "h-[90vh] overflow-hidden"
      }`}
    >
      <div className="flex items-center justify-center my-12">
        <h1 className="font-black text-5xl text-white">
          MY <span className="text-[#ffb400]">PROJECTS</span>
        </h1>
      </div>

      <div className="flex justify-center items-center text-white flex-wrap ">
        {myProjects.map((proj, ind) => (
          <ProjectCard
            project={proj}
            key={proj.name + ind}
            setModalData={(e) => {
              setModalData({
                open: true,
                img: e.img,
                name: e.name,
                tech: e.tech,
                url: e.url,
                desc: e.desc,
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
