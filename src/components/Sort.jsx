import React from "react";
import { MenuItem, Select, InputLabel, FormControl } from "@mui/material";

export default function Sort({ value, onChange }) {
  return (
    <FormControl
      size="small"
      fullWidth
      sx={{
        mr: { xs: 0, sm: 2 },
        mb: { xs: 0, sm: 0 },


        "& .MuiOutlinedInput-root": {
          borderRadius: "10px",
          fontSize: { xs: 13, sm: 14 },

          "& fieldset": {
            borderColor: "#d0d0d0",
            borderWidth: "1px",
          },

          "&:hover fieldset": {
            borderColor: "primary.main",
          },

          "&.Mui-focused fieldset": {
            borderColor: "primary.main",
            borderWidth: "1px",
          },
        },
      }}
    >
      <InputLabel sx={{ fontSize: { xs: 13, sm: 14 } }}>
        Sort by
      </InputLabel>

      <Select
        value={value}
        label="Sort by"
        onChange={(e) => onChange(e.target.value)}
        sx={{
          height: { xs: 36, sm: 40 },
        }}
        MenuProps={{
          PaperProps: {
            sx: {
              mt: 1,
              borderRadius: "10px",
              backgroundColor: "#fffaf5",
              border: "1px solid #ffe0b2",

              "& .MuiMenuItem-root": {
                fontSize: { xs: 13, sm: 14 },
                minHeight: { xs: 34, sm: 40 },
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
