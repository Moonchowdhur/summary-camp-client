import React, { useEffect, useState } from "react";
import { AiOutlineMail, AiFillDollarCircle } from "react-icons/ai";
import { BsFillPeopleFill } from "react-icons/bs";
import { MdAirlineSeatFlat } from "react-icons/md";

const PopularClass = () => {
  const [popular, setPopular] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/popularclass")
      .then((res) => res.json())
      .then((data) => setPopular(data));
  }, []);

  console.log(popular);

  return (
    <div className="grid py-5 gap-5 grid-cols-1 md:grid-cols-3">
      {popular.map((popclass) => (
        <div
          key={popclass._id}
          className="rounded-2xl shadow-lg border p-4 relative"
        >
          <img
            src={popclass.image}
            className="w-[350px] rounded-lg p-4 h-[350px]"
            alt=""
          />
          <div className="mx-3">
            <p className="md:text-2xl my-4 text-base flex items-center gap-3 font-medium tracking-wider">
              Name:{popclass.name}
            </p>
            <p className="md:text-base text-base flex items-center gap-3 font-medium tracking-wider">
              <BsFillPeopleFill />
              Instructor Name:{popclass.instructorName}
            </p>
            <p className="md:text-base text-base  flex items-center gap-3 mt-3 font-medium">
              <AiOutlineMail className="text-2xl" />
              Email:{popclass.instructorEmail}
            </p>
            <div>
              <p className="md:text-sm text-sm  flex items-center gap-3 mt-3 font-medium">
                <MdAirlineSeatFlat className="text-2xl" />
                Avaliable Seats:{popclass.seats}
              </p>
              <div>
                <p className="md:text-base text-white bg-orange-500 px-2 rounded-2xl py-2 text-base absolute top-8 right-11 flex items-center gap-1 mt-3 font-medium">
                  <AiFillDollarCircle className="text-2xl" />
                  Price:${popclass.price}
                </p>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default PopularClass;
