import React from "react";
import ProductCard from "components/Cards/ProductCard";

type Props = {
  products: any;
  loading: boolean;
  skip: number;
  handleLoadMore: () => void;
};

const Searched = (props: Props) => {
  return (
    <div>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 w-full h-full">
        {props.products?.map((product: any, key: any) => {
          return <ProductCard key={key} product={product} />;
        })}
      </div>
      {!props.loading && props.skip <= props.products.length && (
        <button
          className="primary-button mx-auto mt-8"
          onClick={props.handleLoadMore}
        >
          Load More Items
        </button>
      )}
    </div>
  );
};

export default Searched;
