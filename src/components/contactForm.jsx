import React, { useEffect, useState } from "react";
import ContactFormInput from "./contactFormInput";
import { resp } from "../config/firebase/_index.js";

import styles from "./component.module.scss";
import { AiOutlineArrowRight } from "react-icons/ai";
import Swal from "sweetalert2";
import { email_regex, letter_regex } from "../constants";

const email_ERR = "Invalid email";
const msg_ERR = "Only letters are allowed";

function ContactForm() {
  const [data, setData] = useState({
    name: "",
    email: "",
    message: "",
    subject: "",
  });
  const [errors, setErrors] = useState({
    email: false,
    message: false,
    subject: false,
    name: false,
  });

  useEffect(() => {
    if (email_regex.test(data.email) && data.email !== "") {
      setErrors((prev) => ({
        ...prev,
        email: false,
      }));
    } else {
      setErrors((prev) => ({
        ...prev,
        email: true,
      }));
    }
    if (letter_regex.test(data.message) && data.message !== "") {
      setErrors((prev) => ({
        ...prev,
        message: false,
      }));
    } else {
      setErrors((prev) => ({
        ...prev,
        message: true,
      }));
    }

    console.log("errors");
  }, [data]);

  console.log(errors);
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
          <p
            className={`text-red-500 text-xs pl-2 ${
              errors.message ? "flex" : "hidden"
            }`}
          >
            *{msg_ERR}
          </p>
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
          <p
            className={`text-red-500 text-xs pl-2 ${
              errors.message ? "flex" : "hidden"
            }`}
          >
            *{email_ERR}
          </p>
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
        <p
          className={`text-red-500 text-xs pl-2 ${
            errors.message ? "flex" : "hidden"
          }`}
        >
          *{msg_ERR}
        </p>
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
        <p
          className={`text-red-500 text-xs pl-2 ${
            errors.message ? "flex" : "hidden"
          }`}
        >
          *{msg_ERR}
        </p>
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
