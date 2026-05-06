import { useContext } from "react";
import { SettingsContext } from "./context/SettingsContext";

import { CssBaseline, ThemeProvider } from "@mui/material";
import { getMuiTheme } from "./theme/theme";

// import AppRoutes from "./routes/Approutes";
import AppRoutes from "./routes/AppRoutes";

function App() {
  const { state } = useContext(SettingsContext);

  return (
    <ThemeProvider theme={getMuiTheme(state.darkMode)}>
      <CssBaseline />
      <AppRoutes />
    </ThemeProvider>
  );
}

export default App;
