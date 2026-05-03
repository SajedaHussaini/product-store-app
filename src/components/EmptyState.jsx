import React from "react";
import { Box, Typography } from "@mui/material";
import SentimentDissatisfiedIcon from '@mui/icons-material/SentimentDissatisfied';

export default function EmptyState({ message }) {
  return (
    <Box display="flex" flexDirection="column" alignItems="center" pt={4}>
      <SentimentDissatisfiedIcon fontSize="large" color="disabled" />
      <Typography color="textSecondary">{message}</Typography>
    </Box>
  );
}
