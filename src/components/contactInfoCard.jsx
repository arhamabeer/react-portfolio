import React from "react";
import { FaMapMarkedAlt } from "react-icons/fa";

function ContactInfoCard() {
  return (
    <div className="flex">
      <div>
        <FaMapMarkedAlt size={40} className="mx-3 " color="#ffb400" />
      </div>
      <div>
        <h2 className=" text-gray-500 font-medium ">LOCATION</h2>
        <h2 className="font-bold">
          Karachi, Pakistan + <span className="text-green-700">Remote</span>
        </h2>
      </div>
    </div>
  );
}

export default ContactInfoCard;
