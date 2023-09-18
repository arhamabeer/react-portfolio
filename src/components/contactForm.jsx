import React, { useState } from "react";
import ContactFormInput from "./contactFormInput";

import styles from "./component.module.scss";
import { AiOutlineArrowRight } from "react-icons/ai";

function ContactForm() {
  const [data, setData] = useState({
    name: "",
    email: "",
    message: "",
    subject: "",
  });
  const handleSubmit = async () => {
    try {
      var { email, message, name, subject } = data;
      const resp = await fetch(
        "https://v1.nocodeapi.com/arhamabeer/google_sheets/xFaQponzymHukibi?tabId=Sheet1",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify([
            [name, email, subject, message, new Date().toLocaleString()],
          ]),
        }
      );
      await resp.json();
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
