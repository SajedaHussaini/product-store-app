import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { increaseQuantity, decreaseQuantity, removeItem, clearCart } from "../features/cart/cartSlice";
import { Box, Typography, Button, IconButton, List, ListItem, ListItemAvatar, Avatar, ListItemText } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import { Link as RouterLink } from "react-router-dom";

export default function Cart() {
  const items = useSelector(state => state.cart.items);
  const dispatch = useDispatch();
  const total = items.reduce((t, it) => t + it.price * it.quantity, 0);

  if (!items.length)
    return (
      <Box textAlign="center" mt={3}>
        <Typography variant="h6">Cart is empty.</Typography>
        <Button component={RouterLink} to="/" variant="contained" sx={{ mt: 2 }}>Go Shopping</Button>
      </Box>
    );

  return (
    <Box>
      <Typography variant="h5" mb={2}>Shopping Cart</Typography>
      <List>
        {items.map(item => (
          <ListItem key={item.id}>
            <ListItemAvatar>
              <Avatar src={item.thumbnail} alt={item.title} />
            </ListItemAvatar>
            <ListItemText
              primary={item.title}
              secondary={`$${item.price} × ${item.quantity} = $${item.price * item.quantity}`}
            />
            <IconButton onClick={() => dispatch(decreaseQuantity(item.id))} size="small"><RemoveIcon fontSize="small" /></IconButton>
            <Typography mx={1}>{item.quantity}</Typography>
            <IconButton onClick={() => dispatch(increaseQuantity(item.id))} size="small"><AddIcon fontSize="small" /></IconButton>
            <IconButton onClick={() => dispatch(removeItem(item.id))}><DeleteIcon color="error" /></IconButton>
          </ListItem>
        ))}
      </List>
      <Box textAlign="right" mt={2}>
        <Typography variant="h6">Total: ${total}</Typography>
        <Button variant="contained" color="error" onClick={() => dispatch(clearCart())} sx={{ mx: 1 }}>
          Clear Cart
        </Button>
        <Button component={RouterLink} to="/checkout" variant="contained" color="primary">Checkout</Button>
      </Box>
    </Box>
  );
}
