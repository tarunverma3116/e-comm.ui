import api from "axios";
import { useMutation } from "react-query";

const useUpdateProduct = () => {
  const updateProduct = async (data: any) => {
    const { id } = data;
    const response = await api.put(`https://dummyjson.com/products/`, data);
    return response.data;
  };
  return useMutation(updateProduct);
};

export default useUpdateProduct;
