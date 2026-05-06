import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";

import { Provider } from "react-redux";
import { store } from "./app/store";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { SettingsProvider } from "./context/SettingsContext";

import { BrowserRouter } from "react-router-dom";
import Toast from "./components/Toast";

const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <QueryClientProvider client={queryClient}>
      <SettingsProvider>
        <Toast>
          <BrowserRouter>
            <App />
          </BrowserRouter>
        </Toast>
      </SettingsProvider>
    </QueryClientProvider>
  </Provider>
);
