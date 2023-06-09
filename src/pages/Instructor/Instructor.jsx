import React, { useEffect, useState } from "react";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import { useQuery } from "@tanstack/react-query";
import EachInstructor from "../EachInstructor/EachInstructor";

const Instructor = () => {
  // const [allusers, setAllusers] = useState([]);

  const { data: users = [], refetch } = useQuery({
    queryKey: ["users"],
    queryFn: async () => {
      const res = await fetch("http://localhost:5000/users");
      return res.json();
      // const res = await axiosSecure.get("/users");
      // return res.data;
    },
  });

  const allinstructor = users.filter((user) => {
    return user?.role === "instructor";
  });
  //   console.log(allinstructor);

  return (
    <div className="md:mx-12 pb-10 mt-40 md:mt-5  p-4 grid grid-cols-1 md:grid-cols-2 gap-5 ">
      {allinstructor.map((insructor) => (
        <EachInstructor
          key={insructor._id}
          insructor={insructor}
        ></EachInstructor>
      ))}
    </div>
  );
};

export default Instructor;
