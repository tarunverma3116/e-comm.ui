import api from "axios";

const useFetchProductsFromCategory = async (category: string) => {
  const response = await api.get(
    `https://dummyjson.com/products/category/${category}`
  );
  return response.data;
};

export default useFetchProductsFromCategory;
