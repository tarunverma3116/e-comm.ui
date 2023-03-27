import api from "api/axios";

const useFetchProduct = async (id: any) => {
  const response = await api.get(`https://dummyjson.com/products/${id}`);
  return response.data;
};
export default useFetchProduct;
