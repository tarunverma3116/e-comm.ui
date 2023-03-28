import React from "react";
import { Route, Routes } from "react-router-dom";
import Layout from "../pages/layout/";
import Products from "pages/products";
import Product from "pages/product";
import Error from "pages/error";
import Create from "pages/create";
import Home from "pages/home";

type Props = {};

export const PublicRoutes = (props: Props) => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route path="/home" element={<Home />} />
        <Route path="/products" element={<Products />} />
        <Route path="/products/:id" element={<Product />} />
        <Route path="/create" element={<Create />} />
        <Route path="*" element={<Error />} />
      </Route>
    </Routes>
  );
};

export default PublicRoutes;
