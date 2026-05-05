import { useQuery } from "@tanstack/react-query";
import axios from "axios";

const PAGE_SIZE = 12;

const fetchProducts = async ({ queryKey }) => {
  const [, page, search, category, sortBy] = queryKey;

  let url = "https://dummyjson.com/products";
  let params = new URLSearchParams();

  params.append("limit", PAGE_SIZE);
  params.append("skip", (page - 1) * PAGE_SIZE);

  // 🔍 SEARCH (اولویت بالا)
  if (search) {
    url = "https://dummyjson.com/products/search";
    params.set("q", search);
  }

  // 📦 CATEGORY (اگر سرچ نیست)
  if (category && category !== "all" && !search) {
    url = `https://dummyjson.com/products/category/${category}`;
  }

  const res = await axios.get(`${url}?${params.toString()}`);

  let products = res.data.products || res.data;

  // 🔃 SORT
  if (sortBy === "price-asc") {
    products = [...products].sort((a, b) => a.price - b.price);
  }

  if (sortBy === "price-desc") {
    products = [...products].sort((a, b) => b.price - a.price);
  }

  if (sortBy === "rating-desc") {
    products = [...products].sort((a, b) => b.rating - a.rating);
  }

  return {
    products,
    total: res.data.total || products.length,
  };
};

export const useProducts = (page, search, category, sortBy) => {
  return useQuery({
    queryKey: ["products", page, search, category, sortBy],
    queryFn: fetchProducts,
  });
};
