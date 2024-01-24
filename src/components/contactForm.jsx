import React, { useState } from "react";
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
    email: true,
    message: true,
    subject: true,
    name: true,
  });

  const handleSubmit = async () => {
    let { email, message, name, subject } = errors;
    if (
      !email &&
      !message &&
      !name &&
      !subject &&
      data.email !== "" &&
      data.name !== "" &&
      data.subject !== "" &&
      data.message !== ""
    ) {
      try {
        const _res = await resp(data);
        if (_res === 200) {
          Swal.fire({
            position: "center",
            icon: "success",
            title: "Your message has been sent",
            showConfirmButton: false,
            timer: 1500,
          });
          setData({ ...data, email: "", name: "", message: "", subject: "" });
        } else {
          Swal.fire({
            position: "center",
            icon: "error",
            title:
              "Failed to send message. Try to send mail directly to my email.",
            showConfirmButton: true,
          });
        }
      } catch (ex) {
        Swal.fire({
          position: "center",
          icon: "error",
          title:
            "Failed to send message. Try to send mail directly to my email.",
          showConfirmButton: true,
        });
      }
    } else {
      Swal.fire({
        position: "center",
        icon: "error",
        title: "Try to submit without errors",
        showConfirmButton: false,
        timer: 1500,
      });
    }
  };
  return (
    <div className="my-4">
      <div className="flex my-2 w-full justify-between">
        <div className="w-6/12">
          <ContactFormInput
            blur={(e) => {
              if (e !== "" && !letter_regex.test(e))
                setErrors({ ...errors, name: true });
            }}
            focus={() => setErrors({ ...errors, name: false })}
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
              errors.name && data.name !== "" ? "flex" : "hidden"
            }`}
          >
            *{msg_ERR}
          </p>
        </div>
        <div className="ml-3 w-6/12">
          <ContactFormInput
            blur={(e) => {
              if (e !== "" && !email_regex.test(e))
                setErrors({ ...errors, email: true });
            }}
            focus={() => setErrors({ ...errors, email: false })}
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
              errors.email && data.email !== "" ? "flex" : "hidden"
            }`}
          >
            *{email_ERR}
          </p>
        </div>
      </div>
      <div className="my-4">
        <ContactFormInput
          blur={(e) => {
            if (e !== "" && !letter_regex.test(e))
              setErrors({ ...errors, subject: true });
          }}
          type={0}
          data={data.subject}
          focus={() => setErrors({ ...errors, subject: false })}
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
            errors.subject && data.subject !== "" ? "flex" : "hidden"
          }`}
        >
          *{msg_ERR}
        </p>
      </div>
      <div className="my-4">
        <ContactFormInput
          blur={(e) => {
            if (e !== "" && !letter_regex.test(e))
              setErrors({ ...errors, message: true });
          }}
          type={1}
          data={data.message}
          focus={() => setErrors({ ...errors, message: false })}
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
            errors.message && data.message !== "" ? "flex" : "hidden"
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
