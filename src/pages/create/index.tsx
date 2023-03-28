import React from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import FormTextInput from "../../components/Input/FormTextInput";
import { useNavigate } from "react-router-dom";

type Inputs = {
  title: string;
  description: string;
  price: number;
  image: string;
  thumbnail: string;
  stock: number;
};

interface Props {}

const Create = (props: Props) => {
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>();

  return (
    <section>
      <p className="title-text">Create Product</p>
      <form className="flex flex-col gap-3">
        <FormTextInput
          label="Username"
          className=""
          register={() => register("title", { required: true })}
          error={errors.title && "Title Required"}
        />
      </form>
    </section>
  );
};

export default Create;
