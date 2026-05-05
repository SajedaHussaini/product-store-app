import React from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  IconButton,
  Badge,
  Box,
  Tooltip,
  Stack,
} from "@mui/material";

import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import ViewComfyIcon from "@mui/icons-material/ViewComfy";
import ViewListIcon from "@mui/icons-material/ViewList";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import LightModeIcon from "@mui/icons-material/LightMode";

import { Link as RouterLink } from "react-router-dom";
import { useSelector } from "react-redux";
import { useSettings } from "../context/SettingsContext";

import shoptw from "../assets/shoptw.png";

export default function Navbar() {
  const cartCount = useSelector((state) =>
    state.cart.items.reduce((sum, item) => sum + item.quantity, 0)
  );

  const { state, dispatch } = useSettings();

  return (
    <AppBar
      position="sticky"
      elevation={3}
      sx={{
        bgcolor: state.darkMode ? "#000000ec" : "#ffffff",
        color: state.darkMode ? "#ffffff" : "#090909e9",
        borderBottom: state.darkMode ? "1px solid #ff7a00" : "none",
        transition: "0.3s",
      }}
    >
      <Toolbar>

        {/* 🔵 LEFT */}
        <Box
          component={RouterLink}
          to="/"
          sx={{
            display: "flex",
            alignItems: "center",
            textDecoration: "none",
            flexGrow: 1,
            minHeight:64,
            px:2,
          }}
        >
          <Box
            component="img"
            src={shoptw}
            alt="logo"
            sx={{
              width: 48,
              height: 48,
              objectFit: "contain",
              mr: 1.5,
              borderRadius: "10px",
            }}
          />

          <Typography variant="h5" fontWeight={700}>
            <span style={{ color: state.darkMode ? "#ffffff" : "#111" }}>
              Nexora
            </span>{" "}
            <span style={{ color: "#ff7a00" }}>Store</span>
          </Typography>
        </Box>

        {/* 🔵 RIGHT */}
        {/* <Box display="flex" alignItems="center" sx={{gap:2.5}}> */}
        <Stack direction="row" spacing={1} alignItems="center">

          {/* Grid / List */}
          <Tooltip title={state.gridView ? "List View" : "Grid View"}>
            <IconButton
              onClick={() => dispatch({ type: "TOGGLE_GRID_VIEW" })}
              sx={{
                p:1,
                width:39,
                height:39,
                border: "1px solid #ff7a00",
                borderRadius: "10px",
                bgcolor: state.gridView ? "#ff8a00" : "transparent",
                color: state.gridView ? "#fff" : "#ff7a00",
                "&:hover": {
                  bgcolor: "#fd9319",
                  color: "#fff",
                },
              }}
            >
              {state.gridView ? (
                <ViewComfyIcon fontSize="small" />
              ) : (
                <ViewListIcon fontSize="small" />
              )}
            </IconButton>
          </Tooltip>

          {/* Theme */}
          <Tooltip title={state.darkMode ? "Light Mode" : "Dark Mode"}>
            <IconButton
              onClick={() => dispatch({ type: "TOGGLE_DARK_MODE" })}
              sx={{
                p:1,
                width:39,
                height:39,
                border: "1px solid #ff7a00",
                borderRadius: "10px",
                bgcolor: state.darkMode ? "#1e1e1e" : "transparent",
                color: "#ff7a00",
                "&:hover": {
                  bgcolor: state.darkMode ? "#2a2a2a" : "#fff3e0",
                },
              }}
            >
              {state.darkMode ? (
                <LightModeIcon fontSize="small" />
              ) : (
                <DarkModeIcon fontSize="small" />
              )}
            </IconButton>
          </Tooltip>

          {/* Cart */}
          <Tooltip title="Shopping Cart">
            <IconButton
              component={RouterLink}
              to="/cart"
              sx={{
                p:1,
                width:39,
                height:39,
                bgcolor: "#ff7a00",
                borderRadius: "10px",
                "&:hover": {
                  bgcolor: "#e66900",
                },
              }}
            >
              <Badge
                badgeContent={cartCount}
                max={99}
                sx={{
                  "& .MuiBadge-badge": {
                    backgroundColor: "#fff",
                    color: "#111",
                    border: "2px solid #ff7a00",
                  },
                }}
              >
                <ShoppingCartIcon sx={{ color: "#fff" }} />
              </Badge>
            </IconButton>
          </Tooltip>

        {/* </Box> */}
        </Stack>
      </Toolbar>
    </AppBar>
  );
}
