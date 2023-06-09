import React, { useContext } from "react";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import { useQuery } from "@tanstack/react-query";
import { Authcontext } from "../../provider/Authprovider";

const MyEnrolledClasses = () => {
  const { user } = useContext(Authcontext);
  const [axiosSecure] = useAxiosSecure();
  const { data: enrolledHistory = [], refetch } = useQuery({
    queryKey: ["enrolledHistory"],
    queryFn: async () => {
      const res = await axiosSecure.get(
        `/enrolledhistory?studentEmail=${user?.email}`
      );
      return res.data;
      // const res = await axiosSecure.get("/users");
      // return res.data;
    },
  });

  console.log(enrolledHistory);

  return (
    <div>
      <div className=" my-8">
        <h2 className="text-center font-bold text-2xl ">
          Total Enrolled class: {enrolledHistory.length}
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
              {enrolledHistory.map((enrolled, index) => (
                <tr>
                  <th>{index + 1}</th>
                  <td>
                    <img src={enrolled?.image} className="w-10 h-10" alt="" />
                  </td>
                  <td>{enrolled?.instructorName}</td>
                  <td>{enrolled?.instructorEmail}</td>
                  <td>{enrolled?.name}</td>
                  <td>${enrolled?.price}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default MyEnrolledClasses;
