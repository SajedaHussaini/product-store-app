import React from "react";
import { MenuItem, Select, InputLabel, FormControl } from "@mui/material";

export default function Sort({ value, onChange }) {
  return (
    <FormControl
      size="small"
      fullWidth
      sx={{
        mr: 2,

        // کل باکس
        "& .MuiOutlinedInput-root": {
          borderRadius: "10px",

          // حالت عادی
          "& fieldset": {
            borderColor: "#d0d0d0",
            borderWidth: "1px",
          },

          // hover
          "&:hover fieldset": {
            borderColor: "#ff7a00",
          },

          // focus (کلیک)
          "&.Mui-focused fieldset": {
            borderColor: "#ff7a00",
            borderWidth: "1px", // 👈 جلوگیری از ضخیم شدن
          },
        },
      }}
    >
      <InputLabel>Sort by</InputLabel>

      <Select
        value={value}
        label="Sort by"
        onChange={(e) => onChange(e.target.value)}
        MenuProps={{
          PaperProps: {
            sx: {
              mt: 1,
              borderRadius: "10px",
              backgroundColor: "#fffaf5",
              border: "1px solid #ffe0b2",

              "& .MuiMenuItem-root": {
                fontSize: "14px",
                transition: "0.2s",

                "&:hover": {
                  backgroundColor: "#ffe0b2",
                },

                "&.Mui-selected": {
                  backgroundColor: "#ffd699",
                },
              },
            },
          },
        }}
      >
        <MenuItem value="">Featured</MenuItem>
        <MenuItem value="price-asc">Price: Low → High</MenuItem>
        <MenuItem value="price-desc">Price: High → Low</MenuItem>
        <MenuItem value="rating-desc">Rating: High → Low</MenuItem>
      </Select>
    </FormControl>
  );
}
