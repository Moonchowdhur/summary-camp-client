import { useQuery } from "@tanstack/react-query";
import React, { useState } from "react";
import swal from "sweetalert";
import useAxiosSecure from "../../hooks/useAxiosSecure";

const Allusers = () => {
  const [role, setRole] = useState([]);
  const [axiosSecure] = useAxiosSecure();
  const [btne, setBtne] = useState(false);
  const { data: users = [], refetch } = useQuery({
    queryKey: ["users"],
    queryFn: async () => {
      const res = await fetch(
        "https://assignment-12-project-server.vercel.app/users"
      );
      return res.json();
      // const res = await axiosSecure.get("/users");
      // return res.data;
    },
  });

  console.log(users);

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

  const handleAdminBtn = (user) => {
    console.log(user._id);
    fetch(
      `https://assignment-12-project-server.vercel.app/users/admin/${user._id}`,
      {
        method: "PATCH",
      }
    )
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.modifiedCount > 0) {
          refetch();
          swal(`${user.name} is admin now`);
        }
      });
  };

  // console.log(user?.role);
  const handleInstBtn = (user) => {
    console.log(user._id);
    fetch(
      `https://assignment-12-project-server.vercel.app/users/instructor/${user._id}`,
      {
        method: "PATCH",
      }
    )
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.modifiedCount > 0) {
          refetch();
          swal(`${user.name} is instructor now`);
        }
      });
  };

  return (
    <div className="w-full ">
      <div className="flex justify-center">
        <h2 className="text-3xl mx-auto font-medium text-center">
          All users Here:{users.length}
        </h2>
      </div>
      <div>
        <div className="overflow-x-auto md:mx-5 my-5">
          <table className="table ">
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
                      <button
                        disabled={user?.role === "admin" || "instructor"}
                        className=" text-base  border-2 rounded-xl border-violet-600 px-3 py-2 "
                      >
                        <h2>Instructor</h2>
                      </button>
                    ) : (
                      <button
                        // disabled={
                        //   (user?.role === "admin" || "instructor") && "disabled"
                        // }
                        onClick={() => handleInstBtn(user)}
                        className={`bg-orange-300 py-2 text-base px-2 rounded-lg text-white cursor-pointer ${
                          user?.role !== "student" && "btn-disabled"
                        }`}
                      >
                        Make Instructor
                      </button>
                    )}
                    {user?.role === "admin" ? (
                      <button
                        disabled={user?.role === "admin" || "instructor"}
                        className=" text-base border-2 rounded-xl border-violet-600 px-3 py-2 "
                      >
                        <h2>Admin</h2>
                      </button>
                    ) : (
                      <button
                        onClick={() => handleAdminBtn(user)}
                        className={`bg-[#40128B] py-2 text-base px-2 rounded-lg text-white  ${
                          user?.role !== "student" && "btn-disabled"
                        }`}
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
