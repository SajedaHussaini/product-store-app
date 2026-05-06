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
} from "@mui/material";

const PAGE_SIZE = 12;

export default function Home() {
  const [page, setPage] = useState(1);

  const [inputValue, setInputValue] = useState("");
  const [search, setSearch] = useState("");

  const [category, setCategory] = useState("all");
  const [sortBy, setSortBy] = useState("");

  const {
    state: { gridView },
  } = useSettings();

  useEffect(() => {
    if (inputValue === "") {
      setSearch("");
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
  if (isError) return <EmptyState message="Failed to load products" />;

  const totalPages = Math.ceil((data.total || 0) / PAGE_SIZE);

  return (
    <Box
      sx={{
        px: { xs: 1, sm: 2, md: 3 },
        mb: 6,
        maxWidth: "1400px",
        mx: "auto",
      }}
    >
      <Toolbar
        sx={{
          flexDirection: { xs: "column", md: "row" },
          alignItems: "stretch",
        }}
      >
        <SearchBar
          value={inputValue}
          onChange={setInputValue}
          onSubmit={() => {
            setSearch(inputValue);
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

      {/*PRODUCTS */}
      {data.products.length === 0 ? (
        <EmptyState message="No products found!" showHint={true} />
      ) : gridView ? (
        <Grid
          container
          spacing={{ xs: 2, sm: 2, md: 3 }}
          justifyContent="center"
          alignItems="stretch"
        >
          {data.products.map((product) => (
            <Grid
              item
              key={product.id}
              xs={12}
              sm={6}
              md={4}
              lg={3}
              sx={{
                display: "flex",
                justifyContent: "center",
              }}
            >
              <ProductCard product={product} />
            </Grid>
          ))}
        </Grid>
      ) : (
        <List>
          {data.products.map((product) => (
            <ListItem
              key={product.id}
              sx={{
                px: { xs: 0, sm: 1 },
              }}
            >
              <ProductCard product={product} />
            </ListItem>
          ))}
        </List>
      )}

      {/*PAGINATION */}
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          mt: 4,
          py: 2,
          px: 1,
          flexWrap: "wrap",
        }}
      >
        <Pagination
          count={totalPages}
          page={page}
          color="primary"
          size="small"
          showFirstButton
          showLastButton
          onChange={(_, newPage) => setPage(newPage)}
          sx={{
            "& .MuiPaginationItem-root": {
              fontSize: { xs: "0.65rem", sm: "0.85rem" },
              minWidth: { xs: 20, sm: 32 },
              height: { xs: 20, sm: 32 },
            },
          }}
        />
      </Box>
    </Box>
  );
}
