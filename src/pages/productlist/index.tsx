import useFetchProductList from "hooks/queries/useFetchProductList";
import React, { useState, useEffect } from "react";
import { useSpinner } from "context/Spinner";
import ProductCard from "components/Cards/ProductCard";
import { useSearchParams } from "react-router-dom";
import api from "axios";
import { RiSearchLine } from "react-icons/ri";
import Searched from "./Searched";

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

  const [searchParams, setSearchParams] = useSearchParams();
  const [searchProducts, setSearchProducts] = React.useState<any>([]);

  const HandleSearchProducts = async (searchtext: any) => {
    spinner.setLoadingState(true);
    if (searchtext !== "" && searchtext !== null) {
      const response = await api.get(
        `https://dummyjson.com/products/search?q=${searchtext}`
      );
      setSearchProducts(response.data.products);
    } else {
      setSearchProducts([]);
    }
    spinner.setLoadingState(false);
  };

  const removeQueryParams = () => {
    const param = searchParams.get("q");
    if (param) {
      searchParams.delete("q");
      setSearchParams(searchParams);
    }
  };

  useEffect(() => {
    removeQueryParams();
  }, [searchParams === null]);

  useEffect(() => {
    const param = searchParams.get("q");
    // console.log("Param to searc in api", param);
    HandleSearchProducts(param);
  }, [searchParams]);

  return (
    <section>
      <div className="flex justify-between items-center">
        <p className="title-text">All Products</p>
        <form className="form-control" onSubmit={HandleSearchProducts}>
          <div className="relative hidden lg:flex items-center text-gray-600">
            <input
              type="text"
              placeholder="Search for anything"
              className="bg-[#0C111A] border dark:border-[#BFCBD9] border-[#6A8099] dark:bg-white text-white dark:text-black font-bold text-s h-10 px-5 pr-16 rounded-lg text-sm focus:outline-none"
              onChange={(e) => setSearchParams({ q: e.target.value })}
            />
            <button
              type="submit"
              className="absolute h-full right-0 top-0 mr-4"
            >
              <RiSearchLine className="text-primary h-4 w-4 fill-current" />
            </button>
          </div>
        </form>
      </div>
      <Searched
        products={searchProducts?.length > 0 ? searchProducts : products}
        skip={skip}
        loading={loading}
        handleLoadMore={handleLoadMore}
      />
    </section>
  );
};

export default ProductList;
