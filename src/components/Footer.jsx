import React from "react";
import { Box, Typography, Grid, IconButton, Link, Container } from "@mui/material";
import { NavLink } from "react-router-dom";

import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import TwitterIcon from "@mui/icons-material/Twitter";

export default function Footer() {
  const linkStyle = ({ isActive }) => ({
    display: "block",
    color: isActive ? "#2e7d32" : "#555",
    textDecoration: "none",
    fontSize: "0.9rem",
    fontWeight: isActive ? 600 : 400,
    padding: "6px 0",
    borderBottom: "1px solid #eee",
    transition: "0.2s",
  });

  return (
    <Box
      sx={{
        mt: 8, // 👈 فاصله از بالا
        bgcolor: "background.paper",
        borderTop: "1px solid",
        borderColor: "divider",
      }}
    >
      <Container maxWidth="lg">
        <Grid
        sx={{mt:5}}
          container
          spacing={15} // 👈 فاصله بین ستون‌ها بیشتر
          // py={6} 
              // 👈 فاصله بالا/پایین داخل فوتر
        >

          {/* 🛍️ ABOUT */}
          <Grid item xs={12} sm={4}>
            <Typography fontWeight={800} mb={2} variant="h6">
              Nexora Store
            </Typography>

            <Typography variant="body2" color="text.secondary" lineHeight={1.8}>
              A modern e-commerce platform for exploring and buying quality products.
            </Typography>
          </Grid>

          {/* 🔗 QUICK LINKS */}
          <Grid item xs={12} sm={4}>
            <Typography fontWeight={700} variant="h6">
              Quick Links
            </Typography>

            <Box sx={{mb:2}}>
              <NavLink to="/" style={linkStyle}>Home</NavLink>
              <NavLink to="/cart" style={linkStyle}>Cart</NavLink>
              <NavLink to="/checkout" style={linkStyle}>Checkout</NavLink>
              {/* <NavLink to="/products/1" style={linkStyle}>Details</NavLink> */}
            </Box>
          </Grid>

          {/* 🌐 SOCIAL */}
          <Grid item xs={12} sm={4}>
            <Typography fontWeight={700} mb={2} variant="h6">
              Connect
            </Typography>

            <Box sx={{ mt: 1 }}>
              <IconButton
                component={Link}
                href="https://github.com/SajedaHussaini"
                target="_blank"
                sx={{
                  color: "#333",
                  mr: 1, // 👈 فاصله بین آیکن‌ها
                  "&:hover": { bgcolor: "rgba(0,0,0,0.1)" },
                }}
              >
                <GitHubIcon />
              </IconButton>

              <IconButton
                component={Link}
                href="https://www.linkedin.com/in/sajeda-hussaini-183613396?utm_source=share_via&utm_content=profile&utm_medium=member_android"
                
                target="_blank"
                sx={{
                  color: "#0077b5",
                  mr: 1,
                  "&:hover": { bgcolor: "rgba(0,119,181,0.1)" },
                }}
              >
                <LinkedInIcon />
              </IconButton>

              <IconButton
                component={Link}
                href="https://x.com/HussainiSajeda"
                target="_blank"
                sx={{
                  color: "#1da1f2",
                  "&:hover": { bgcolor: "rgba(29,161,242,0.1)" },
                }}
              >
                <TwitterIcon />
              </IconButton>
            </Box>
          </Grid>

        </Grid>
      </Container>

      {/* 🔽 COPYRIGHT */}
      <Box
        sx={{
          textAlign: "center",
          py: 2,
          borderTop: "1px solid",
          borderColor: "divider",
        }}
      >
        <Typography variant="body2" color="text.secondary">
          © {new Date().getFullYear()} Nexora Store — All rights reserved
        </Typography>
      </Box>
    </Box>
  );
}