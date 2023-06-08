import React, { useContext } from "react";
import { MdEventSeat } from "react-icons/md";
import { Authcontext } from "../../provider/Authprovider";
import swal from "sweetalert";
import { useNavigate } from "react-router-dom";
import useAxiosSecure from "../../hooks/useAxiosSecure";

const EachAllClasses = ({ c }) => {
  const { user } = useContext(Authcontext);
  const navigate = useNavigate();
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
  } = c;

  const selectClassBtn = (userdata) => {
    console.log(userdata);
    // if (!user) {
    //   swal("Plase Login!", "", "Error");
    //   navigate("/login");
    //   return
    // }
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
    console.log(selectedData);
    axiosSecure.post("/selectedclass", selectedData).then((res) => {
      console.log(res.data);
      if (res.data.insertedId) {
        swal({
          title: "Class Selected",
          icon: "success",
        });
      }
    });
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
              onClick={() => selectClassBtn(c)}
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
