import React from "react";
import ContactInfoCard from "./contactInfoCard";

function ContactInfo() {
  return (
    <div className="w-4/12 m-3">
      <h1 className="text-2xl font-bold mb-3">DON'T BE SHY !</h1>
      <h1 className="text-sm mb-3">
        Feel free to get in touch with me. I am always open to discussing new
        projects, creative ideas or opportunities to be part of your visions.
      </h1>
      <ContactInfoCard />
    </div>
  );
}

export default ContactInfo;
