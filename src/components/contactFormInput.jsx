import React from "react";
import styles from "./component.module.scss";

function ContactFormInput({ placeholder, type }) {
  return (
    <div>
      {type ? (
        <textarea
          cols="30"
          rows="5"
          placeholder={placeholder}
          className={
            "bg-slate-500 w-full  rounded-2xl p-2 " + styles.contactFormInout
          }
        ></textarea>
      ) : (
        <input
          className={
            "bg-slate-500 w-full h-10 rounded-2xl p-2 " +
            styles.contactFormInout
          }
          type="text"
          placeholder={placeholder}
        />
      )}
    </div>
  );
}

export default ContactFormInput;
