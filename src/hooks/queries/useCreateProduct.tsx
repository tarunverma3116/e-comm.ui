import api from "api/axios";
type Props = {
  data: any;
};

const useCreateProduct = async (props: Props) => {
  try {
    const response = await api.post("add", props.data);
    return response;
  } catch (error) {
    console.log(error);
  }
};

export default useCreateProduct;
