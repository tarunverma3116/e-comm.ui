import React from "react";
import { Route, Routes } from "react-router-dom";
import Layout from "../pages/layout/";
import { useNavigate } from "react-router-dom";
import Products from "pages/products";
import Product from "pages/product";

type Props = {
  account: any;
  setAccount: any;
};

export const PublicRoutes = (props: Props) => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route path="/products" element={<Products />} />
        <Route path="/product/:id" element={<Product />} />
      </Route>
    </Routes>
  );
};

export const PrivateRoutes = (props: Props) => {
  const [loading, setLoading] = React.useState<boolean>(false);

  if (loading) {
    return <div>Loading...</div>;
  }

  return <Routes></Routes>;
};

export default PublicRoutes;
