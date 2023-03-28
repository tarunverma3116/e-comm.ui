import api from "api/axios";

const useFetchProductList = async (limit: any, skip: any) => {
  const response = await api.get(
    `https://dummyjson.com/products?limit=${limit}&skip=${skip}&select=title,price,thumbnail,discountPercentage`
  );
  return response.data;
};
export default useFetchProductList;
