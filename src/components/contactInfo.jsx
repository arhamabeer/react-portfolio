import React from "react";
import ContactInfoCard from "./contactInfoCard";
import {
  FaFacebookF,
  FaGithub,
  FaInstagram,
  FaLinkedinIn,
  FaMapMarkedAlt,
  FaTwitter,
} from "react-icons/fa";
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
      <div className="flex mt-10">
        <a
          href="https://www.facebook.com/arham.aaa"
          target="_blank"
          rel="noreferrer"
        >
          <FaFacebookF
            size={25}
            className="cursor-pointer mr-3 "
            color="#ffb400"
          />
        </a>
        <a
          href="https://www.github.com/arhamabeer"
          target="_blank"
          rel="noreferrer"
        >
          <FaGithub
            size={25}
            className="cursor-pointer mr-3 "
            color="#ffb400"
          />
        </a>
        <a
          href="https://www.twitter.com/ArhamAbeer_"
          target="_blank"
          rel="noreferrer"
        >
          <FaTwitter
            size={25}
            className="cursor-pointer mr-3 "
            color="#ffb400"
          />
        </a>
        <a
          href="https://www.linkedin.com/in/arhamabeer"
          target="_blank"
          rel="noreferrer"
        >
          <FaLinkedinIn
            size={25}
            className="cursor-pointer mr-3 "
            color="#ffb400"
          />
        </a>
        <a
          href="https://www.instagram.com/arham.abeer"
          target="_blank"
          rel="noreferrer"
        >
          <FaInstagram
            size={25}
            className="cursor-pointer mr-3 "
            color="#ffb400"
          />
        </a>
      </div>
    </div>
  );
}

export default ContactInfo;
