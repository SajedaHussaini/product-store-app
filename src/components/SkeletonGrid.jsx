import React from "react";
import { Grid, Skeleton } from "@mui/material";

export default function SkeletonGrid({ gridView = true }) {
  return (
    <Grid container spacing={2} mt={1}>
      {[...Array(12)].map((_, i) => (
        <Grid item xs={12} sm={6} md={4} lg={3} key={i}>
          <Skeleton variant="rectangular" height={260} />
        </Grid>
      ))}
    </Grid>
  );
}
