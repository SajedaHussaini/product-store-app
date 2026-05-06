import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
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
  CircularProgress,
} from "@mui/material";

import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";

export default function ProductDetails() {
  const { id } = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { enqueueSnackbar } = useSnackbar();

  const { data, isLoading, isError } = useQuery({
    queryKey: ["product", id],
    queryFn: async () => {
      const res = await axios.get(`https://dummyjson.com/products/${id}`);
      return res.data;
    },
  });

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

  if (isLoading)
    return (
      <Box display="flex" justifyContent="center" mt={10}>
        <CircularProgress />
      </Box>
    );

  if (isError || !data)
    return <EmptyState message="Product not found" />;

  return (
    <Box
      sx={{
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        mt: { xs: 2, md: 4 },
        mb: { xs: 4, md: 7 },
        px: { xs: 1, sm: 2 },
      }}
    >
      {/*BACK BUTTON */}
      <Box
        sx={{
          maxWidth: 1000,
          width: "100%",
          mx: "auto",
          mb: { xs: 1, md: 2 },
        }}
      >
        <Button
          startIcon={<ArrowBackIcon />}
          onClick={() => navigate(-1)}
          sx={{
            textTransform: "none",
            fontWeight: 600,
            fontSize: { xs: 13, sm: 14 },
          }}
        >
          Back
        </Button>
      </Box>

      {/*PRODUCT CARD */}
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
          {/*IMAGE */}
          <CardMedia
            component="img"
            image={data.thumbnail}
            alt={data.title}
            sx={{
              width: { xs: "100%", md: 450 },
              height: { xs: 260, sm: 320, md: 450 },
              objectFit: "contain",
              p: { xs: 2, sm: 3 },
              bgcolor: "#f7f7f7",
            }}
          />

          {/*CONTENT */}
          <CardContent
            sx={{
              flex: 1,
              p: { xs: 2, sm: 3, md: 4 },
            }}
          >
            <Chip
              label={data.category}
              color="primary"
              size="small"
              sx={{ mb: 2 }}
            />

            <Typography
              variant="h4"
              fontWeight={700}
              sx={{
                fontSize: { xs: "1.4rem", sm: "1.8rem", md: "2rem" },
              }}
            >
              {data.title}
            </Typography>

            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                mt: 1,
              }}
            >
              <Rating
                value={data.rating}
                precision={0.1}
                readOnly
                size="small"
              />
              <Typography
                sx={{
                  ml: 1,
                  color: "text.secondary",
                  fontSize: { xs: 13, sm: 14 },
                }}
              >
                {data.rating}
              </Typography>
            </Box>

            <Divider sx={{ my: 2 }} />

            <Typography
              variant="body1"
              color="text.secondary"
              sx={{
                mb: 3,
                fontSize: { xs: 14, sm: 15 },
                lineHeight: 1.7,
              }}
            >
              {data.description}
            </Typography>

            <Typography
              variant="h5"
              fontWeight={700}
              color="primary"
              sx={{
                fontSize: { xs: "1.3rem", sm: "1.6rem" },
              }}
            >
              ${data.price}
            </Typography>

            <Button
              variant="contained"
              size="large"
              startIcon={<ShoppingCartIcon />}
              onClick={handleAddToCart}
              sx={{
                mt: 3,
                width: { xs: "100%", sm: "auto" },
                bgcolor: "primary.main",
                "&:hover": { bgcolor: "primary.dark" },
                borderRadius: 2,
                textTransform: "none",
                px: { xs: 2, sm: 3 },
                fontSize: { xs: 13, sm: 14 },
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
