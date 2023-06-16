import { useQuery } from "react-query";

const useAllClass = () => {
  const { refetch, data = [] } = useQuery(["user"], async () => {
    const res = await fetch(
      "https://summer-camp-serversite-salauddin98.vercel.app/class"
    );
    const allClass = await res.json();
    return allClass;
  });
  return { data, refetch };
};

export default useAllClass;
