import React from "react";
import { AppBar, Toolbar, Typography, Switch, IconButton, Badge } from "@mui/material";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { Link as RouterLink } from "react-router-dom";
import { useSelector } from "react-redux";
import { useSettings } from "../context/SettingsContext";

export default function Navbar() {
  const cartCount = useSelector(state => state.cart.items.reduce((sum, item) => sum + item.quantity, 0));
  const { state, dispatch } = useSettings();

  return (
    <AppBar position="static" color="primary">
      <Toolbar>
        <Typography
          component={RouterLink}
          to="/"
          variant="h6"
          color="inherit"
          sx={{ textDecoration: "none", flexGrow: 1 }}
        >
          My Product Store
        </Typography>
        <Switch
          checked={state.darkMode}
          onChange={() => dispatch({ type: "TOGGLE_DARK_MODE" })}
          color="default"
          inputProps={{ 'aria-label': 'toggle dark mode' }}
        />
        <IconButton component={RouterLink} to="/cart" size="large" color="inherit">
          <Badge badgeContent={cartCount} color="error" max={99}>
            <ShoppingCartIcon />
          </Badge>
        </IconButton>
      </Toolbar>
    </AppBar>
  );
}
