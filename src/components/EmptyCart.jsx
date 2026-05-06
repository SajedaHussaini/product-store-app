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
        py: { xs: 6, sm: 8, md: 10 },
        px: { xs: 2, sm: 3 },
        textAlign: "center",
        minHeight: "60vh",
      }}
    >
      <ShoppingCartIcon
        sx={{
          fontSize: { xs: 50, sm: 60, md: 70 },
          color: "primary.main",
          mb: { xs: 1.5, sm: 2 },
        }}
      />

      <Typography
        variant="h5"
        fontWeight={700}
        mb={1}
        sx={{
          fontSize: { xs: "1.3rem", sm: "1.5rem", md: "1.7rem" },
        }}
      >
        Your cart is empty
      </Typography>

      <Typography
        variant="body2"
        color="text.secondary"
        sx={{
          mt: 2,
          maxWidth: 400,
          fontSize: { xs: "0.85rem", sm: "0.95rem" },
          lineHeight: 1.6,
        }}
      >
        Looks like you haven't added anything yet. Start shopping now!
      </Typography>

      <Button
        variant="contained"
        component={RouterLink}
        to="/"
        sx={{
          borderRadius: 2,
          px: { xs: 2.5, sm: 3.5 },
          py: { xs: 1, sm: 1.2 },
          mt: { xs: 2.5, sm: 3 },
          fontSize: { xs: "0.85rem", sm: "0.95rem" },
          textTransform: "none",
        }}
      >
        Go Shopping
      </Button>
    </Box>
  );
}
