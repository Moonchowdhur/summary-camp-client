import React from "react";
import { AiOutlineMail } from "react-icons/ai";
import { BsFillPeopleFill } from "react-icons/bs";
const EachInstructor = ({ insructor }) => {
  console.log(insructor);
  const { _id, name, email, image } = insructor;

  return (
    <div className="border p-4 shadow-lg rounded-lg flex items-center justify-evenly">
      <img src={image} alt="" className="h-[300px]  rounded-xl" />
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
