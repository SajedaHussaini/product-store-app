import React from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  increaseQuantity,
  decreaseQuantity,
  removeItem,
  clearCart,
} from "../features/cart/cartSlice";

import {
  Box,
  Typography,
  Button,
  IconButton,
  Avatar,
  Card,
  CardContent,
  Divider,
} from "@mui/material";

import DeleteIcon from "@mui/icons-material/Delete";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { Link as RouterLink, useNavigate } from "react-router-dom";
import EmptyCart from "../components/EmptyCart";
import { useSnackbar } from "notistack";

export default function Cart() {
  const items = useSelector((state) => state.cart.items);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { enqueueSnackbar } = useSnackbar();

  const handleRemove = (id) => {
    dispatch(removeItem(id));
    enqueueSnackbar("Item removed from cart", { variant: "info" });
  };

  const handleClearCart = () => {
    dispatch(clearCart());
    enqueueSnackbar("Cart cleared", { variant: "error" });
  };

  const total = items.reduce(
    (t, it) => t + it.price * it.quantity,
    0
  );

  if (!items.length) return <EmptyCart />;

  return (
    <Box
      sx={{
        maxWidth: 1100,
        mx: "auto",
        mt: { xs: 2, sm: 3 },
        px: { xs: 1.5, sm: 2 },
        mb: { xs: 6, md: 9 },
      }}
    >
      {/* HEADER */}
      <Box sx={{ display: "flex", alignItems: "center", mb: 2 }}>
        <Button
          startIcon={<ArrowBackIcon />}
          onClick={() => navigate(-1)}
          sx={{ textTransform: "none", fontWeight: 600 }}
        >
          Back
        </Button>
      </Box>

      {/* MAIN LAYOUT */}
      <Box
        sx={{
          display: "flex",
          gap: { xs: 2, md: 3 },
          flexDirection: { xs: "column", md: "row" },
        }}
      >
        {/*LEFT → ITEMS */}
        <Box sx={{ flex: 2 }}>
          <Typography
            variant="h5"
            fontWeight={700}
            sx={{ mb: { xs: 2, md: 4 }, fontSize: { xs: "1.3rem", md: "1.6rem" } }}
          >
            Shopping Cart
          </Typography>

          <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
            {items.map((item) => (
              <Card
                key={item.id}
                sx={{
                  display: "flex",
                  flexDirection: { xs: "column", sm: "row" },
                  alignItems: { xs: "flex-start", sm: "center" },
                  p: { xs: 1.5, sm: 2 },
                  borderRadius: 3,
                  boxShadow: 1,
                  gap: { xs: 1.5, sm: 2 },
                  transition: "0.2s",
                  "&:hover": {
                    boxShadow: 4,
                    transform: "translateY(-2px)",
                  },
                }}
              >
                <Avatar
                  src={item.thumbnail}
                  variant="rounded"
                  sx={{
                    width: { xs: 70, sm: 90 },
                    height: { xs: 70, sm: 90 },
                  }}
                />

                <CardContent sx={{ flex: 1, p: "0 !important" }}>
                  <Typography fontWeight={600} noWrap>
                    {item.title}
                  </Typography>

                  <Typography variant="body2" color="text.secondary">
                    ${item.price} × {item.quantity}
                  </Typography>

                  <Typography fontWeight={700} color="primary">
                    ${item.price * item.quantity}
                  </Typography>
                </CardContent>

                {/* CONTROLS */}
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    gap: 1,
                    flexWrap: "wrap",
                    mt: { xs: 1, sm: 0 },
                  }}
                >
                  <IconButton onClick={() => dispatch(decreaseQuantity(item.id))}>
                    <RemoveIcon fontSize="small" />
                  </IconButton>

                  <Typography>{item.quantity}</Typography>

                  <IconButton onClick={() => dispatch(increaseQuantity(item.id))}>
                    <AddIcon fontSize="small" />
                  </IconButton>

                  <IconButton onClick={() => handleRemove(item.id)}>
                    <DeleteIcon color="error" />
                  </IconButton>
                </Box>
              </Card>
            ))}
          </Box>
        </Box>

        {/*RIGHT → SUMMARY */}
        <Box sx={{ flex: 1, mt: { xs: 2, md: 8 } }}>
          <Card
            sx={{
              p: { xs: 2, sm: 3 },
              borderRadius: 3,
              boxShadow: 2,
            }}
          >
            <Typography
              variant="h6"
              fontWeight={700}
              mb={2}
              sx={{ fontSize: { xs: "1.1rem", md: "1.3rem" } }}
            >
              Order Summary
            </Typography>

            <Divider sx={{ mb: 2 }} />

            <Typography mb={1}>Items: {items.length}</Typography>

            <Typography variant="h6" fontWeight={700} mb={2}>
              Total: ${total}
            </Typography>

            <Box
              sx={{
                display: "flex",
                gap: 2,
                mt: 2,
                flexDirection: { xs: "column", sm: "row", },
              }}
            >
              <Button
                fullWidth
                variant="contained"
                sx={{ borderRadius: 2 }}
                component={RouterLink}
                to="/checkout"
              >
                Checkout
              </Button>

              <Button
                fullWidth
                variant="outlined"
                color="error"
                onClick={handleClearCart}
                sx={{ borderRadius: 2, }}
              >
                Clear Cart
              </Button>
            </Box>
          </Card>
        </Box>
      </Box>
    </Box>
  );
}
