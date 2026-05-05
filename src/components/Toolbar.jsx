import React from "react";
import { Box } from "@mui/material";
import { useSettings } from "../context/SettingsContext";

export default function Toolbar({ children }) {
  const { state } = useSettings();

  return (
    <Box
      sx={{
        width: "100%",
        mt: 3,
        mb: 2,
        px: 2,
        py: 3,

        display: "flex",
        gap: 2,
        flexWrap: "wrap",

        border: "1px solid",
        borderColor: state.darkMode ? "#333" : "#ddd",
        borderRadius: "12px",
        bgcolor: state.darkMode ? "#1a1a1a" : "#fff",
      }}
    >
      {React.Children.map(children, (child) => (
        <Box sx={{ flex: 1, minWidth: 180 }}>
          {child}
        </Box>
      ))}
    </Box>
  );
}
