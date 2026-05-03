import React from "react";
import { useParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import Loader from "../components/Loader";
import EmptyState from "../components/EmptyState";
import {
  Box, Card, CardMedia, CardContent, Typography, Rating, Button
} from "@mui/material";
import { useDispatch } from "react-redux";
import { addItem } from "../features/cart/cartSlice";

export default function ProductDetails() {
  const { id } = useParams();
  const dispatch = useDispatch();
  const { data, isLoading, isError } = useQuery({
  queryKey: ["product", id],
  queryFn: async () => {
    const res = await axios.get(`https://dummyjson.com/products/${id}`);
    return res.data;
  }
});

  if (isLoading) return <Loader />;
  if (isError || !data) return <EmptyState message="Product not found" />;

  return (
    <Box display="flex" justifyContent="center" mt={4}>
      <Card sx={{ maxWidth: 600 }}>
        <CardMedia
          component="img"
          height="350"
          image={data.thumbnail}
          alt={data.title}
        />
        <CardContent>
          <Typography variant="h4">{data.title}</Typography>
          <Typography variant="body1" sx={{my: 2}}>
            {data.description}
          </Typography>
          <Typography variant="h6" color="primary">${data.price}</Typography>
          <Typography>Category: {data.category}</Typography>
          <Box sx={{display:'flex',alignItems:'center',my:1}}>
            <Rating value={data.rating} precision={0.1} readOnly />
            <Typography variant="body2" sx={{ml:1}}>({data.rating})</Typography>
          </Box>
          <Button
            sx={{mt:2}}
            variant="contained"
            size="large"
            color="secondary"
            onClick={() => dispatch(addItem(data))}
          >
            Add to Cart
          </Button>
        </CardContent>
      </Card>
    </Box>
  );
}
