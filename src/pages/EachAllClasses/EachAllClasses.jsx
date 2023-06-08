import React from "react";
import { MdEventSeat } from "react-icons/md";

const EachAllClasses = ({ c }) => {
  const {
    image,
    _id,
    instructorEmail,
    instructorName,
    name,
    price,
    seats,
    status,
  } = c;

  const selectClassBtn = (id) => {
    console.log(id);
  };

  console.log(c);
  return (
    <div className="shadow-lg relative p-4 shadow-slate-100 border-2 border-violet-600 rounded-lg">
      <div>
        <img
          src={image}
          className="w-[380px] h-[350px] object-cover rounded-lg"
          alt=""
        />
        <div>
          <p className="text-2xl tracking-wider font-medium uppercase ">
            {name}
          </p>
          <p className="text-base bg-violet-600 text-white px-2 py-3 rounded-lg font-medium absolute top-3 right-5">
            Price: ${price}
          </p>

          <p className="text-xl tracking-wider font-medium my-3">
            Instructor Name:{instructorName}
          </p>
          <div className="flex gap-8 w-full  items-center">
            <p className="text-lg flex items-center gap-2 font-medium">
              <MdEventSeat className="text-2xl text-violet-600" />
              Available seats: {seats}
            </p>
            <button
              onClick={() => selectClassBtn(_id)}
              className="rounded-lg text-xl bg-violet-600 px-3 py-2 text-white font-bold"
            >
              Select
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EachAllClasses;
