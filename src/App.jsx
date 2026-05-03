import { useContext } from "react";
import { SettingsContext } from "./context/SettingsContext";

import { CssBaseline, ThemeProvider } from "@mui/material";
import { getMuiTheme } from "./theme/theme";
// import AppRoutes from "./routes/AppRoutes";
import AppRoutes from "./routes/Approutes";

import { Toaster } from "react-hot-toast";

function App() {
  const { state } = useContext(SettingsContext);

  return (
    <ThemeProvider theme={getMuiTheme(state.darkMode)}>
      <CssBaseline />
      <Toaster />
      <AppRoutes />
    </ThemeProvider>
  );
}

export default App;
