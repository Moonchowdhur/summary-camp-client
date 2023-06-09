import { useQuery } from "@tanstack/react-query";
import React from "react";
import ManageEachClass from "../ManageEachClass/ManageEachClass";

const ManageClass = () => {
  const { data: allClass = [], refetch } = useQuery({
    queryKey: ["allClasses"],
    queryFn: async () => {
      const res = await fetch("http://localhost:5000/classes");

      return res.json();
    },
  });
  console.log(allClass);

  return (
    <div className="md:mx-12 mt-44 md:mt-5 gap-5 p-4 grid grid-cols-1 md:grid-cols-2">
      {allClass.map((eachClass) => (
        <ManageEachClass
          refetch={refetch}
          key={eachClass._id}
          eachClass={eachClass}
        ></ManageEachClass>
      ))}
    </div>
  );
};

export default ManageClass;
