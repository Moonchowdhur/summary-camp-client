import React from "react";

const PaymentHistory = () => {
  return (
    <div>
      <div className=" my-8">
        <h2 className="text-center font-bold text-2xl ">Total Payment: 0</h2>
      </div>
      <div className="w-full my-5 ">
        <div className="overflow-x-auto">
          <table className="table w-full">
            {/* head */}
            <thead>
              <tr>
                <th className="bg-[#40128B] text-white text-xl">Image</th>

                <th className="bg-[#40128B] text-white text-xl">
                  Instructor Email
                </th>
                <th className="bg-[#40128B] text-white text-xl">Class Name</th>

                <th className="bg-[#40128B] text-white text-xl">Price</th>
                <th className="bg-[#40128B] text-white text-xl">
                  Payment Date
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>image</td>

                <td>instructorEmail</td>
                <td> name</td>
                <td>price</td>
                <td>Payment Date</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default PaymentHistory;
