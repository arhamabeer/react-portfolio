import React from "react";

function ContactInfoCard({ item }) {
  return (
    <div className="flex my-4">
      <div>{item.icon}</div>
      <div>
        <h2 className=" text-gray-500 font-medium ">{item.title}</h2>
        {item.title === "LOCATION" ? (
          <h2 className="font-bold">
            Karachi, Pakistan + <span className="text-green-500">Remote</span>
          </h2>
        ) : (
          <h2 className="font-bold">{item.decs}</h2>
        )}
      </div>
    </div>
  );
}

export default ContactInfoCard;
