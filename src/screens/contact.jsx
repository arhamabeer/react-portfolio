import React from "react";
import SideNav from "../components/sideNav";
import styles from "./screens.module.scss";
import { FaMapMarkedAlt } from "react-icons/fa";
import ContactForm from "../components/contactForm";

function Contact() {
  return (
    <div className="h-auto flex flex-col text-white">
      <div className="flex items-center justify-center my-16">
        <h1 className="font-black text-5xl text-white">
          GET IN <span className="text-[#ffb400]">TOUCH</span>
        </h1>
      </div>
      <div className="flex">
        <div className="w-4/12 m-3">
          <h1 className="text-2xl font-bold mb-3">DON'T BE SHY !</h1>
          <h1 className="text-sm mb-3">
            Feel free to get in touch with me. I am always open to discussing
            new projects, creative ideas or opportunities to be part of your
            visions.
          </h1>
          <div className="flex">
            <div>
              <FaMapMarkedAlt size={40} className="mx-3 " color="#ffb400" />
            </div>
            <div>
              <h2 className=" text-gray-500 font-medium ">LOCATION</h2>
              <h2 className="font-bold">
                Karachi, Pakistan +{" "}
                <span className="text-green-700">Remote</span>
              </h2>
            </div>
          </div>
        </div>
        <div className="w-2/3">
          <ContactForm />
        </div>
      </div>
      <SideNav current={3} />
    </div>
  );
}

export default Contact;
