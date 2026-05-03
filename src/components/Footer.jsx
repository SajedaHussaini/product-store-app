import { Box, Typography } from "@mui/material";
import React from "react";

export default function Footer() {
  return (
    <Box py={2} textAlign="center">
      <Typography color="text.secondary" variant="body2">
        © {new Date().getFullYear()} Product Store | All Rights Reserved
      </Typography>
    </Box>
  );
}
