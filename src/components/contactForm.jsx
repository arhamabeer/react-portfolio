import React from "react";
import ContactFormInput from "./contactFormInput";

function ContactForm() {
  return (
    <div className="my-4 w-3/4">
      <div className="flex my-2 w-full justify-between">
        <div className="w-6/12">
          <ContactFormInput type={0} placeholder={"Your Name"} />
        </div>
        <div className="ml-3 w-6/12">
          <ContactFormInput type={0} placeholder={"Your Email"} />
        </div>
      </div>
      <div className="my-4">
        <ContactFormInput type={0} placeholder={"Your Subject"} />
      </div>
      <div className="my-4">
        <ContactFormInput type={1} placeholder={"Your Message"} />
      </div>
    </div>
  );
}

export default ContactForm;
