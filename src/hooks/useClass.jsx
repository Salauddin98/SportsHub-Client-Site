import { useQuery } from "react-query";
import { useContext } from "react";
import { AuthContext } from "../providers/AuthProviders";

const useClass = () => {
  const { user } = useContext(AuthContext);
  const {
    refetch,
    data = [],
    isLoading,
  } = useQuery({
    queryKey: ["instractorClass", user?.email],
    queryFn: async () => {
      const res = await fetch(
        `https://foreign-language-center-client.vercel.app/class/${user?.email}`
      );
      return res.json();
    },
  });

  return { data, refetch, isLoading };
};
export default useClass;
