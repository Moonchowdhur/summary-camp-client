import React from "react";
import { useContext } from "react";
import { Authcontext } from "../../provider/Authprovider";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import { useQuery } from "@tanstack/react-query";
import { Link } from "react-router-dom";

const MyClass = () => {
  const { user, loading } = useContext(Authcontext);
  const [axiosSecure] = useAxiosSecure();
  const { data: instructorClass = [], refetch } = useQuery({
    queryKey: ["instructorClass", user?.email],
    enabled: !loading,
    queryFn: async () => {
      const res = await axiosSecure(`/classes?instructorEmail=${user?.email}`);
      return res.data;
    },
  });

  console.log(instructorClass);

  // const handleUpdateBtn = (sclass) => {
  //   console.log(sclass);
  // };

  return (
    <div>
      <div className=" my-8">
        <h2 className="text-center font-bold text-2xl ">
          Total class: {instructorClass.length}
        </h2>
      </div>
      <div className="w-full my-5 ">
        <div className="overflow-x-auto ">
          <table className="table w-full">
            {/* head */}
            <thead>
              <tr>
                <th className="bg-[#40128B] text-white text-xl">Image</th>

                <th className="bg-[#40128B] text-white text-xl">
                  Instructor Email
                </th>
                <th className="bg-[#40128B] text-white text-xl">Class Name</th>
                <th className="bg-[#40128B] text-white text-xl">Feedback</th>
                <th className="bg-[#40128B] text-white text-xl">Price</th>
                <th className="bg-[#40128B] text-white text-xl">Status</th>
                <th className="bg-[#40128B] text-white text-xl">
                  Enrolled<br></br> Student
                </th>
                <th className="bg-[#40128B] text-white text-xl">Action</th>
              </tr>
            </thead>
            <tbody>
              {instructorClass.map((sclass, index) => (
                <tr key={sclass._id}>
                  <td>
                    <img
                      src={sclass?.image}
                      className="w-10 h-10 rounded-full"
                      alt=""
                    />
                  </td>
                  <td>{sclass?.instructorEmail}</td>
                  <td> {sclass?.name}</td>
                  <td>
                    {sclass?.status == "denied" ? sclass?.feedback : "N/A"}
                  </td>
                  <td>${sclass?.price}</td>
                  <td className="bg-orange-400 btn btn-sm font-bold">
                    {sclass?.status}
                  </td>
                  <td className="text-center">{sclass?.enrollstudent}</td>
                  <th className="flex gap-4  items-center">
                    <Link
                      // onClick={() => handleUpdateBtn(sclass)}
                      to={`/dashboard/update/${sclass?._id}`}
                      className="btn text-white bg-[#40128B] px-3 py-2"
                    >
                      Update
                    </Link>
                  </th>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default MyClass;
