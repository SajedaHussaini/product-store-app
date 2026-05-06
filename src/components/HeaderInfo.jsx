import React from "react";
import { Box, Typography } from "@mui/material";
import { keyframes } from "@mui/system";
import shoptw from "../assets/shoptw.png";


const swing = keyframes`
  0% { transform: rotate(0deg); }
  25% { transform: rotate(5deg); }
  50% { transform: rotate(0deg); }
  75% { transform: rotate(-5deg); }
  100% { transform: rotate(0deg); }
`;

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
        mt: { xs: 3, sm: 4, md: 5 },
        mb: { xs: 3, sm: 4, md: 5 },
        px: { xs: 2, sm: 3 },
      }}
    >

      <Box
        component="img"
        src={shoptw}
        alt="logo"
        sx={{
          width: { xs: 40, sm: 70, md: 60 },
          height: { xs: 40, sm: 70, md: 60 },
          objectFit: "contain",
          mb: { xs: 3, sm: 4, md: 5 },
          mt: { xs: 2, sm: 3, md: 4 },
          borderRadius: "16px",

          animation: `${swing} 3s ease-in-out infinite`,

          transition: "0.3s",
          "&:hover": {
            transform: "scale(1.1)",
          },
        }}
      />

      <Typography
        variant="h3"
        fontWeight={600}
        sx={{
          fontSize: {
            xs: "1.6rem",
            sm: "2rem",
            md: "2.5rem",
          },
          lineHeight: 1.3,
        }}
      >
        Welcome to Nexora Store
      </Typography>

      <Typography
        variant="body1"
        sx={{
          mt: { xs: 1, sm: 1.5 },
          mb: { xs: 3, sm: 4, md: 5 },
          maxWidth: { xs: "100%", sm: 500, md: 520 },
          animation: `${fadeUp} 1.2s ease`,
          opacity: darkMode ? 0.85 : 0.7,
          fontSize: { xs: "0.85rem", sm: "0.95rem", md: "1rem" },
          lineHeight: 1.7,
        }}
      >
        Discover trending products with best prices and fast delivery
      </Typography>
    </Box>
  );
}
