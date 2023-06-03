import React from "react";
import ContactInfoCard from "./contactInfoCard";
import { FaMapMarkedAlt } from "react-icons/fa";
import { HiMailOpen } from "react-icons/hi";

const contacts = [
  {
    title: "LOCATION",
    decs: "Karachi, Pakistan + Remote",
    icon: <FaMapMarkedAlt size={35} className="mr-3 " color="#ffb400" />,
  },
  {
    title: "EMAIL ME",
    decs: "avircoder@gmail.com",
    icon: <HiMailOpen size={35} className="mr-3 " color="#ffb400" />,
  },
];

function ContactInfo() {
  return (
    <div className="w-4/12 m-3">
      <h1 className="text-2xl font-bold mb-3">DON'T BE SHY !</h1>
      <h1 className="text-sm mb-3">
        Feel free to get in touch with me. I am always open to discussing new
        projects, creative ideas or opportunities to be part of your visions.
      </h1>
      {contacts.map((item) => (
        <ContactInfoCard item={item} />
      ))}
    </div>
  );
}

export default ContactInfo;
