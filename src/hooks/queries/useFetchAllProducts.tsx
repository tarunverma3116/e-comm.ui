import api from "api/axios";

const useFetchAllProducts = async () => {
  const response = await api.get("https://dummyjson.com/products");
  return response.data;
};
export default useFetchAllProducts;
