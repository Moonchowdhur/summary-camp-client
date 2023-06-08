import { useQuery } from "@tanstack/react-query";
import React from "react";
import EachAllClasses from "../EachAllClasses/EachAllClasses";

const Classes = () => {
  const { data: allClass = [], refetch } = useQuery({
    queryKey: ["allClasses"],
    queryFn: async () => {
      const res = await fetch("http://localhost:5000/classes");

      return res.json();
    },
  });
  //   console.log(allClass);

  return (
    <div className="md:mx-12 gap-5 p-4 grid grid-cols-1 md:grid-cols-2">
      {allClass.map((c) => (
        <EachAllClasses c={c} key={c._id}></EachAllClasses>
      ))}
    </div>
  );
};

export default Classes;
