import React from "react";

const AddClass = () => {
  return (
    <form>
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
              name="image"
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
              name="email"
              placeholder="Enter Instructor Email"
              className="input input-bordered w-full "
            />
          </div>
        </div>
        {/* 2nd part end */}
      </div>
    </form>
  );
};

export default AddClass;
