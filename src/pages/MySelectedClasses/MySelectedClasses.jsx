import React, { useContext } from "react";
import { Authcontext } from "../../provider/Authprovider";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import { useQuery } from "@tanstack/react-query";

const MySelectedClasses = () => {
  const { user, loading } = useContext(Authcontext);
  const [axiosSecure] = useAxiosSecure();
  const { data: selectedClass = [], refetch } = useQuery({
    queryKey: ["selectedClass", user?.email],
    enabled: !loading,
    queryFn: async () => {
      const res = await axiosSecure(
        `/selectedclass?studentEmail=${user?.email}`
      );
      return res.data;
    },
  });

  //   const totalAmount = selectedClass.reduce((totalPrice, currentProduct) => {
  //     return (totalPrice = totalPrice + currentProduct.price);
  //   }, 0);

  console.log(selectedClass);
  return (
    <div>
      <div className="flex items-center justify-between my-5 ">
        <h2 className="text-center font-bold text-2xl ">
          Total Selected class: {selectedClass.length}
        </h2>
      </div>
      <div className="w-full my-5 ">
        <div className="overflow-x-auto">
          <table className="table">
            {/* head */}
            <thead>
              <tr>
                <th>#</th>
                <th>Image</th>
                <th>Job</th>
                <th>Favorite Color</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {selectedClass.map((sclass, index) => (
                <tr key={sclass._id}>
                  <th>{index + 1}</th>
                  <td>
                    <img
                      src={sclass?.image}
                      className="w-10 h-10 rounded-full"
                      alt=""
                    />
                  </td>
                  <td>
                    Zemlak, Daniel and Leannon
                    <br />
                    <span className="badge badge-ghost badge-sm">
                      Desktop Support Technician
                    </span>
                  </td>
                  <td>Purple</td>
                  <th>
                    <button className="btn btn-ghost btn-xs">details</button>
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

export default MySelectedClasses;
