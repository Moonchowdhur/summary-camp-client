import { useQuery } from "@tanstack/react-query";
import React, { useState } from "react";

const Allusers = () => {
  const [role, setRole] = useState([]);
  const [btne, setBtne] = useState(false);
  const { data: users = [], refetch } = useQuery({
    queryKey: ["users"],
    queryFn: async () => {
      const res = await fetch("http://localhost:5000/users");

      return res.json();
    },
  });

  //   const handleAdminBtn = (id) => {
  //     const updatedUsers = users.map((user) => {
  //       if (user._id === id) {
  //         return { ...user, role: "admin" };
  //       }
  //       return user;
  //     });
  //     setRole(updatedUsers);
  //     setBtne(true);
  //   };

  return (
    <div className="w-full max-h-screen">
      <h2 className="text-3xl font-medium text-center">
        All users Here:{users.length}
      </h2>
      <div>
        <div className="overflow-x-auto md:mx-5 my-5">
          <table className="table">
            {/* head */}
            <thead>
              <tr>
                <th className="bg-[#40128B] text-white text-xl">#</th>
                <th className="bg-[#40128B] text-white text-xl">Name</th>

                <th className="bg-[#40128B] text-white text-xl">Email</th>
                <th className="bg-[#40128B] text-white text-xl">Role</th>
                <th className="bg-[#40128B] text-white text-xl">Action</th>
              </tr>
            </thead>
            <tbody>
              {/* row 1 */}
              {users.map((user, index) => (
                <tr key={user._id} className="text-base">
                  <th>{index + 1}</th>
                  <td>{user?.name}</td>
                  <td>{user?.email}</td>
                  <td>{user?.role}</td>
                  <th className="flex items-center gap-3">
                    {user?.role === "instructor" ? (
                      <div className=" text-base  ">
                        <h2>Instructor</h2>
                      </div>
                    ) : (
                      <button className="bg-orange-300 py-2 text-base px-2 rounded-lg text-white  ">
                        Make Instructor
                      </button>
                    )}
                    {user?.role === "instructor" ? (
                      <div className=" text-base  ">
                        <h2>Admin</h2>
                      </div>
                    ) : (
                      <button
                        // disabled={btne
                        onClick={() => handleAdminBtn(user._id)}
                        className="bg-[#40128B] py-2 text-base px-2 rounded-lg text-white  "
                      >
                        Make Admin{" "}
                      </button>
                    )}
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

export default Allusers;
