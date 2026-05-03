import React from "react";
import { useDispatch } from "react-redux";
import { addItem } from "../features/cart/cartSlice";
import { Link as RouterLink } from "react-router-dom";
import {
  Card, CardActionArea, CardMedia, CardContent, Typography, CardActions, Button
} from "@mui/material";

export default function ProductCard({ product }) {
  const dispatch = useDispatch();
  return (
    <Card sx={{ width: 260, m: 1, boxShadow: 2 }}>
      <CardActionArea component={RouterLink} to={`/products/${product.id}`}>
        <CardMedia
          component="img"
          height="180"
        //   image={product.thumbnail}
          image={product.image || product.thumbnail}
          alt={product.title}
        />
        <CardContent>
          <Typography variant="h6" component="div">
            {product.title}
          </Typography>
          <Typography variant="body2" color="text.secondary" sx={{height: 40, overflow: "hidden"}}>
            {product.description}
          </Typography>
          <Typography variant="subtitle1" sx={{mt: 1, fontWeight: 600}}>${product.price}</Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button
          fullWidth
          variant="contained"
          color="primary"
          onClick={() => dispatch(addItem(product))}
        >
          Add to Cart
        </Button>
      </CardActions>
    </Card>
  );
}
