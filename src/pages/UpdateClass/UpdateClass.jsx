import React, { useContext } from "react";
import { useLoaderData } from "react-router-dom";
import { Authcontext } from "../../provider/Authprovider";
import useAxiosSecure from "../../hooks/useAxiosSecure";

const UpdateClass = () => {
  const { user } = useContext(Authcontext);
  const [axiosSecure] = useAxiosSecure();
  const eachClassData = useLoaderData();
  const { image, name, seats, price, _id } = eachClassData;
  console.log(eachClassData.image);

  const handleUpdateBtn = (event) => {
    event.preventDefault();
    const price = event.target.price.value;
    const seats = event.target.seats.value;

    const updatedData = {
      price: parseFloat(price),
      seats: parseFloat(seats),
    };
    console.log(updatedData);
    axiosSecure.patch(`/classes/${_id}`, updatedData).then((res) => {
      console.log(res.data);
      if (res.data.modifiedCount > 0) {
        swal({
          title: "Class Updated",
          icon: "success",
        });
      }
    });
  };

  return (
    <form onSubmit={handleUpdateBtn}>
      <div className="w-full">
        <h2 className=" text-3xl mx-4 text-center my-5 font-bold underline">
          Update a Class
        </h2>
        {/* 1st part */}
        <div className="flex my-5  gap-8  w-full items-center">
          <div className="w-full mx-5  ">
            <label className="label">
              <span className="label-text font-medium font-base">Name</span>
            </label>
            <input
              type="text"
              defaultValue={name}
              disabled
              placeholder="name"
              className="input input-bordered w-full "
            />
          </div>
          {/* <div className="form-control mx-5 md:w-1/2 ">
            <label className="label">
              <span className="label-text  font-medium  font-base">
                Class Image
              </span>
            </label>
            <input
              name="img"
              defaultValue={image}
              disabled
              type="file"
              className="file-input file-input-bordered w-full max-w-xs"
            />
          </div> */}
        </div>
        {/* 2nd part */}
        <div className="flex my-5  gap-8  w-full items-center">
          <div className="w-full mx-5 md:w-1/2 ">
            <label className="label">
              <span className="label-text  font-medium  font-base">
                Instructor Name
              </span>
            </label>
            <input
              type="text"
              defaultValue={user?.displayName}
              readOnly
              disabled
              name="instructorname"
              placeholder="Enter Instructor Name"
              className="input input-bordered w-full "
            />
          </div>
          <div className="w-full mx-5 md:w-1/2 ">
            <label className="label">
              <span className="label-text  font-medium  font-base">
                Instructor Email
              </span>
            </label>
            <input
              type="email"
              defaultValue={user?.email}
              readOnly
              disabled
              name="email"
              placeholder="Enter Instructor Email"
              className="input input-bordered w-full "
            />
          </div>
        </div>
        {/* 2nd part end */}
        {/* 3rd part start */}
        <div className="flex my-5  gap-8  w-full items-center">
          <div className="w-full mx-5 md:w-1/2 ">
            <label className="label">
              <span className="label-text  font-medium  font-base">
                Available Seats
              </span>
            </label>
            <input
              type="text"
              defaultValue={seats}
              name="seats"
              placeholder="Enter Available Seats"
              className="input input-bordered w-full "
            />
          </div>
          <div className="w-full mx-5 md:w-1/2 ">
            <label className="label">
              <span className="label-text  font-medium  font-base">Price</span>
            </label>
            <input
              type="text"
              name="price"
              defaultValue={price}
              placeholder="Enter Price"
              className="input input-bordered w-full "
            />
          </div>
        </div>
        {/* part end */}
        <input
          type="submit"
          className="btn bg-[#40128B] font-bold hover:bg-yellow-500 hover:text-black text-white btn-block my-4 "
          value="Update Class"
        />
      </div>
    </form>
  );
};

export default UpdateClass;
