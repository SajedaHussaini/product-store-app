import React from "react";
import { Grid, Skeleton, Box, Card, Stack } from "@mui/material";
import { useSettings } from "../context/SettingsContext";

export default function SkeletonGrid() {
  const {
    state: { darkMode, gridView },
  } = useSettings();

  return (
    <Box
      sx={{
        minHeight: "80vh",
        px: { xs: 1, sm: 2, md: 3 },
        mt: 2,
      }}
    >
      <Grid container spacing={3}>
        {[...Array(12)].map((_, i) => (
          <Grid
            item
            key={i}
            xs={12}
            sm={6}
            md={4}
            sx={{ display: "flex" }}
          >
            <Card
              sx={{
                width: "100%",
                height: gridView ? { xs: 300, sm: 360, md: 380 } : { xs: 160, sm: 180, md: 240 },
                display: "flex",
                flexDirection: gridView ? "column" : "row",
                borderRadius: 3,
                overflow: "hidden",
                bgcolor: darkMode ? "#1e1e1e" : "#fff",
                boxShadow: darkMode ? "0 0 0 1px #2a2a2a" : 2,
              }}
            >
              {/* IMAGE */}
              <Skeleton
                variant="rectangular"
                animation="wave"
                sx={{
                  width: gridView
                    ? "100%"
                    : { xs: 110, sm: 140, md: 200 },
                  height: gridView
                    ? { xs: 140, sm: 200, md: 180 }
                    : "100%",
                  flexShrink: 0,
                }}
              />

              {/* CONTENT */}
              <Box sx={{ flex: 1, p: 2, minWidth: 0 }}>
                <Stack spacing={1}>

                  {/* CATEGORY */}
                  <Skeleton
                    variant="rounded"
                    width={80}
                    height={24}
                    animation="wave"
                  />

                  {/* TITLE */}
                  <Skeleton
                    variant="text"
                    height={24}
                    width="90%"
                    animation="wave"
                  />
                  <Skeleton
                    variant="text"
                    height={24}
                    width="60%"
                    animation="wave"
                  />

                  {/* RATING */}
                  <Skeleton
                    variant="text"
                    height={20}
                    width="40%"
                    animation="wave"
                  />

                  {/* PRICE */}
                  <Skeleton
                    variant="text"
                    height={28}
                    width="30%"
                    animation="wave"
                  />

                  {/* BUTTONS */}
                  <Stack direction="row" spacing={1} mt={1}>
                    <Skeleton
                      variant="rounded"
                      height={36}
                      sx={{ flex: 1 }}
                      animation="wave"
                    />
                    <Skeleton
                      variant="rounded"
                      height={36}
                      sx={{ flex: 1 }}
                      animation="wave"
                    />
                  </Stack>

                </Stack>
              </Box>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}
