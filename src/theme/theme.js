import { createTheme } from "@mui/material/styles";

export const getMuiTheme = (darkMode) =>
  createTheme({
    palette: {
      mode: darkMode ? "dark" : "light",

      primary: {
        main: "#f79234",
      },

      background: {
        default: darkMode ? "#121212" : "#f9fafb",
        paper: darkMode ? "#0e0d0d" : "#ffffff",
      },
    },

    shape: {
      borderRadius: 8,
    },

    components: {
      MuiAppBar: {
        styleOverrides: {
          root: {
            backgroundColor: "#ffffff",
            color: "#f79234"
          },
        },
      },

      MuiIconButton: {
        styleOverrides: {
          root: {
            color: "#f79234"
          },
        },
      },

      MuiBadge: {
        styleOverrides: {
          badge: {
            backgroundColor: "#f79234",
            color: "#fff",
          },
        },
      },
    },
  });
