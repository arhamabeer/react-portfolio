import React from "react";
import styles from "./component.module.scss";

function ContactFormInput({ placeholder, data, type, setData }) {
  return (
    <div>
      {type ? (
        <textarea
          cols="30"
          rows="5"
          placeholder={placeholder}
          onChange={(e) => setData(e.target.value)}
          value={data}
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
          onChange={(e) => setData(e.target.value)}
          type="text"
          value={data}
          placeholder={placeholder}
        />
      )}
    </div>
  );
}

export default ContactFormInput;
