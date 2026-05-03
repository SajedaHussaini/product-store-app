// import React from "react";
// import { AppBar, Toolbar, Typography, Switch, IconButton, Badge } from "@mui/material";
// import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
// import { Link as RouterLink } from "react-router-dom";
// import { useSelector } from "react-redux";
// import { useSettings } from "../context/SettingsContext";

// export default function Navbar() {
//   const cartCount = useSelector(state => state.cart.items.reduce((sum, item) => sum + item.quantity, 0));
//   const { state, dispatch } = useSettings();

//   return (
//     <AppBar position="static" color="primary">
//       <Toolbar>
//         <Typography
//           component={RouterLink}
//           to="/"
//           variant="h6"
//           color="inherit"
//           sx={{ textDecoration: "none", flexGrow: 1 }}
//         >
//           My Product Store
//         </Typography>
//         <Switch
//           checked={state.darkMode}
//           onChange={() => dispatch({ type: "TOGGLE_DARK_MODE" })}
//           color="default"
//           inputProps={{ 'aria-label': 'toggle dark mode' }}
//         />
//         <IconButton component={RouterLink} to="/cart" size="large" color="inherit">
//           <Badge badgeContent={cartCount} color="error" max={99}>
//             <ShoppingCartIcon />
//           </Badge>
//         </IconButton>
//       </Toolbar>
//     </AppBar>
//   );
// }









































import React from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  IconButton,
  Badge,
  Box,
} from "@mui/material";

import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import ViewComfyIcon from "@mui/icons-material/ViewComfy";
import ViewListIcon from "@mui/icons-material/ViewList";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import LightModeIcon from "@mui/icons-material/LightMode";

import { Link as RouterLink } from "react-router-dom";
import { useSelector } from "react-redux";
import { useSettings } from "../context/SettingsContext";
// import shopping from "../assets/shopping.jpg"
import shopp1 from "../assets/shopp1.jpg"

export default function Navbar() {
  const cartCount = useSelector((state) =>
    state.cart.items.reduce((sum, item) => sum + item.quantity, 0)
  );

  const { state, dispatch } = useSettings();

  return (
    <AppBar position="sticky" elevation={2}>
      <Toolbar>

        {/* 🔵 LEFT: Logo + Name */}
        <Box
          component={RouterLink}
          to="/"
          sx={{
            display: "flex",
            alignItems: "center",
            textDecoration: "none",
            color: "inherit",
            flexGrow: 1,
          }}
        >
          {/* لوگو ساده */}
          <Box
  component="img"
//   src={shopping}
src={shopp1}
  alt="Shopping logo"
  sx={{
    width: 49,
    height: 49,
    objectFit: "contain",
    mr: 1.5,
  }}
/>

          <Typography variant="h6" fontWeight={600}>
            Nexora Store
          </Typography>
        </Box>

        {/* 🔵 RIGHT: Icons */}
        <Box display="flex" alignItems="center" gap={1}>

          {/* Grid / List */}
          <IconButton
            color="inherit"
            onClick={() => dispatch({ type: "TOGGLE_GRID_VIEW" })}
          >
            {state.gridView ? <ViewComfyIcon /> : <ViewListIcon />}
          </IconButton>

          {/* Dark / Light */}
          <IconButton
            color="inherit"
            onClick={() => dispatch({ type: "TOGGLE_DARK_MODE" })}
          >
            {state.darkMode ? <LightModeIcon /> : <DarkModeIcon />}
          </IconButton>

          {/* Cart */}
          <IconButton
            component={RouterLink}
            to="/cart"
            color="inherit"
          >
            <Badge badgeContent={cartCount} color="error" max={99}>
              <ShoppingCartIcon />
            </Badge>
          </IconButton>

        </Box>
      </Toolbar>
    </AppBar>
  );
}
