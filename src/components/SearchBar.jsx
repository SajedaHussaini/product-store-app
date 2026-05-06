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
          onSubmit();
        }
      }}
      size="small"
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

        "& .MuiInputLabel-root": {
          fontSize: { xs: 13, sm: 14 },
        },
      }}
    />
  );
}
