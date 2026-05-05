import React from "react";
import { Box, Typography, Button } from "@mui/material";
import SentimentDissatisfiedIcon from "@mui/icons-material/SentimentDissatisfied";
import { Link as RouterLink } from "react-router-dom";

export default function EmptyState({ message, actionText, actionLink, showHint = false }) {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        py: 6,
        textAlign: "center",
      }}
    >
      <SentimentDissatisfiedIcon
        sx={{ fontSize: 60, mb: 2 }}
        color="disabled"
      />

      <Typography variant="h6" sx={{ mb: 1 }}>
        {message}
      </Typography>

      {/* 👇 فقط وقتی لازم بود نشان بده */}
      {showHint && (
        <Typography variant="body2" color="text.secondary" sx={{ mb: 3 }}>
          Try searching something else or adjust your search
        </Typography>
      )}

      {actionText && (
        <Button
          variant="contained"
          component={RouterLink}
          to={actionLink || "/"}
          sx={{ borderRadius: 2 }}
        >
          {actionText}
        </Button>
      )}
    </Box>
  );
}
