import React from "react";
import { Box, Typography, Button } from "@mui/material";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { Link as RouterLink } from "react-router-dom";

export default function EmptyCart() {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        py: 8,
        textAlign: "center",
      }}
    >
      <ShoppingCartIcon
        sx={{
          fontSize: 70,
          color: "primary.main",
          mb: 2,
        }}
      />

      <Typography variant="h5" fontWeight={700} mb={1}>
        Your cart is empty
      </Typography>

      <Typography variant="body2" color="text.secondary" sx={{mt:2}}>
        Looks like you haven't added anything yet. Start shopping now!
      </Typography>

      <Button
        variant="contained"
        component={RouterLink}
        to="/"
        sx={{ borderRadius: 2, px: 3, mt:2 }}
      >
        Go Shopping
      </Button>
    </Box>
  );
}
