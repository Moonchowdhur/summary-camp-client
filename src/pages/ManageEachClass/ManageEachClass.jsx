import React, { useState } from "react";
import { MdEventSeat } from "react-icons/md";
import { AiFillDollarCircle } from "react-icons/ai";
import useAxiosSecure from "../../hooks/useAxiosSecure";
const ManageEachClass = ({ eachClass, refetch }) => {
  const [sta, setSta] = useState("pending");
  const [isDisabled, setIsDisabled] = useState(false);
  const [axiosSecure] = useAxiosSecure();

  const {
    image,
    _id,
    instructorEmail,
    instructorName,
    name,
    price,
    seats,
    status,
  } = eachClass;

  // const handleApproveBtn = (id) => {
  //   console.log(id);
  //   setSta("approved");
  //   setIsDisabled(true);
  // };

  const handleApproveBtn = (id) => {
    fetch(`http://localhost:5000/class-approved/${id}`, {
      method: "PATCH",
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.modifiedCount > 0) {
          refetch();
          setSta("approved");
          setIsDisabled(true);
          swal("Class is approved now");
        }
      });
  };

  const handleDenyBtn = (id) => {
    fetch(`http://localhost:5000/class-denied/${id}`, {
      method: "PATCH",
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.modifiedCount > 0) {
          refetch();
          setSta("denied");
          setIsDisabled(true);
          swal("Class is denied now");
        }
      });
  };

  const handleFeedbackBtn = (id) => {
    console.log(id);
    swal("Write Feedback here:", {
      content: "input",
    }).then((result) => {
      swal(`Feedback: ${result}`);
      const feedback = result;
      console.log({ feedback });
      axiosSecure
        .patch(`/classes/add-feedback/${id}`, { feedback })
        .then((res) => {
          console.log(res.data);
          if (res.data.modifiedCount > 0) {
            swal({
              title: "Feedback Updated",
              icon: "success",
            });
          }
        });
    });
  };

  return (
    <div className="shadow-lg relative p-4 shadow-slate-100 border-2 border-violet-600 rounded-lg">
      <div>
        <img
          src={image}
          className="w-[380px] h-[350px] object-cover rounded-lg"
          alt=""
        />
        <div>
          <p className="text-2xl my-5 tracking-wider font-medium uppercase ">
            {name}
          </p>
          <p className="text-base bg-violet-600 text-white px-2 py-3 rounded-lg font-medium absolute top-3 right-5">
            Price: ${price}
          </p>

          <p className="text-xl tracking-wider font-medium my-3">
            Instructor Name:{instructorName}
          </p>
          <p className="text-xl tracking-wider font-medium my-3">
            Instructor Email:{instructorEmail}
          </p>
          <div className="flex gap-8 w-full  items-center">
            <p className="text-lg flex items-center gap-2 font-medium">
              <MdEventSeat className="text-2xl text-violet-600" />
              Available seats: {seats}
            </p>
            <p className="text-lg flex items-center gap-2 font-medium">
              <AiFillDollarCircle className="text-2xl text-violet-600" />
              Price: ${price}
            </p>
          </div>
          <div className=" flex gap-2 items-center">
            <p className="rounded-lg my-5 text-sm bg-violet-600 px-3 py-2 text-white font-bold">
              Status: {status}
            </p>
            <button
              onClick={() => handleApproveBtn(_id)}
              disabled={status === "pending" ? false : true}
              className={`btn rounded-lg my-5 text-sm bg-orange-600 px-3 py-2 text-white font-bold `}
            >
              Approved
            </button>
            <button
              onClick={() => handleDenyBtn(_id)}
              disabled={status === "pending" ? false : true}
              className={`btn rounded-lg my-5 text-sm bg-orange-600 px-3 py-2 text-white font-bold`}
            >
              Denied
            </button>
            <button
              onClick={() => handleFeedbackBtn(_id)}
              className={`btn rounded-lg my-5 text-sm bg-orange-600 px-3 py-2 text-white font-bold`}
            >
              Feedback
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ManageEachClass;
