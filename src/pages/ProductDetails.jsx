import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import Loader from "../components/Loader";
import EmptyState from "../components/EmptyState";
import { useDispatch } from "react-redux";
import { addItem } from "../features/cart/cartSlice";
import { useSnackbar } from "notistack";

import {
  Box,
  Card,
  CardMedia,
  CardContent,
  Typography,
  Rating,
  Button,
  Chip,
  Divider,
} from "@mui/material";

import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";

export default function ProductDetails() {
  const { id } = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { enqueueSnackbar } = useSnackbar();
    const handleAddToCart = () => {
    dispatch(addItem(data));
  
    enqueueSnackbar("Added to cart!", {
      variant: "success",
      anchorOrigin: {
        vertical: "top",
        horizontal: "right",
      },
    });
  };
  

  const { data, isLoading, isError } = useQuery({
    queryKey: ["product", id],
    queryFn: async () => {
      const res = await axios.get(`https://dummyjson.com/products/${id}`);
      return res.data;
    },
  });

  if (isLoading) return <Loader />;
  if (isError || !data)
    return <EmptyState message="Product not found" />;

  return (
    <Box
      sx={{
        minHeight: "100vh",        // 👈 مهم برای فاصله بالا/پایین
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        // py: 5,                     // 👈 فاصله بالا و پایین
        // px: 2,
        mt:4,
        mb:7,
      }}
    >
      {/* 🔙 BACK BUTTON */}
      <Box sx={{ maxWidth: 1000, width: "100%", mx: "auto", mb: 2 }}>
        <Button
          startIcon={<ArrowBackIcon />}
          onClick={() => navigate(-1)}
          sx={{
            textTransform: "none",
            fontWeight: 600,
          }}
        >
          Back
        </Button>
      </Box>

      {/* PRODUCT CARD */}
      <Box sx={{ display: "flex", justifyContent: "center" }}>
        <Card
          sx={{
            width: "100%",
            maxWidth: 1000,
            display: "flex",
            flexDirection: { xs: "column", md: "row" },
            borderRadius: 4,
            overflow: "hidden",
            boxShadow: 6,
          }}
        >
          {/* IMAGE */}
          <CardMedia
            component="img"
            image={data.thumbnail}
            alt={data.title}
            sx={{
              width: { xs: "100%", md: 450 },
              height: 450,
              objectFit: "contain",
              p: 3,
              bgcolor: "#f7f7f7",
            }}
          />

          {/* CONTENT */}
          <CardContent sx={{ flex: 1, p: 4 }}>

            <Chip
              label={data.category}
              color="primary"
              size="small"
              sx={{ mb: 2 }}
            />

            <Typography variant="h4" fontWeight={700}>
              {data.title}
            </Typography>

            <Box sx={{ display: "flex", alignItems: "center", mt: 1 }}>
              <Rating value={data.rating} precision={0.1} readOnly />
              <Typography sx={{ ml: 1, color: "text.secondary" }}>
                {data.rating}
              </Typography>
            </Box>

            <Divider sx={{ my: 2 }} />

            <Typography variant="body1" color="text.secondary" sx={{ mb: 3 }}>
              {data.description}
            </Typography>

            <Typography variant="h5" fontWeight={700} color="primary">
              ${data.price}
            </Typography>

            <Button
              variant="contained"
              size="large"
              startIcon={<ShoppingCartIcon />}
              // onClick={() => dispatch(addItem(data))}
              onClick={handleAddToCart}
              sx={{
                mt: 3,
                bgcolor: "primary.main",
                "&:hover": { bgcolor: "primary.dark" },
                borderRadius: 2,
                textTransform: "none",
                px: 3,
              }}
            >
              Add to Cart
            </Button>

          </CardContent>
        </Card>
      </Box>
    </Box>
  );
}
