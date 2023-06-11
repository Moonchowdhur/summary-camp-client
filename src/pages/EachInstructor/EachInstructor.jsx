import React from "react";
import { AiOutlineMail } from "react-icons/ai";
import { BsFillPeopleFill } from "react-icons/bs";
const EachInstructor = ({ insructor }) => {
  console.log(insructor);
  const { _id, name, email, image } = insructor;

  return (
    <div className="border md:p-4  shadow-lg rounded-lg flex items-center justify-evenly">
      <img src={image} alt="" className="md:h-[300px] h-[200px]   rounded-xl" />
      <div className="mx-3">
        <p className="md:text-2xl text-base flex items-center gap-3 font-medium tracking-wider">
          <BsFillPeopleFill />
          Name:{name}
        </p>
        <p className="md:text-xl text-sm flex items-center gap-3 mt-3 font-medium">
          <AiOutlineMail className="text-2xl" />
          Email:{email}
        </p>
      </div>
    </div>
  );
};

export default EachInstructor;
