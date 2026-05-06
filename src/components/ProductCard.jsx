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
  useTheme,
  useMediaQuery,
} from "@mui/material";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import InfoIcon from "@mui/icons-material/Info";
import { useSettings } from "../context/SettingsContext";
import { useSnackbar } from "notistack";

export default function ProductCard({ product }) {
  const dispatch = useDispatch();
  const { state } = useSettings();
  const { enqueueSnackbar } = useSnackbar();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const isGrid = state.gridView;
  const isDark = state.darkMode;

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

  return (
    <Card
      sx={{
        width: "100%",
        height: isGrid
          ? { xs: 300, sm: 360, md: 380 }
          : { xs: 160, sm: 180, md: 240 },
        display: "flex",
        flexDirection: isGrid
          ? "column"
          : {
            xs: "row",
            sm: "row",
            md: "row",
          },
        borderRadius: 3,
        overflow: "hidden",
        bgcolor: isDark ? "#141414" : "#fff",
        transition: "all 0.25s ease",
        "&:hover": {
          transform: "translateY(-6px)",
          boxShadow: 6,
        },
        position: "relative",
      }}
      elevation={isMobile ? 2 : 3}
    >
      {/* IMAGE */}
      <CardActionArea
        component={RouterLink}
        to={`/products/${product.id}`}
        sx={{
          width: isGrid
            ? "100%"
            : {
              xs: 110,
              sm: 140,
              md: 200,
            },
          flexShrink: 0,
          height: isGrid
            ? { xs: 140, sm: 200, md: 180 }
            : { xs: "100%", sm: "100%", md: 240 },
        }}
      >
        <Box
          sx={{
            width: "100%",
            height: "100%",
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
              p: { xs: 1, sm: 2 },
              maxHeight: isGrid
                ? { xs: 130, sm: 180, md: 180 }
                : { xs: 120, sm: 140, md: 180 },
            }}
          />
        </Box>
      </CardActionArea>

      {/* CONTENT */}
      <Box
        sx={{
          flex: 1,
          display: "flex",
          flexDirection: "column",
          minWidth: 0,
        }}
      >
        <CardContent
          sx={{
            flex: 1,
            overflow: "hidden",
            pt: isGrid ? 2 : { xs: 1, sm: 2 },
            pb: isMobile ? 1 : 2,
            px: isMobile
              ? (isGrid ? 2 : 2)
              : (isGrid ? 2 : 3),
          }}
        >
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
          <Typography
            variant="subtitle2"
            fontWeight={700}
            sx={{
              fontSize: { xs: "0.78rem", sm: "1rem", md: "1rem" },
              display: "-webkit-box",
              WebkitLineClamp: 2,
              WebkitBoxOrient: "vertical",
              overflow: "hidden",
              mb: 0.5,
            }}
          >
            {product.title}
          </Typography>
          <Rating
            value={Number(product.rating?.rate || product.rating || 0)}
            precision={0.1}
            readOnly
            size="small"
            sx={{ mb: isGrid ? 1 : 0.5 }}
          />
          <Typography
            variant="subtitle1"
            fontWeight={700}
            sx={{ fontSize: { xs: "0.80rem", sm: "1rem" }, mb: 0.5 }}
          >
            ${product.price}
          </Typography>

          {!isGrid && (
            <Typography
              variant="body2"
              color="text.secondary"
              mt={0.5}
              sx={{
                display: { xs: "none", sm: "block" },
                fontSize: { sm: "0.75rem", md: "0.97rem" },
              }}
            >
              {product.description}
            </Typography>
          )}
        </CardContent>

        {/* BUTTONS */}
        <CardActions
          sx={{
            display: "flex",
            gap: 1,
            px: isMobile
              ? (isGrid ? 12 : 2)
              : (isGrid ? 6 : 4),
            pb: isMobile ? 1 : 2,
            pt: 0,
          }}
        >
          <Tooltip title="Add to cart">
            <Button
              onClick={handleAddToCart}
              sx={{
                flex: 1,
                minWidth: {
                  xs: isGrid ? 60 : 0,
                  sm: 120
                },
                height: {
                  xs: isGrid ? 25 : 20,
                  sm: 36,
                },

                "& svg": {
                  fontSize: {
                    xs: isGrid ? 18 : 17,
                    sm: 22,
                  },
                },

                bgcolor: "primary.main",
                color: "#fff",
                borderRadius: 2,

                "&:hover": {
                  bgcolor: "primary.dark",
                },
              }}
            >
              <ShoppingCartIcon fontSize="small" />
            </Button>

          </Tooltip>

          <Button
            component={RouterLink}
            to={`/products/${product.id}`}
            sx={{
              flex: 1,
              minWidth: {
                xs: isGrid ? 60 : 0,
                sm: 120,
              },
              fontSize: { xs: 9, sm: 10 },
              height: {
                xs: isGrid ? 25 : 20,
                sm: 36,
              },

              "& svg": {
                fontSize: {
                  xs: isGrid ? 18 : 17,
                  sm: 22,
                },
              },

              fontWeight: 500,
              border: "1px solid",
              borderColor: "primary.main",
              color: "primary.main",
              borderRadius: 2,

              "&:hover": {
                bgcolor: "rgba(247,146,52,0.1)",
              },
            }}
          >
            <InfoIcon sx={{ mr: 0.5 }} />

            <Box
              component="span"
              sx={{
                display: { xs: "none", sm: "inline" },
              }}
            >
              details
            </Box>
          </Button>

        </CardActions>
      </Box>
    </Card>
  );
}
