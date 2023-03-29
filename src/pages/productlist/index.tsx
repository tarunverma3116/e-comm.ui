import useFetchProductList from "hooks/queries/useFetchProductList";
import { useState, useEffect } from "react";
import { useSpinner } from "context/Spinner";
import ProductCard from "components/Cards/ProductCard";
import SearchBox from "./SearchBox";

const ProductList = () => {
  const spinner = useSpinner();
  const [products, setProducts] = useState<any>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [skip, setSkip] = useState<number>(0);

  useEffect(() => {
    FetchProducts();
  }, []);

  const FetchProducts = async (): Promise<void> => {
    spinner.setLoadingState(true);
    setLoading(true);
    try {
      const response = await useFetchProductList(9, skip);
      console.log("response of limit and skip", skip, response);
      setProducts([...products, ...response.products]);
      setSkip(skip + 9);
    } catch (error) {
      console.error(error);
    }
    setLoading(false);
    spinner.setLoadingState(false);
  };

  const handleLoadMore = () => {
    FetchProducts();
  };

  return (
    <section>
      <div className="flex justify-between items-center">
        <p className="title-text">All Products</p>
        <SearchBox />
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 w-full h-full">
        {products?.map((product: any, key: any) => {
          return <ProductCard key={key} product={product} />;
        })}
      </div>
      {!loading && skip <= products.length && (
        <button
          className="primary-button mx-auto mt-8"
          onClick={handleLoadMore}
        >
          Load More Items
        </button>
      )}
    </section>
  );
};

export default ProductList;
