import React from "react";
import { Route, Routes } from "react-router-dom";
import Layout from "../pages/layout/";
import Product from "pages/product";
import Error from "pages/error";
import Create from "pages/create";
import Home from "pages/home";
import ProductList from "pages/productlist";
import Update from "pages/update";
import Test from "pages/test";

type Props = {};

export const PublicRoutes = (props: Props) => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<ProductList />} />
        <Route path="/products/:id" element={<Product />} />
        <Route path="/create" element={<Create />} />
        <Route path="/update/:id" element={<Update />} />
        <Route path="*" element={<Error />} />
        <Route path="/test" element={<Test />} />
      </Route>
    </Routes>
  );
};

export default PublicRoutes;
