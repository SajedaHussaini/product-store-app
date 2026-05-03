import React from "react";
import { Box } from "@mui/material";
import { useSettings } from "../context/SettingsContext";
import { IconButton, Tooltip } from "@mui/material";
import ViewComfyIcon from "@mui/icons-material/ViewComfy";
import ViewListIcon from "@mui/icons-material/ViewList";

export default function Toolbar({ children }) {
  const { state, dispatch } = useSettings();
  return (
    <Box display="flex" alignItems="center" mt={2} mb={2} gap={1} flexWrap="wrap">
      {children}
      <Tooltip title="Grid/List view">
        <IconButton
          sx={{ ml: 1 }}
          onClick={() => dispatch({ type: "TOGGLE_GRID_VIEW" })}
          color="primary"
        >
          {state.gridView ? <ViewComfyIcon /> : <ViewListIcon />}
        </IconButton>
      </Tooltip>
    </Box>
  );
}
