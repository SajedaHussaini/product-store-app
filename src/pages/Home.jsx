import React, { useEffect, useState } from "react";
import { useProducts } from "../hooks/useProducts";
import ProductCard from "../components/ProductCard";
import SkeletonGrid from "../components/SkeletonGrid";
import EmptyState from "../components/EmptyState";
import SearchBar from "../components/SearchBar";
import Filter from "../components/Filter";
import Sort from "../components/Sort";
import Toolbar from "../components/Toolbar";
import { useSettings } from "../context/SettingsContext";
import {
  Grid,
  List,
  ListItem,
  Pagination,
  Box,
  Typography,
} from "@mui/material";

const PAGE_SIZE = 12;

export default function Home() {
  const [page, setPage] = useState(1);

  // 🔥 مهم
  const [inputValue, setInputValue] = useState(""); // تایپ کاربر
  const [search, setSearch] = useState(""); // مقدار واقعی برای API

  const [category, setCategory] = useState("all");
  const [sortBy, setSortBy] = useState("");

  const {
    state: { gridView },
  } = useSettings();

  useEffect(() => {
  if (inputValue === "") {
    setSearch("");   // 🔥 پاک شدن نتایج
    setPage(1);
  }
}, [inputValue]);

  const { data, isLoading, isError } = useProducts(
    page,
    search,
    category,
    sortBy
  );

  if (isLoading) return <SkeletonGrid gridView={gridView} />;
  if (isError) return <EmptyState message="Failed to load products"/>;

  const totalPages = Math.ceil((data.total || 0) / PAGE_SIZE);

  return (
    <Box sx={{ px: { xs: 1, sm: 2, md: 3 }, mb:6, }}>
      
      {/* 🔍 Toolbar */}
      <Toolbar>

        <SearchBar
          value={inputValue}
          onChange={setInputValue}
          onSubmit={() => {
            setSearch(inputValue); // 🔥 فقط اینجا سرچ اجرا میشه
            setPage(1);
          }}
        />

        <Filter
          value={category}
          onChange={(val) => {
            setCategory(val);
            setPage(1);
          }}
        />

        <Sort value={sortBy} onChange={setSortBy} />

      </Toolbar>

      {/* 🛒 Products */}
      {data.products.length === 0 ? (
        <EmptyState message="No products found!" showHint={true}/>
      ) : gridView ? (
        <Grid
  container
  spacing={3}
  justifyContent="center"
  alignItems="stretch"
>
  {data.products.map((product) => (
    <Grid
      item
      key={product.id}
      md={4}
      lg={3}
      xs={12}
      sm={6}
      
//       md={6}
// lg={4}
      sx={{ display: "flex", justifyContent: "center", }}
    >
      <ProductCard product={product} />
    </Grid>
  ))}
</Grid>
      ) : (
        <List>
          {data.products.map((product) => (
            <ListItem key={product.id} >
              <ProductCard product={product} />
            </ListItem>
          ))}
        </List>
      )}

      {/* 📄 Pagination */}
      <Box
  sx={{
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    gap: 2,
    mt: 4,
    py: 2,
  }}
>
  <Pagination
    count={totalPages}
    page={page}
    color="primary"
    size="small"   // 👈 کوچکتر
    showFirstButton
    showLastButton
    onChange={(_, newPage) => setPage(newPage)}
    sx={{
      "& .MuiPaginationItem-root": {
        fontSize: "0.8rem",
        minWidth: 30,
        height: 30,
      },
    }}
  />

</Box>
    </Box>
  );
}
