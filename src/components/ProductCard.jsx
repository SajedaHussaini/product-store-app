import React from "react";
import { useDispatch } from "react-redux";
import { addItem } from "../features/cart/cartSlice";
import { Link as RouterLink } from "react-router-dom";

import {
  Card,
  CardActionArea,
  CardMedia,
  CardContent,
  Typography,
  CardActions,
  Button,
  Chip,
  Rating,
  Tooltip,
  Box,
} from "@mui/material";

import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import InfoIcon from "@mui/icons-material/Info";
import { useSettings } from "../context/SettingsContext";
import { useSnackbar } from "notistack";

export default function ProductCard({ product }) {
  const dispatch = useDispatch();
  const { state } = useSettings();
  const { enqueueSnackbar } = useSnackbar();
  const handleAddToCart = () => {
  dispatch(addItem(product));

  enqueueSnackbar("Added to cart!", {
    variant: "success",
    anchorOrigin: {
      vertical: "top",
      horizontal: "right",
    },
  });
};

  const isGrid = state.gridView;
  const isDark = state.darkMode;

  return (
    <Card
      sx={{
  width: "100%", 

  height: isGrid ? 380 : 220,
  display: "flex",
  flexDirection: isGrid ? "column" : "row",

  borderRadius: 3,
  overflow: "hidden",

  bgcolor: isDark ? "#141414" : "#fff",

  transition: "all 0.25s ease",
  "&:hover": {
    transform: "translateY(-6px)",
    boxShadow: 6,
  },
}}
    >
      {/* IMAGE */}
      <CardActionArea
        component={RouterLink}
        to={`/products/${product.id}`}
        sx={{
          width: isGrid ? "100%" : 200,
          flexShrink: 0,
        }}
      >
    
        <Box
  sx={{
    width: "100%",
    height: isGrid ? 180 : 220,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    bgcolor: isDark ? "#191919" : "#f7f7f7",
    overflow: "hidden",
  }}
>
  <Box
    component="img"
    src={product.image || product.thumbnail}
    alt={product.title}
    sx={{
      width: "100%",
      height: "100%",
      objectFit: "contain",
      p:2,
      // height: isGrid ? 180 : "100%",
    }}
  />
</Box>
      </CardActionArea>

      {/* CONTENT */}
      <Box sx={{ flex: 1, display: "flex", flexDirection: "column" }}>
        <CardContent sx={{ flex: 1, overflow: "hidden" }}>
          
          <Chip
            label={product.category}
            size="small"
            sx={{
              mb: 1,
              bgcolor: "#fff3e0",
              color: "primary.main",
              fontWeight: 600,
            }}
          />

          <Typography variant="subtitle2" fontWeight={700} noWrap>
            {product.title}
          </Typography>

          <Rating
            value={product.rating?.rate || product.rating || 0}
            precision={0.1}
            readOnly
            size="small"
          />

          <Typography variant="subtitle1" fontWeight={700}>
            ${product.price}
          </Typography>

          {!isGrid && (
            <Typography variant="body2" color="text.secondary" mt={1}>
              {product.description}
            </Typography>
          )}
        </CardContent>

        {/* BUTTONS */}
        <CardActions sx={{ display: "flex", gap: 1, px: 6, pb: 2}}>
        {/* <CardActions sx={{ display: "flex", gap: 1, px: 2, pb: 2}}> */}
          
          {/* ADD TO CART */}
          <Tooltip title="Add to cart">
            <Button
              // onClick={() => dispatch(addItem(product))}
              onClick={handleAddToCart}
              sx={{
                flex: 1,
                minWidth:120,
                // height:32,
                bgcolor: "primary.main",
                color: "#fff",
                borderRadius: 2,
                "&:hover": { bgcolor: "primary.dark" },
              }}
            >
              <ShoppingCartIcon fontSize="small" />
            </Button>
          </Tooltip>

          {/* DETAILS */}
          <Button
            component={RouterLink}
            to={`/products/${product.id}`}
            sx={{
              minWidth:120,
              // height:32,
              fontSize:10,
              fontWeight:500,
              flex: 1,
              border: "1px solid",
              borderColor: "primary.main",
              color: "primary.main",
              borderRadius: 2,
              "&:hover": {
                bgcolor: "rgba(247,146,52,0.1)",
              },
            }}
          > 
            <InfoIcon fontSize="small" />
            details
          </Button>
        </CardActions>
      </Box>
    </Card>
  );
}

