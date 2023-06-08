import React, { useContext } from "react";
import { Authcontext } from "../../provider/Authprovider";

const img_hosting_token = import.meta.env.VITE_Image_Upload_Token;
const img_hosting_url = `https://api.imgbb.com/1/upload?key=${img_hosting_token}`;

const AddClass = () => {
  const { user } = useContext(Authcontext);

  const handleAddClass = (event) => {
    event.preventDefault();
    const name = event.target.name.value;
    const img = event.target.img.files[0];
    const seats = event.target.seats.value;
    const price = event.target.price.value;
    const itemData = {
      name,
      img,
      price: parseFloat(price),
      seats: parseFloat(seats),
      instructorEmail: user?.email,
      instructorName: user?.displayName,
      status: "pending",
    };
    console.log(itemData);
  };

  return (
    <form onSubmit={handleAddClass}>
      <div className="w-full">
        <h2 className=" text-3xl mx-4 text-center my-5 font-bold underline">
          Add a Class
        </h2>
        {/* 1st part */}
        <div className="flex my-5  gap-8  w-full items-center">
          <div className="w-full mx-5 md:w-1/2 ">
            <label className="label">
              <span className="label-text font-medium font-base">Name</span>
            </label>
            <input
              type="text"
              name="name"
              placeholder="name"
              className="input input-bordered w-full "
            />
          </div>
          <div className="form-control mx-5 md:w-1/2 ">
            <label className="label">
              <span className="label-text  font-medium  font-base">
                Class Image
              </span>
            </label>
            <input
              name="img"
              type="file"
              className="file-input file-input-bordered w-full max-w-xs"
            />
          </div>
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
              placeholder="Enter Price"
              className="input input-bordered w-full "
            />
          </div>
        </div>
        {/* part end */}
        <input
          type="submit"
          className="btn bg-[#40128B] text-white btn-block my-4 "
          value="Add Class"
        />
      </div>
    </form>
  );
};

export default AddClass;
