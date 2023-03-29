import ProductCard from "components/Cards/ProductCard";
import useFetchProductsFromCategory from "hooks/queries/useFetchProductsFromCategory";
import React from "react";
import { useEffect } from "react";
import { useSpinner } from "context/Spinner";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

type Props = {
  category: string;
};

const SimilarProduct = (props: Props) => {
  const [products, setProducts] = React.useState<any>([]);
  const spinner = useSpinner();

  const FetchProducts = async () => {
    spinner.setLoadingState(true);
    const response = await useFetchProductsFromCategory(props.category);
    console.log(response);
    setProducts(response.products);
    spinner.setLoadingState(false);
  };

  useEffect(() => {
    FetchProducts();
  }, []);

  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  return (
    <div className="flex flex-col mt-6 gap-6">
      <p className="title-text">Similar Products</p>
      <Carousel
        responsive={responsive}
        swipeable={false}
        draggable={false}
        showDots={false}
        partialVisible={false}
        itemClass="carouselItem"
        className="oveflow-hidden w-full"
      >
        {products &&
          products.map((product: any, key: any) => {
            return (
              <div className="my-4" key={key}>
                <ProductCard product={product} />
              </div>
            );
          })}
      </Carousel>
    </div>
  );
};

export default SimilarProduct;
