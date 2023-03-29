import React, { useState } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import FormTextInput from "../../components/Input/FormTextInput";
import { useNavigate } from "react-router-dom";
import PrimaryButton from "components/Button/Button";
import FileUpload from "../create/FileUpload";
import { useEffect } from "react";
import { MdDeleteOutline } from "react-icons/md";
import { useSpinner } from "context/Spinner";
import { toast } from "react-toastify";
import useFetchProduct from "hooks/queries/useFetchProduct";
import { useParams } from "react-router-dom";
import useUpdateProduct from "hooks/queries/useUpdateProduct";

type Inputs = {
  title: string;
  description: string;
  price: number;
  thumbnail: string;
  brand: string;
  images: string[];
};

interface Props {}

const Update = (props: Props) => {
  const navigate = useNavigate();
  const [product, setProduct] = React.useState<any>([]);
  const params = useParams();
  const spinner = useSpinner();
  const [images, setImages] = useState<any>([]);

  const FetchProduct = async () => {
    spinner.setLoadingState(true);
    const response = await useFetchProduct(params.id);
    setProduct(response);
    const imageData = response.images.map((img: any, i: number) => {
      return {
        id: i,
        url: img,
      };
    });
    setImages(imageData);
    console.log(response);
    spinner.setLoadingState(false);
  };

  useEffect(() => {
    FetchProduct();
  }, []);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>({
    defaultValues: product,
    mode: "all",
  });

  const handleDelete = (id: number) => {
    const filteredImages = images.filter((img: any) => img.id !== id);
    setImages(filteredImages);
  };

  const OnSubmit: SubmitHandler<Inputs> = async (data) => {
    spinner.setLoadingState(true);
    const formData = data;
    formData.thumbnail = images[0];
    formData.images = images.map((img: any) => img);
    console.log(formData);
    const response = await useUpdateProduct({
      data: formData,
      id: params.id ? params.id : "",
    });
    console.log(response);
    if (response) {
      toast.success("Product Updated Successfully");
      navigate("/products");
    }
    spinner.setLoadingState(false);
  };

  useEffect(() => {}, [images]);

  return (
    <section className="text-white dark:text-black">
      <p className="title-text">Update Product</p>
      {product && (
        <div className="flex flex-col-reverse lg:flex-row gap-6">
          <div className="basis-1/2">
            <form className="flex flex-col gap-3">
              <FormTextInput
                label="Title"
                defaultValue={product.title}
                className=""
                register={() => register("title", { required: true })}
                error={errors.title && "Title Required"}
              />
              <FormTextInput
                label="Brand"
                defaultValue={product.brand}
                className=""
                register={() => register("brand", { required: true })}
                error={errors.title && "Brand Required"}
              />
              <FormTextInput
                label="Price"
                defaultValue={product.price}
                type="number"
                register={() => register("price", { required: true })}
                error={errors.price && "Price Required"}
              />
              <FormTextInput
                label="Description"
                defaultValue={product.description}
                register={() => register("description", { required: true })}
                error={errors.description && "Description Required"}
              />
              <PrimaryButton
                type="submit"
                // disabled={loginMutation.isLoading}
                className="disabled:bg-opacity-70 w-full"
                onClick={handleSubmit(OnSubmit)}
              >
                Update Product
              </PrimaryButton>
            </form>
          </div>
          <div className="basis-1/2 flex flex-col gap-2">
            <span className="font-bold">Select Images</span>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
              {images &&
                images?.map((img: any, key: any) => (
                  <div
                    key={key}
                    className="w-full h-[140px] rounded-md user-card relative"
                  >
                    <img
                      src={img.url}
                      alt="uploaded"
                      className="w-full h-full rounded-xl object-cover"
                    />
                    <button
                      className="rounded-full bg-primary hover:bg-red-500 absolute right-1 top-1 p-2 text-white"
                      onClick={() => handleDelete(key)}
                    >
                      <MdDeleteOutline />
                    </button>
                  </div>
                ))}
              <div className="gap-2 cursor-pointer user-card dark:bg-[#00000005]">
                <FileUpload setImages={setImages} images={images} />
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Update;
