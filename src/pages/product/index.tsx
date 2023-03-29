import useFetchProduct from "hooks/queries/useFetchProduct";
import React from "react";
import { useParams } from "react-router-dom";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import { useSpinner } from "context/Spinner";
import Rating from "@mui/material/Rating";
import { styled } from "@mui/material/styles";
import { MdOutlineDeleteOutline } from "react-icons/md";
import { RxUpdate } from "react-icons/rx";
import useDeleteProduct from "hooks/queries/useDeleteProduct";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import SimilarProduct from "./SimilarProduct";

type Props = {};

const StyledRating = styled(Rating)({
  "& .MuiRating-iconFilled": {
    color: "#562EBB",
  },
});

const Product = (props: Props) => {
  const [product, setProduct] = React.useState<any>([]);
  const params = useParams();
  const spinner = useSpinner();
  const navigate = useNavigate();

  const FetchProduct = async () => {
    spinner.setLoadingState(true);
    const response = await useFetchProduct(params.id);
    setProduct(response);
    console.log(response);
    spinner.setLoadingState(false);
  };

  const HandleDelete = async () => {
    spinner.setLoadingState(true);
    const response = await useDeleteProduct(params.id);
    console.log(response);
    toast.success("Product deleted successfully");
    spinner.setLoadingState(false);
    navigate("/products");
  };

  React.useEffect(() => {
    FetchProduct();
  }, []);

  return (
    <section className="flex flex-col gap-6">
      <div>
        <p className="title-text">Product Details</p>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 w-full h-full">
          <div className="user-card dark:bg-[#00000005] w-full h-full p-3">
            <Carousel>
              {product?.images?.map((image: any, key: any) => {
                return (
                  <div className="max-h-[400px]" key={key}>
                    <img className="rounded-md" alt="..." src={image} />
                  </div>
                );
              })}
            </Carousel>
          </div>
          <div className="product-details text-white dark:text-black flex flex-col gap-2">
            <h1 className="text-2xl font-bold">{product?.title}</h1>
            <div className="flex gap-1 items-center">
              <StyledRating
                name="read-only"
                value={product.rating ? product.rating : 0}
                readOnly
                precision={0.5}
              />
              <p className="rating text-xs text-gray-400">
                ({product?.rating}/5)
              </p>
            </div>
            <p className="text-base flex flex-col lg:flex-row gap-1 items-center mb-1">
              <span className="text-primary capitalize">
                {product.category}
              </span>
              /{product?.brand}/{product?.title}
            </p>
            <p className="text-base">{product?.description}</p>
            <p className="text-base font-bold flex gap-1 items-center mb-1">
              <span>₹{product?.price}</span>
              <span className="text-gray-400 text-xs">
                ({product?.discountPercentage}% off)
              </span>
            </p>
            <div className="flex flex-row gap-2 w-full">
              <button
                className="primary-button"
                onClick={() => {
                  navigate(`/update/${params.id}`);
                }}
              >
                <span>Update Product</span>
                <RxUpdate />
              </button>
              <button className="primary-button" onClick={HandleDelete}>
                <span>Delete Product</span>
                <MdOutlineDeleteOutline />
              </button>
            </div>
          </div>
        </div>
      </div>
      {product.category && <SimilarProduct category={product?.category} />}
    </section>
  );
};

export default Product;
