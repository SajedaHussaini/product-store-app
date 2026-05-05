import { createTheme } from "@mui/material/styles";

export const getMuiTheme = (darkMode) =>
  createTheme({
    palette: {
      mode: darkMode ? "dark" : "light",

      primary: {
        // main: "#ff7a00", 
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
            backgroundColor: "#ffffff", // سفید
            // color: "#ff7a00",
             // رنگ آیکن‌ها
            color: "#f79234"
          },
        },
      },

      MuiIconButton: {
        styleOverrides: {
          root: {
            // color: "#ff7a00",
            color: "#f79234"
          },
        },
      },

      MuiBadge: {
        styleOverrides: {
          badge: {
            // backgroundColor: "#ff7a00",
            backgroundColor:"#f79234",
            color: "#fff",
          },
        },
      },
    },
  });
