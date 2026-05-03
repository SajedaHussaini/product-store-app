import { createTheme } from '@mui/material/styles';

export const getMuiTheme = (darkMode) =>
  createTheme({
    palette: {
      mode: darkMode ? 'dark' : 'light',
    },
    shape: {
      borderRadius: 12,
    },
    components: {
      MuiButton: {
        styleOverrides: {
          root: { fontWeight: 600 },
        },
      },
    },
  });
  