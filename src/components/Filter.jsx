import React from "react";
import { MenuItem, Select, InputLabel, FormControl } from "@mui/material";
import { useCategories } from "../hooks/useCategories";

export default function Filter({ value, onChange }) {
  const { data: categories = [], isLoading } = useCategories();

  return (
    <FormControl
      size="small"
      fullWidth
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
    >
      <InputLabel>Category</InputLabel>

      <Select
        value={value}
        label="Category"
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
        {isLoading ? (
          <MenuItem value="">Loading...</MenuItem>
        ) : (
          categories.map((cat) => (
            <MenuItem
              key={typeof cat === "string" ? cat : cat.value}
              value={typeof cat === "string" ? cat : cat.value}
            >
              {typeof cat === "string"
                ? cat.charAt(0).toUpperCase() + cat.slice(1)
                : cat.label}
            </MenuItem>
          ))
        )}
      </Select>
    </FormControl>
  );
}