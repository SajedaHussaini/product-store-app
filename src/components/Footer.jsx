import React from "react";
import {
  Box,
  Typography,
  Grid,
  IconButton,
  Link,
  Container,
} from "@mui/material";
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
        mt: { xs: 6, md: 8 },
        bgcolor: "background.paper",
        borderTop: "1px solid",
        borderColor: "divider",
      }}
    >
      <Container maxWidth="lg">
        <Grid
          container
          spacing={{ xs: 4, sm: 6, md: 10 }}
          sx={{ mt: { xs: 3, md: 5 } }}
        >

          <Grid item xs={12} sm={4}>
            <Box textAlign={{ xs: "center", sm: "left" }}>
              <Typography fontWeight={800} mb={2} variant="h6" color="text.secondary">
                Nexora Store
              </Typography>

              <Typography
                sx={{ color: "gray" }}
                variant="body2"

                lineHeight={1.8}
              >
                A modern e-commerce platform for exploring and buying quality
                products.
              </Typography>
            </Box>
          </Grid>

          {/* QUICK LINKS */}
          <Grid item xs={12} sm={4}>
            <Box textAlign={{ xs: "center", sm: "left" }}>
              <Typography fontWeight={700} variant="h6" mb={1}>
                Quick Links
              </Typography>

              <Box sx={{ mb: 2 }}>
                <NavLink to="/" style={linkStyle}>
                  Home
                </NavLink>
                <NavLink to="/cart" style={linkStyle}>
                  Cart
                </NavLink>
                <NavLink to="/checkout" style={linkStyle}>
                  Checkout
                </NavLink>
              </Box>
            </Box>
          </Grid>

          {/*  SOCIAL links */}
          <Grid item xs={12} sm={4}>
            <Box textAlign={{ xs: "center", sm: "left" }}>
              <Typography fontWeight={700} mb={2} variant="h6">
                Connect
              </Typography>

              <Box
                sx={{
                  mt: 1,
                  display: "flex",
                  justifyContent: { xs: "center", sm: "flex-start" },
                  gap: 1,
                }}
              >
                <IconButton
                  component={Link}
                  href="https://github.com/SajedaHussaini"
                  target="_blank"
                  sx={{
                    color: "#333",
                    width: { xs: 36, sm: 40 },
                    height: { xs: 36, sm: 40 },
                    "& svg": {
                      fontSize: { xs: 20, sm: 24 },
                    },
                    "&:hover": {
                      bgcolor: "rgba(0,0,0,0.1)",
                    },
                  }}
                >
                  <GitHubIcon />
                </IconButton>

                <IconButton
                  component={Link}
                  href="https://www.linkedin.com/in/sajeda-hussaini-183613396"
                  target="_blank"
                  sx={{
                    color: "#0077b5",
                    width: { xs: 36, sm: 40 },
                    height: { xs: 36, sm: 40 },
                    "& svg": {
                      fontSize: { xs: 20, sm: 24 },
                    },
                    "&:hover": {
                      bgcolor: "rgba(0,119,181,0.1)",
                    },
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
                    width: { xs: 36, sm: 40 },
                    height: { xs: 36, sm: 40 },
                    "& svg": {
                      fontSize: { xs: 20, sm: 24 },
                    },
                    "&:hover": {
                      bgcolor: "rgba(29,161,242,0.1)",
                    },
                  }}
                >
                  <TwitterIcon />
                </IconButton>
              </Box>
            </Box>
          </Grid>
        </Grid>
      </Container>

      <Box
        sx={{
          textAlign: "center",
          py: { xs: 1.5, sm: 2 },
          mt: { xs: 2, sm: 3 },
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
