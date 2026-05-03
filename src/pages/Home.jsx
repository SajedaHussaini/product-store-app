import React, { useState } from "react";
import { useProducts } from "../hooks/useProducts";
import ProductCard from "../components/ProductCard";
import SkeletonGrid from "../components/SkeletonGrid";
import EmptyState from "../components/EmptyState";
import SearchBar from "../components/SearchBar";
import Filter from "../components/Filter";
import Sort from "../components/Sort";
import Toolbar from "../components/Toolbar";
// import { useSettings } from "../features/products/SettingsContext";
import { useSettings } from "../context/SettingsContext";
import { Grid, List, ListItem, Pagination, Box, Typography } from "@mui/material";

const PAGE_SIZE = 12;

export default function Home() {
  const [page, setPage] = useState(1);
  const [search, setSearch] = useState('');
  const [category, setCategory] = useState('all');
  const [sortBy, setSortBy] = useState('');
  const { state: { gridView } } = useSettings();
  const { data, isLoading, isError } = useProducts(page, search, category, sortBy);

  if (isLoading) return <SkeletonGrid gridView={gridView} />;
  if (isError) return <EmptyState message="Failed to load products" />;

  const totalPages = Math.ceil((data.total || 0) / PAGE_SIZE);

  return (
    <Box sx={{px: { xs: 1, sm: 2, md: 3 }}}>
      <Toolbar>
        <SearchBar value={search} onChange={e => setSearch(e.target.value)} />
        <Filter value={category} onChange={setCategory} />
        <Sort value={sortBy} onChange={setSortBy} />
      </Toolbar>
      {data.products.length === 0 ? (
        <EmptyState message="No products found!" />
      ) : gridView ? (
        <Grid container spacing={2} mt={1}>
          {data.products.map(product => (
            <Grid item key={product.id} xs={12} sm={6} md={4} lg={3}>
              <ProductCard product={product} />
            </Grid>
          ))}
        </Grid>
      ) : (
        <List>
          {data.products.map(product => (
            <ListItem key={product.id}>
              <ProductCard product={product} />
            </ListItem>
          ))}
        </List>
      )}
      <Box display="flex" justifyContent="center" alignItems="center" mt={3}>
        <Pagination
          count={totalPages}
          page={page}
          color="primary"
          size="large"
          showFirstButton
          showLastButton
          onChange={(_, newPage) => setPage(newPage)}
        />
        <Typography sx={{ml:2}}>Page {page} of {totalPages}</Typography>
      </Box>
    </Box>
  );
}
