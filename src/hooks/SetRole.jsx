import { useQuery } from "react-query";
import useAxiosSecure from "./axiosSecure";
import { useContext } from "react";
import { AuthContext } from "../providers/AuthProviders";

const SetRole = () => {
  const { user } = useContext(AuthContext);
  const axios = useAxiosSecure();

  const {
    refetch,
    data = {},
    isLoading,
  } = useQuery({
    queryKey: ["role", user?.email],
    enabled: !!user?.email && !!localStorage.getItem("axcess_token"),
    queryFn: async () => {
      const res = await axios.get(`/role?email=${user?.email}`);
      return res.data;
    },
  });

  return { data, refetch, isLoading };
};
export default SetRole;
