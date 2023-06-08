import React from "react";

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
  console.log(c);
  return (
    <div className="shadow-lg relative p-4 shadow-slate-100 border-2 border-violet-500 rounded-lg">
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
          <p className="text-base bg-violet-500 text-white px-2 py-3 rounded-lg font-medium absolute top-3 right-5">
            Price: ${price}
          </p>

          <p className="text-xl tracking-wider font-medium my-3">
            Instructor Name:{instructorName}
          </p>
        </div>
      </div>
    </div>
  );
};

export default EachAllClasses;
