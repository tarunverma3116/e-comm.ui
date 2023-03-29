import api from "axios";

const useFetchCategories = async () => {
  const response = await api.get(`https://dummyjson.com/products/categories/`);
  return response.data;
};

export default useFetchCategories;
