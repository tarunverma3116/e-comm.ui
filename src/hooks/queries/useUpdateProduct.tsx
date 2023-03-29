import api from "api/axios";
type Props = {
  data: any;
  id: string;
};

const useUpdateProduct = async (props: Props) => {
  try {
    const response = await api.put(`${props.id}`, props.data);
    return response;
  } catch (error) {
    console.log(error);
  }
};

export default useUpdateProduct;
