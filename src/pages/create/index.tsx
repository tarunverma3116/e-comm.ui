import React, { useState } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import FormTextInput from "../../components/Input/FormTextInput";
import { useNavigate } from "react-router-dom";
import PrimaryButton from "components/Button/Button";
import FileUpload from "./FileUpload";
import { useEffect } from "react";
import { MdDeleteOutline } from "react-icons/md";
import useCreateProduct from "hooks/queries/useCreateProduct";
import { useSpinner } from "context/Spinner";
import { toast } from "react-toastify";

type Inputs = {
  title: string;
  description: string;
  price: number;
  thumbnail: string;
  brand: string;
  images: any;
};

interface Props {}

const Create = (props: Props) => {
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>();
  const spinner = useSpinner();

  const [images, setImages] = useState<any>();
  const handleDelete = (id: number) => {
    const filteredImages = images.filter((img: any) => img.id !== id);
    setImages(filteredImages);
  };

  const OnSubmit: SubmitHandler<Inputs> = async (data) => {
    spinner.setLoadingState(true);
    const formData = data;
    formData.thumbnail = images[0].url;
    formData.images = images.map((img: any) => img.url);
    const response = await useCreateProduct({ data: formData });
    console.log(response);
    if (response) {
      toast.success("Product Created Successfully");
      navigate("/products");
    }
    spinner.setLoadingState(false);
  };

  useEffect(() => {}, [images]);

  return (
    <section className="text-white dark:text-black">
      <p className="title-text">Create Product</p>
      <div className="flex flex-col-reverse lg:flex-row gap-6">
        <div className="basis-1/2">
          <form className="flex flex-col gap-3">
            <FormTextInput
              label="Title"
              className=""
              register={() => register("title", { required: true })}
              error={errors.title && "Title Required"}
            />
            <FormTextInput
              label="Brand"
              className=""
              register={() => register("brand", { required: true })}
              error={errors.title && "Brand Required"}
            />
            <FormTextInput
              label="Price"
              type="number"
              register={() => register("price", { required: true })}
              error={errors.price && "Price Required"}
            />
            <FormTextInput
              label="Description"
              register={() => register("description", { required: true })}
              error={errors.description && "Description Required"}
            />
            <PrimaryButton
              type="submit"
              // disabled={loginMutation.isLoading}
              className="disabled:bg-opacity-70 w-full"
              onClick={handleSubmit(OnSubmit)}
            >
              Create
            </PrimaryButton>
          </form>
        </div>
        <div className="basis-1/2 flex flex-col gap-2">
          <span className="font-bold">Select Images</span>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
            {images &&
              images?.map((img: any) => (
                <div
                  key={img.id}
                  className="w-full h-[140px] rounded-md user-card relative"
                >
                  <img
                    src={img.url}
                    alt="uploaded"
                    className="w-full h-full rounded-xl object-cover"
                  />
                  <button
                    className="rounded-full bg-primary hover:bg-red-500 absolute right-1 top-1 p-2 text-white"
                    onClick={() => handleDelete(img.id)}
                  >
                    <MdDeleteOutline />
                  </button>
                </div>
              ))}
            <div className="gap-2 cursor-pointer user-card">
              <FileUpload setImages={setImages} images={images} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Create;
