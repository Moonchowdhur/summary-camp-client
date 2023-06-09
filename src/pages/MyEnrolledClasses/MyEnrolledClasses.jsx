import React from "react";

const MyEnrolledClasses = () => {
  return (
    <div>
      <div className=" my-8">
        <h2 className="text-center font-bold text-2xl ">
          Total Enrolled class: 0
        </h2>
      </div>
      <div className="w-full my-5 ">
        <div className="overflow-x-auto">
          <table className="table w-full">
            {/* head */}
            <thead>
              <tr>
                <th className="bg-[#40128B] text-white text-xl">#</th>
                <th className="bg-[#40128B] text-white text-xl">Image</th>
                <th className="bg-[#40128B] text-white text-xl">
                  Instructor name
                </th>
                <th className="bg-[#40128B] text-white text-xl">
                  Instructor Email
                </th>
                <th className="bg-[#40128B] text-white text-xl">Class Name</th>

                <th className="bg-[#40128B] text-white text-xl">Price</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th>Index</th>
                <td>image</td>
                <td>instructorName</td>
                <td>instructorEmail</td>
                <td> name</td>
                <td>price</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default MyEnrolledClasses;
