import React from "react";
import { AiOutlineMail } from "react-icons/ai";
import { BsFillPeopleFill } from "react-icons/bs";
const EachInstructor = ({ insructor }) => {
  console.log(insructor);
  const { _id, name, email } = insructor;
  return (
    <div className="border p-4 shadow-lg rounded-lg flex items-center justify-evenly">
      <img
        src="https://images.unsplash.com/photo-1584043720379-b56cd9199c94?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=387&q=80"
        alt=""
        className="h-[300px] rounded-xl"
      />
      <div>
        <p className="text-2xl flex items-center gap-3 font-medium tracking-wider">
          <BsFillPeopleFill />
          Name:{name}
        </p>
        <p className="text-xl flex items-center gap-3 mt-3 font-medium">
          <AiOutlineMail className="text-2xl" />
          Email:{email}
        </p>
      </div>
    </div>
  );
};

export default EachInstructor;
