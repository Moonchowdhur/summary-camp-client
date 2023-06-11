import React, { useContext } from "react";
import { Authcontext } from "../../provider/Authprovider";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import { useQuery } from "@tanstack/react-query";
import swal from "sweetalert";
import { Link } from "react-router-dom";

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

  const handleDelBtn = (id) => {
    console.log(id);
    swal({
      title: "Are you sure?",
      text: "Once deleted, you will not be able to recover this class!",
      icon: "warning",
      buttons: true,
      dangerMode: true,
    }).then((willDelete) => {
      if (willDelete) {
        fetch(
          `https://assignment-12-project-server.vercel.app/selectedclass/${id}`,
          {
            method: "DELETE",
          }
        )
          .then((res) => res.json())
          .then((data) => {
            console.log(data);
            if (data.deletedCount > 0) {
              refetch();
            }
          });
      }
    });
  };
  console.log(selectedClass);
  return (
    <div>
      <div className=" my-8">
        <h2 className="text-center font-bold text-2xl ">
          Total Selected class: {selectedClass.length}
        </h2>
      </div>
      <div className="w-full my-5 ">
        <div className="overflow-x-auto">
          <table className="table w-full">
            {/* head */}
            <thead>
              <tr>
                <th className="bg-[#40128B] text-white text-xl">#</th>
                <th className="bg-[#40128B] text-white text-xl">Image</th>
                <th className="bg-[#40128B] text-white text-xl">
                  Instructor name
                </th>
                <th className="bg-[#40128B] text-white text-xl">
                  Instructor Email
                </th>
                <th className="bg-[#40128B] text-white text-xl">Class Name</th>

                <th className="bg-[#40128B] text-white text-xl">Price</th>

                <th className="bg-[#40128B] text-white text-xl">Action</th>
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
                  <td>{sclass?.instructorName}</td>
                  <td>{sclass?.instructorEmail}</td>
                  <td> {sclass?.name}</td>
                  <td>${sclass?.price}</td>
                  <th className="flex gap-4  items-center">
                    <Link
                      to={`/dashboard/pay/${sclass?._id}`}
                      className="btn text-white bg-orange-500 px-3 py-2"
                    >
                      Pay
                    </Link>
                    <button
                      onClick={() => handleDelBtn(sclass._id)}
                      className="btn text-white bg-[#40128B] px-3 py-2"
                    >
                      Delete
                    </button>
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
