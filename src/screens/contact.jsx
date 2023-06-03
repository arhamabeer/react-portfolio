import React from "react";
import SideNav from "../components/sideNav";
import ContactForm from "../components/contactForm";
import ContactInfo from "../components/contactInfo";

function Contact() {
  return (
    <div className="h-auto flex flex-col text-white">
      <div className="flex items-center justify-center my-12">
        <h1 className="font-black text-5xl text-white">
          GET IN <span className="text-[#ffb400]">TOUCH</span>
        </h1>
      </div>
      <div className="flex px-[10%] justify-between self-center">
        <ContactInfo />
        <div className="w-2/3">
          <ContactForm />
        </div>
      </div>
      <SideNav current={3} />
    </div>
  );
}

export default Contact;