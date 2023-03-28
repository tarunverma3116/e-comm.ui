import ProductCard from "components/Cards/ProductCard";
import useFetchAllProducts from "hooks/queries/useFetchAllProducts";
import React from "react";
import { useSpinner } from "context/Spinner";

type Props = {};

const Products = (props: Props) => {
  const [products, setProducts] = React.useState<any>([]);
  const spinner = useSpinner();

  const FetchProducts = async () => {
    spinner.setLoadingState(true);
    const response = await useFetchAllProducts();
    setProducts(response.products);
    console.log(response);
    spinner.setLoadingState(false);
  };
  React.useEffect(() => {
    FetchProducts();
  }, []);

  return (
    <section>
      <p className="title-text">All Products</p>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 w-full h-full">
        {products?.map((product: any, key: any) => {
          return <ProductCard key={key} product={product} />;
        })}
      </div>
    </section>
  );
};

export default Products;
