import api from "axios";

const useDeleteProduct = async (id: any) => {
  const response = await api.delete(`https://dummyjson.com/products/${id}`);
  return response.data;
};

export default useDeleteProduct;
