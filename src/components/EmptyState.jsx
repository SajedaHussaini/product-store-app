import React from "react";
import { Box, Typography, Button } from "@mui/material";
import SentimentDissatisfiedIcon from "@mui/icons-material/SentimentDissatisfied";
import { Link as RouterLink } from "react-router-dom";

export default function EmptyState({
  message,
  actionText,
  actionLink,
  showHint = false,
}) {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        py: { xs: 5, sm: 6, md: 8 },
        px: { xs: 2, sm: 3 },
        textAlign: "center",
        minHeight: "60vh",
      }}
    >
      <SentimentDissatisfiedIcon
        sx={{
          fontSize: { xs: 45, sm: 55, md: 65 },
          mb: { xs: 1.5, sm: 2 },
        }}
        color="disabled"
      />

      <Typography
        variant="h6"
        sx={{
          mb: 1,
          fontSize: { xs: "1.1rem", sm: "1.25rem", md: "1.4rem" },
          fontWeight: 600,
        }}
      >
        {message}
      </Typography>

      {showHint && (
        <Typography
          variant="body2"
          color="text.secondary"
          sx={{
            mb: { xs: 2, sm: 3 },
            maxWidth: 400,
            fontSize: { xs: "0.8rem", sm: "0.9rem" },
            lineHeight: 1.6,
          }}
        >
          Try searching something else or adjust your search
        </Typography>
      )}

      {actionText && (
        <Button
          variant="contained"
          component={RouterLink}
          to={actionLink || "/"}
          sx={{
            borderRadius: 2,
            px: { xs: 2.5, sm: 3.5 },
            py: { xs: 1, sm: 1.2 },
            fontSize: { xs: "0.85rem", sm: "0.95rem" },
            textTransform: "none",
          }}
        >
          {actionText}
        </Button>
      )}
    </Box>
  );
}
