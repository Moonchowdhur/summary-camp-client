import { useQuery } from "@tanstack/react-query";
import { useContext } from "react";
import { Authcontext } from "../provider/Authprovider";
import useAxiosSecure from "./useAxiosSecure";

const useUser = () => {
  const { user } = useContext(Authcontext);
  const [axiosSecure] = useAxiosSecure();
  const {
    data: isUser = {},
    refetch,
    isLoading,
  } = useQuery({
    queryKey: ["isUser", user?.email],
    queryFn: async () => {
      const res = await axiosSecure.get(`/users/admin?email=${user?.email}`);

      return res.data;
    },
  });
  return [isUser, refetch, isLoading];
};

export default useUser;
