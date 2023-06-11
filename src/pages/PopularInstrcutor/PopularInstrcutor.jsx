import { useQuery } from "@tanstack/react-query";
import React from "react";
import { AiOutlineMail } from "react-icons/ai";
import { BsFillPeopleFill } from "react-icons/bs";

const PopularInstrcutor = () => {
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

  const allinstructor = users.filter((user) => {
    return user?.role === "instructor";
  });

  const limitedInstructors = allinstructor.slice(0, 6);

  console.log(limitedInstructors);

  return (
    <div className="grid gap-5 grid-cols-1 md:grid-cols-3 p-4">
      {limitedInstructors.map((instrcuct) => (
        <div key={instrcuct._id} className="rounded-2xl shadow-lg border p-4">
          <img
            src={instrcuct.image}
            className="w-[350px] rounded-lg p-4 h-[350px]"
            alt=""
          />
          <div className="mx-3">
            <p className="md:text-xl text-lg flex items-center gap-3 font-medium tracking-wider">
              <BsFillPeopleFill />
              Name:{instrcuct.name}
            </p>
            <p className="md:text-lg text-base  flex items-center gap-3 mt-3 font-medium">
              <AiOutlineMail className="text-2xl" />
              Email:{instrcuct.email}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default PopularInstrcutor;
