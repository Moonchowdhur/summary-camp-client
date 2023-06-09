import React, { useContext } from "react";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import { useQuery } from "@tanstack/react-query";
import moment from "moment/moment";
import { Authcontext } from "../../provider/Authprovider";

const PaymentHistory = () => {
  const [axiosSecure] = useAxiosSecure();
  const { user } = useContext(Authcontext);
  const { data: paymentHistory = [], refetch } = useQuery({
    queryKey: ["paymentHistory"],
    queryFn: async () => {
      const res = await axiosSecure.get(
        `/paymenthistory?studentEmail=${user?.email}`
      );
      return res.data;
      // const res = await axiosSecure.get("/users");
      // return res.data;
    },
  });

  console.log(paymentHistory);

  return (
    <div>
      <div className=" my-8">
        <h2 className="text-center font-bold text-2xl ">
          Total Payment: {paymentHistory.length}
        </h2>
      </div>
      <div className="w-full my-5 ">
        <div className="overflow-x-auto">
          <table className="table w-full">
            {/* head */}
            <thead>
              <tr>
                <th className="bg-[#40128B] text-white text-xl">Class Name</th>

                <th className="bg-[#40128B] text-white text-xl">Price</th>
                <th className="bg-[#40128B] text-white text-xl">
                  TransactionID
                </th>
                <th className="bg-[#40128B] text-white text-xl">
                  Payment Date
                </th>
              </tr>
            </thead>
            <tbody>
              {paymentHistory.map((p) => (
                <tr key={p._id}>
                  <td className="text-base bg-slate-300 "> {p.name}</td>
                  <td className="text-base bg-slate-300 ">${p.price}</td>
                  <td className="text-base bg-slate-300 ">{p.transactionId}</td>
                  <td className="text-base bg-slate-300 ">
                    {moment(p.date).format("MMM Do YY")}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default PaymentHistory;
