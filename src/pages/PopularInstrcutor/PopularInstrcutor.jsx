import { useQuery } from "@tanstack/react-query";
import React from "react";

const PopularInstrcutor = () => {
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

  const limitedInstructors = allinstructor.slice(0, 6);

  console.log(limitedInstructors);

  return (
    <div className="grid gap-5 grid-cols-1 md:grid-cols-3 p-4">
      {limitedInstructors.map((instrcuct) => (
        <div key={instrcuct._id}>
          <img
            src={instrcuct.image}
            className="w-[350px] rounded-full shadow-lg border p-4 h-[350px]"
            alt=""
          />
        </div>
      ))}
    </div>
  );
};

export default PopularInstrcutor;
