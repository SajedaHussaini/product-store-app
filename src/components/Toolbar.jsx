import React from "react";
import { Box } from "@mui/material";
import { useSettings } from "../context/SettingsContext";

export default function Toolbar({ children }) {
  const { state } = useSettings();

  return (
    <Box
      sx={{
        width: "100%",
        mt: { xs: 2, sm: 3 },
        mb: { xs: 4, sm: 4 },
        px: { xs: 1.5, sm: 2 },
        py: { xs: 2, sm: 3 },

        display: "flex",
        flexDirection: { xs: "column", sm: "row" },
        gap: { xs: 1.5, sm: 2 },
        flexWrap: "wrap",

        border: "1px solid",
        borderColor: state.darkMode ? "#333" : "#ddd",
        borderRadius: "12px",
        bgcolor: state.darkMode ? "#1a1a1a" : "#fff",
      }}
    >
      {React.Children.map(children, (child, index) => (
        <Box
          key={index}
          sx={{
            flex: { xs: "1 1 100%", sm: "1 1 200px" },
            minWidth: { xs: "100%", sm: 180 },
          }}
        >
          {child}
        </Box>
      ))}
    </Box>
  );
}
