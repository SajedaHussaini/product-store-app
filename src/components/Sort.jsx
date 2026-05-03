import React from "react";
import { MenuItem, Select, InputLabel, FormControl } from "@mui/material";

export default function Sort({ value, onChange }) {
  return (
    <FormControl size="small" sx={{ width: 150, mr: 2 }}>
      <InputLabel>Sort by</InputLabel>
      <Select value={value} label="Sort by" onChange={e => onChange(e.target.value)}>
        <MenuItem value="">Featured</MenuItem>
        <MenuItem value="price-asc">Price: Low-High</MenuItem>
        <MenuItem value="price-desc">Price: High-Low</MenuItem>
        <MenuItem value="price-desc">Rating: High → Low</MenuItem>
      </Select>
    </FormControl>
  );
}
