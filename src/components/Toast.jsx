import { SnackbarProvider } from "notistack";
import React from "react";
export default function Toast({ children }) {
  // Wrap App in this Toast to enable toasts everywhere.
  return <SnackbarProvider maxSnack={3}>{children}</SnackbarProvider>;
}
