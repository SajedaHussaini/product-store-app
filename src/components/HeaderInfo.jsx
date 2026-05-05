import React from "react";
import { Box, Typography } from "@mui/material";
import { keyframes } from "@mui/system";
import shoptw from "../assets/shoptw.png";

/* 🔥 حرکت چپ و راست (swing) */
const swing = keyframes`
  0% { transform: rotate(0deg); }
  25% { transform: rotate(5deg); }
  50% { transform: rotate(0deg); }
  75% { transform: rotate(-5deg); }
  100% { transform: rotate(0deg); }
`;

/* ✨ متن fade-in */
const fadeUp = keyframes`
  0% { opacity: 0; transform: translateY(15px); }
  100% { opacity: 1; transform: translateY(0); }
`;

export default function NavbarInfo({ darkMode }) {
  return (
    <Box
      sx={{
        width: "100%",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        textAlign: "center",
        mt: 5,
        mb: 5,
      }}
    >
      {/* 🖼️ Logo */}
      <Box
        component="img"
        src={shoptw}
        alt="logo"
        sx={{
          width: { xs: 70, md: 50 },
          height: { xs: 70, md: 50 },
          objectFit: "contain",
          mb: 5,
          mt:5,
          borderRadius: "16px",

          /* 🎯 حرکت چپ و راست */
          animation: `${swing} 3s ease-in-out infinite`,

          transition: "0.3s",
          "&:hover": {
            transform: "scale(1.1)",
          },
        }}
      />

      {/* 🔥 Title */}
      <Typography
        variant="h3"
        fontWeight={600}
      >
        Welcome to Nexora Store
      </Typography>

      {/* ✨ Description */}
      <Typography
        variant="body1"
        sx={{
          mt: 1.5,
          mb:5,
          maxWidth: 520,
          animation: `${fadeUp} 1.2s ease`,
          opacity: darkMode ? 0.85 : 0.7,
          fontSize: { xs: "14px", md: "16px" },
        }}
      >
        Discover trending products with best prices and fast delivery
      </Typography>
    </Box>
  );
}
