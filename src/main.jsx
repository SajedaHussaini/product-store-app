import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";

import { Provider } from "react-redux";
import { store } from "./app/store";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { SettingsProvider } from "./context/SettingsContext";

import { BrowserRouter } from "react-router-dom";

// 🟢 اضافه شد
import { SnackbarProvider } from "notistack";

const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <QueryClientProvider client={queryClient}>
      <SettingsProvider>
        
        {/* 🟢 Toast Provider */}
        <SnackbarProvider
          maxSnack={3}
          anchorOrigin={{ vertical: "top", horizontal: "right" }}
        >
          <BrowserRouter>
            <App />
          </BrowserRouter>
        </SnackbarProvider>

      </SettingsProvider>
    </QueryClientProvider>
  </Provider>
);