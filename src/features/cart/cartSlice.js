import { createSlice } from "@reduxjs/toolkit";

const loadCart = () => JSON.parse(localStorage.getItem('cartItems')) || [];

const saveCart = (items) => localStorage.setItem('cartItems', JSON.stringify(items));

const initialState = {
  items: loadCart(),
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addItem(state, action) {
      const idx = state.items.findIndex(it => it.id === action.payload.id);
      if (idx !== -1) state.items[idx].quantity += 1;
      else state.items.push({ ...action.payload, quantity: 1 });
      saveCart(state.items);
    },
    removeItem(state, action) {
      state.items = state.items.filter(p => p.id !== action.payload);
      saveCart(state.items);
    },
    increaseQuantity(state, action) {
      const item = state.items.find(it => it.id === action.payload);
      if (item) item.quantity += 1;
      saveCart(state.items);
    },
    decreaseQuantity(state, action) {
      const item = state.items.find(it => it.id === action.payload);
      if (item && item.quantity > 1) item.quantity -= 1;
      saveCart(state.items);
    },
    clearCart(state) {
      state.items = [];
      saveCart([]);
    }
  }
});

export const { addItem, removeItem, increaseQuantity, decreaseQuantity, clearCart } = cartSlice.actions;

export default cartSlice.reducer;
