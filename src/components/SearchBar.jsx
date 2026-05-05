import React from "react";
import { TextField } from "@mui/material";

export default function SearchBar({ value, onChange, onSubmit }) {
  return (
    <TextField
      fullWidth
      label="Search"
      value={value}
      onChange={(e) => onChange(e.target.value)}
      onKeyDown={(e) => {
        if (e.key === "Enter") {
          onSubmit(); // 🔥 فقط اینجا سرچ اجرا میشه
        }
      }}
      size="small"
      sx={{
        mr: 2,
        "& .MuiOutlinedInput-root": {
          borderRadius: "10px",
          "& fieldset": {
            borderColor: "#d0d0d0",
            borderWidth: "1px",
          },
          "&:hover fieldset": {
            borderColor: "#ff7a00",
          },
          "&.Mui-focused fieldset": {
            borderColor: "#ff7a00",
            borderWidth: "1px",
          },
        },
      }}
    />
  );
}
