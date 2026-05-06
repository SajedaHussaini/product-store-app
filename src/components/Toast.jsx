import React from "react";
import { SnackbarProvider } from "notistack";
import { useMediaQuery } from "@mui/material";
import { useTheme } from "@mui/material/styles";

export default function Toast({ children }) {
  const theme = useTheme();

  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <SnackbarProvider
      maxSnack={3}
      autoHideDuration={2500}
      preventDuplicate
      anchorOrigin={{
        vertical: "top",
        horizontal: isMobile ? "center" : "right",
      }}
      sx={{
        "& .SnackbarItem-contentRoot": {
          borderRadius: "10px",
          fontSize: { xs: "13px", sm: "14px" },
          padding: { xs: "8px 12px", sm: "10px 14px" },
        },
      }}
    >
      {children}
    </SnackbarProvider>
  );
}
