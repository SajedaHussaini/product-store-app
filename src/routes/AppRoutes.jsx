import { Routes, Route } from "react-router-dom";
// import Layout from "../layouts/Layout";
import Layout from "../layout/Layout"
import Home from "../pages/Home";
import Cart from "../pages/Cart";
// import ProductDetails from "../pages/ProductDetails";
import ProductDetails from "../pages/ProductDetails"
import Checkout from "../pages/Checkout";

export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="cart" element={<Cart />} />
        <Route path="products/:id" element={<ProductDetails />} />
        <Route path="checkout" element={<Checkout />} />
      </Route>
    </Routes>
  );
}
