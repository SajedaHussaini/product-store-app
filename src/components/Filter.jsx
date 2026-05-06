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
        Category
      </InputLabel>

      <Select
        value={value}
        label="Category"
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
