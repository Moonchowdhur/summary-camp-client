import React, { useContext } from "react";
import { MdEventSeat } from "react-icons/md";
import { Authcontext } from "../../provider/Authprovider";
import swal from "sweetalert";
import { useLocation, useNavigate } from "react-router-dom";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import useUser from "../../hooks/useUser";

const EachAllClasses = ({ c }) => {
  const { user } = useContext(Authcontext);
  const location = useLocation();
  const navigate = useNavigate();
  const [axiosSecure] = useAxiosSecure();
  const [isUser] = useUser();
  console.log(isUser);

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

  console.log(seats, name);

  const selectClassBtn = (userdata) => {
    console.log(userdata);
    if (user && user?.email) {
      const selectedData = {
        image,
        studentName: user?.displayName,
        studentEmail: user?.email,
        selectedClassId: _id,
        instructorEmail,
        instructorName,
        name,
        price,
        seats,
        status,
      };

      axiosSecure.post("/selectedclass", selectedData).then((res) => {
        console.log(res.data);
        if (res.data.insertedId) {
          swal({
            title: "Class Selected",
            icon: "success",
          });
        }
      });
    } else {
      swal("Plase Login!", "Go to login page", "Error");
      navigate("/login", { state: { from: location } });
    }
  };

  //   console.log(c);
  return (
    <div className="shadow-lg relative p-4 shadow-slate-100 border-2 border-violet-600 rounded-lg">
      <div>
        <img
          src={image}
          className="w-[380px] h-[350px] object-cover rounded-lg"
          alt=""
        />
        <div
          className={
            seats === 0 || seats === "0" ? "bg-red-600 p-2 rounded-lg" : ""
          }
        >
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
              onClick={() => selectClassBtn(c)}
              disabled={
                isUser?.role === "instructor" ||
                isUser?.role === "admin" ||
                seats === 0
                  ? true
                  : false
              }
              className="rounded-lg btn text-base bg-violet-600 px-3 py-2 text-white font-bold"
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
