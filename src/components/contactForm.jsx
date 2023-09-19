import React, { useState } from "react";
import ContactFormInput from "./contactFormInput";
import { resp } from "../config/firebase/_index.js";

import styles from "./component.module.scss";
import { AiOutlineArrowRight } from "react-icons/ai";
import Swal from "sweetalert2";

function ContactForm() {
  const [data, setData] = useState({
    name: "",
    email: "",
    message: "",
    subject: "",
  });
  const handleSubmit = async () => {
    try {
      resp(data);
      Swal.fire({
        position: "center",
        icon: "success",
        title: "Your message has been sent",
        showConfirmButton: false,
        timer: 1500,
      });
      setData({ ...data, email: "", name: "", message: "", subject: "" });
    } catch (ex) {
      console.log("error", ex);
    }
  };
  return (
    <div className="my-4">
      <div className="flex my-2 w-full justify-between">
        <div className="w-6/12">
          <ContactFormInput
            type={0}
            data={data.name}
            placeholder={"Your Name"}
            setData={(e) =>
              setData((prev) => ({
                ...prev,
                name: e,
              }))
            }
          />
        </div>
        <div className="ml-3 w-6/12">
          <ContactFormInput
            type={0}
            data={data.email}
            placeholder={"Your Email"}
            setData={(e) =>
              setData((prev) => ({
                ...prev,
                email: e,
              }))
            }
          />
        </div>
      </div>
      <div className="my-4">
        <ContactFormInput
          type={0}
          data={data.subject}
          placeholder={"Your Subject"}
          setData={(e) =>
            setData((prev) => ({
              ...prev,
              subject: e,
            }))
          }
        />
      </div>
      <div className="my-4">
        <ContactFormInput
          type={1}
          data={data.message}
          placeholder={"Your Message"}
          setData={(e) =>
            setData((prev) => ({
              ...prev,
              message: e,
            }))
          }
        />
      </div>
      <div className="flex justify-center items-center">
        <button
          className={
            styles.landBtnAbt + " flex items-center max-lg:mt-4 max-sm:mt-0"
          }
          onClick={() => handleSubmit()}
        >
          <span>SEND MESSAGE &nbsp;</span>
          <span className={styles.landBtnAbtSpan}>
            <AiOutlineArrowRight />
          </span>
        </button>{" "}
      </div>
    </div>
  );
}

export default ContactForm;
