import React from "react";
import { Box, Typography, Button } from "@mui/material";
import { useDispatch } from "react-redux";
import { clearCart } from "../features/cart/cartSlice";
import { Link as RouterLink } from "react-router-dom";

export default function Checkout() {
  const dispatch = useDispatch();
  // فرض محض checkout موفق می‌شود:
  return (
    <Box textAlign="center" mt={6}>
      <Typography variant="h4" mb={2}>Thank you for your purchase!</Typography>
      <Button component={RouterLink} to="/" variant="contained" onClick={() => dispatch(clearCart())}>Back to Store</Button>
    </Box>
  );
}
