import React from "react";
import { TextField } from "@mui/material";

export default function SearchBar({ value, onChange }) {
  return (
    <TextField
      label="Search"
      value={value}
      onChange={onChange}
      size="small"
      sx={{ width: 180, mr: 2 }}
    />
  );
}
