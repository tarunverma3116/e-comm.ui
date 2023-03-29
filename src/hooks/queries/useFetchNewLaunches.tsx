import api from "api/axios";

const useFetchNewLaunches = async () => {
  const response = await api.get(
    `https://dummyjson.com/products?limit=6&select=title,price,thumbnail,discountPercentage`
  );
  return response.data;
};
export default useFetchNewLaunches;
