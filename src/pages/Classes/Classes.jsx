import { useQuery } from "@tanstack/react-query";
import React from "react";
import EachAllClasses from "../EachAllClasses/EachAllClasses";

const Classes = () => {
  const { data: allClass = [], refetch } = useQuery({
    queryKey: ["allClasses"],
    queryFn: async () => {
      const res = await fetch(
        "https://assignment-12-project-server.vercel.app/classes"
      );

      return res.json();
    },
  });

  const approvedClass = allClass.filter((c) => c.status === "approved");
  console.log(approvedClass);

  return (
    <div className="md:mx-12 mt-52 md:mt-5 gap-5 p-4 grid grid-cols-1 md:grid-cols-2">
      {approvedClass.map((c) => (
        <EachAllClasses c={c} key={c._id}></EachAllClasses>
      ))}
    </div>
  );
};

export default Classes;
