import { useQuery } from "react-query";
import useAxiosSecure from "./axiosSecure";
import { useContext } from "react";
import { AuthContext } from "../providers/AuthProviders";

const useSelectedClass = () => {
  const { user } = useContext(AuthContext);
  const axios = useAxiosSecure();

  const {
    refetch,
    data = [],
    isLoading,
  } = useQuery(["selectedClass", user?.email], async () => {
    const res = await axios.get(`/selectedClass/${user?.email}`);
    const selectedClass = await res.data;
    return selectedClass;
  });
  return { data, refetch, isLoading };
};

export default useSelectedClass;
