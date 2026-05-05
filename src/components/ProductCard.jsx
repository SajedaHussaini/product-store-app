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

        // height: isGrid ? 380 : 220,
        // height: { xs: 340, sm: 360, md: isGrid ? 380 : 220 }, // 🔥 responsive height
        height: { xs: 340, sm: 360, md: isGrid ? "100%" : 220 }, // 🔥 responsive height
        display: "flex",
        // flexDirection: isGrid ? "column" : "row",
        flexDirection: {
    xs: "column",           // 🔥 در موبایل همیشه column
    md: isGrid ? "column" : "row",
  },

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
        //  width: isGrid ? "100%" : 200, 
         width: { xs: "100%", md: isGrid ? "100%" : 200 },
  // height: { xs: 160, sm: 180, md: isGrid ? 180 : 220 }, // 🔥
          flexShrink: 0,
        }}
      >

        <Box
          sx={{
            // width: "100%",
            // height: isGrid ? 180 : 220,
             width: { xs: "100%", md: isGrid ? "100%" : 200 },
  height: { xs: 160, sm: 180, md: isGrid ? 180 : 220 }, // 🔥

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
              p: 2,
              // height: isGrid ? 180 : "100%",

               p: { xs: 1, sm: 2 }, // 🔥 padding کمتر در موبایل
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

          <Typography variant="subtitle2" fontWeight={700}
          //  noWrap
            sx={{
    fontSize: { xs: "0.8rem", sm: "0.9rem", md: "1rem" }, // 🔥
    display: "-webkit-box",
  WebkitLineClamp: 2,
  WebkitBoxOrient: "vertical",
  overflow: "hidden",
  }}>
            {product.title}
          </Typography>

          <Rating
          
            value={product.rating?.rate || product.rating || 0}
            precision={0.1}
            readOnly
            size="small"
          />

          <Typography variant="subtitle1" fontWeight={700} sx={{
    fontSize: { xs: "0.9rem", sm: "1rem" },
  }}>
            ${product.price}
          </Typography>

          {!isGrid && (
            <Typography variant="body2" color="text.secondary" mt={1}  sx={{
    display: { xs: "none", sm: "block" }, // 🔥 در موبایل حذف
    fontSize: { sm: "0.8rem", md: "0.9rem" },
  }}>
              {product.description}
            </Typography>
          )}
        </CardContent>

        {/* BUTTONS */}
        <CardActions sx={{ display: "flex", gap: 1, 
          // px: 6, 
          px: { xs:isGrid ? 1: 2, sm: 2, md: 6 }, // 🔥 responsive padding
          pb: 2 
          }}>
          {/* <CardActions sx={{ display: "flex", gap: 1, px: 2, pb: 2}}> */}

          {/* ADD TO CART */}
          <Tooltip title="Add to cart">
            <Button
              // onClick={() => dispatch(addItem(product))}
              onClick={handleAddToCart}
              sx={{
                flex: 1,
                // minWidth: 120,
                
                minWidth: { xs: 0, sm: 120 }, // 🔥 موبایل جمع‌تر
  height: { xs: 32, sm: 36 },

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
              // minWidth: 120,
              // fontSize: 10,

                minWidth: { xs: 0, sm: 120 },
  fontSize: { xs: 9, sm: 10 }, // 🔥
  height: { xs: 32, sm: 36 },

              fontWeight: 500,
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
