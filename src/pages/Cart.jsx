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
  List,
  ListItem,
  ListItemText,
  ListItemAvatar,
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

  enqueueSnackbar("Item removed from cart", {
    variant: "info",
  });
};

const handleClearCart = () => {
  dispatch(clearCart());

  enqueueSnackbar("Cart cleared", {
    variant: "error",
  });
};


  const total = items.reduce(
    (t, it) => t + it.price * it.quantity,
    0
  );

  if (!items.length)
    return (
    <EmptyCart/>
    );

  return (
    <Box sx={{ maxWidth: 1100, mx: "auto", mt: 3, px: 2, mb:9 }}>

      {/* 🔙 HEADER */}
      <Box sx={{ display: "flex", alignItems: "center", mb: 2 }}>
        <Button
          startIcon={<ArrowBackIcon />}
          onClick={() => navigate(-1)}
          sx={{ textTransform: "none", fontWeight: 600 }}
        >
          Back
        </Button>
      </Box>

      {/* 🔥 MAIN LAYOUT */}
      <Box
        sx={{
          display: "flex",
          gap: 3,
          flexDirection: { xs: "column", md: "row" }, // ریسپانسیو
        }}
      >

        {/* 🛒 LEFT → ITEMS */}
        <Box sx={{ flex: 2 }}>
          <Typography variant="h5" fontWeight={700} sx={{mb:4}}>
            Shopping Cart
          </Typography>

          <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
            {items.map((item) => (
              <Card
                key={item.id}
                sx={{
                  display: "flex",
                  alignItems: "center",
                  p: 2,
                  borderRadius: 3,
                  boxShadow: 1,
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
                  sx={{ width: 80, height: 80, mr: 2 }}
                />

                <CardContent sx={{ flex: 1 }}>
                  <Typography fontWeight={600}>
                    {item.title}
                  </Typography>

                  <Typography variant="body2" color="text.secondary">
                    ${item.price} × {item.quantity}
                  </Typography>

                  <Typography fontWeight={700} color="primary">
                    ${item.price * item.quantity}
                  </Typography>
                </CardContent>

                <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
                  <IconButton onClick={() => dispatch(decreaseQuantity(item.id))}>
                    <RemoveIcon fontSize="small" />
                  </IconButton>

                  <Typography>{item.quantity}</Typography>

                  <IconButton onClick={() => dispatch(increaseQuantity(item.id))}>
                    <AddIcon fontSize="small" />
                  </IconButton>

                  {/* <IconButton onClick={() => dispatch(removeItem(item.id))}> */}
                  <IconButton onClick={() => handleRemove(item.id)}>
                    <DeleteIcon color="error" />
                  </IconButton>
                </Box>
              </Card>
            ))}
          </Box>
        </Box>

        {/* 💳 RIGHT → SUMMARY */}
        <Box sx={{ flex: 1, mt:{xs:2, md:8} }}>
          <Card
            sx={{
              p: 3,
              borderRadius: 3,
              boxShadow: 2,
              // position: "sticky",
              // top: 20, 
              alignItems:"flex-end"
            }}
          >
            <Typography variant="h6" fontWeight={700} mb={2}>
              Order Summary
            </Typography>

            <Divider sx={{ mb: 2 }} />

            <Typography mb={1}>
              Items: {items.length}
            </Typography>

            <Typography variant="h6" fontWeight={700} mb={2}>
              Total: ${total}
            </Typography>

            <Box sx={{display:"flex", gap:2}}>
            <Button
              // fullWidth
              variant="contained"
              sx={{ mt: 2, borderRadius: 2, pl:1 }}
              component={RouterLink}
              to="/checkout"
            >
              Checkout
            </Button>

            <Button
              // fullWidth
              variant="outlined"
              color="error"
              // onClick={() => dispatch(clearCart())}
              onClick={handleClearCart}
              sx={{ mt: 2,borderRadius: 2 }}
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

