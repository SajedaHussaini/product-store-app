import React from "react";
import { MenuItem, Select, InputLabel, FormControl } from "@mui/material";

const categories = ["all", "smartphones", "laptops", "fragrances", "skincare", "groceries", "home-decoration"];

export default function Filter({ value, onChange }) {
  return (
    <FormControl size="small" sx={{ width: 160, mr: 2 }}>
      <InputLabel>Category</InputLabel>
      <Select value={value} label="Category" onChange={e => onChange(e.target.value)}>
        {categories.map(cat => (
          <MenuItem key={cat} value={cat}>{cat.charAt(0).toUpperCase() + cat.slice(1)}</MenuItem>
        ))}
      </Select>
    </FormControl>
  );
}
