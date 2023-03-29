import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { useState, useEffect } from "react";
import useFetchNewLaunches from "hooks/queries/useFetchNewLaunches";
import ProductCard from "components/Cards/ProductCard";

type Props = {};

const RecentProducts = (props: Props) => {
  const [products, setProducts] = useState<any>([]);
  const FetchNewLaunches = async () => {
    const response = await useFetchNewLaunches();
    console.log(response);
    setProducts(response.products);
  };

  useEffect(() => {
    FetchNewLaunches();
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
    <div className="flex flex-col gap-3">
      <p className="title-text">New Launches </p>
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
          products.map((product: any) => {
            return (
              <div className="my-4">
                <ProductCard product={product} />
              </div>
            );
          })}
      </Carousel>
    </div>
  );
};

export default RecentProducts;
