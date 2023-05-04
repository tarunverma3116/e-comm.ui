import { useState, useEffect } from "react";
import ProductCard from "components/Cards/ProductCard";
import useFetchCategories from "hooks/queries/useFetchCategories";
import useFetchProductsFromCategory from "hooks/queries/useFetchProductsFromCategory";
import { useSpinner } from "context/Spinner";

type Props = {};

const Categories = (props: Props) => {
  const [products, setProducts] = useState<any>([]);
  const [categories, setCategories] = useState<any>([]);
  const [activeTab, setActiveTab] = useState("smartphones");
  const spinner = useSpinner();

  const FetchCategories = async () => {
    const response = await useFetchCategories();
    console.log(response);
    setCategories(response);
  };

  const FetchProductFromCategory = async (category: string) => {
    spinner.setLoadingState(true);
    const response = await useFetchProductsFromCategory(category);
    console.log(response);
    setProducts(response.products);
    spinner.setLoadingState(false);
  };

  useEffect(() => {
    FetchCategories();
    FetchProductFromCategory(activeTab);
  }, []);

  useEffect(() => {
    FetchProductFromCategory(activeTab);
  }, [activeTab]);

  return (
    <div className="flex flex-col gap-3">
      <p className="title-text">Browse by Categories</p>
      <div className="collections-tab-group overflow-x-scroll">
        {categories &&
          categories.map((category: any) => {
            return (
              <button
                className={
                  activeTab === category
                    ? "collection-tab-active"
                    : " collection-tab-non-active dark:border-[#6A8099] dark:border-2 dark:text-[#6A8099]"
                }
                onClick={() => setActiveTab(category)}
              >
                {category}
              </button>
            );
          })}
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full h-full">
        {products?.map((product: any, key: any) => {
          return <ProductCard key={key} product={product} />;
        })}
      </div>
    </div>
  );
};

export default Categories;
