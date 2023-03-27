import useFetchProduct from "hooks/queries/useFetchProduct";
import React from "react";
import { useParams } from "react-router-dom";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import { useSpinner } from "context/Spinner";

type Props = {};

const Product = (props: Props) => {
  const [product, setProduct] = React.useState<any>([]);
  const params = useParams();
  console.log(params);
  const spinner = useSpinner();

  const FetchProduct = async () => {
    spinner.setLoadingState(true);
    const response = await useFetchProduct(params.id);
    setProduct(response);
    spinner.setLoadingState(false);
  };
  React.useEffect(() => {
    FetchProduct();
  }, []);

  return (
    <section>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 w-full h-full">
        <div className="user-card w-full h-full p-3">
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
        <div className="product-details text-white dark:text-black flex flex-col gap-4">
          <h1 className="text-2xl font-bold">{product?.title}</h1>
          <p className="text-base">{product?.description}</p>

          <p className="text-base font-bold flex gap-1 items-center mb-1">
            <span>₹{product?.price}</span>
            <span className="text-gray-400 text-xs">
              ({product?.discountPercentage}% off)
            </span>
          </p>
          {/* <p className="rating text-xs text-gray-400">
                    <StyledRating
                    name="read-only"
                    value={props.product.rating}
                    readOnly
                    />
                    ({props.product.rating}/5)
                </p> */}

          <div className="flex flex-row gap-2 w-full">
            <button className="bg-[#562EBB] text-white rounded-md px-3 py-1">
              Add to Cart
            </button>
            <button className="bg-[#562EBB] text-white rounded-md px-3 py-1">
              Buy Now
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Product;
