import React from "react";
import { Grid, Skeleton, Box, Card, Stack } from "@mui/material";
import { useSettings } from "../context/SettingsContext";

export default function SkeletonGrid() {
  const {
    state: { darkMode },
  } = useSettings();

  return (
    <Box sx={{ minHeight: "80vh", px: { xs: 1, sm: 2, md: 3 }, mt: 2 }}>
      <Grid container spacing={3} justifyContent="center">
        {[...Array(12)].map((_, i) => (
          <Grid
            item
            key={i}
            xs={12}
            sm={6}
            md={4}
            lg={3}
            // xs={4} 
            sx={{ display: "flex" }}
          >
            <Card
              sx={{
                width: "100%",
                borderRadius: 3,
                overflow: "hidden",
                bgcolor: darkMode ? "#1e1e1e" : "#fff",
                boxShadow: darkMode ? "0 0 0 1px #2a2a2a" : 2,
                transition: "0.3s",
              }}
            >
              {/* IMAGE */}
              <Skeleton
                variant="rectangular"
                animation="wave"
                sx={{
                  height: 200,
                  width: "100%",
                }}
              />

              <Box sx={{ p: 2 }}>
                <Stack spacing={1}>
                  
                  {/* CATEGORY CHIP */}
                  <Skeleton
                    variant="rounded"
                    width={80}
                    height={24}
                    animation="wave"
                  />

                  {/* TITLE */}
                  <Skeleton
                    variant="text"
                    height={26}
                    width="90%"
                    animation="wave"
                  />
                  <Skeleton
                    variant="text"
                    height={26}
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
                    height={30}
                    width="30%"
                    animation="wave"
                    sx={{ mt: 1 }}
                  />

                  {/* BUTTONS */}
                  <Stack direction="row" spacing={1} mt={1}>
                    <Skeleton
                      variant="rounded"
                      height={38}
                      sx={{ flex: 1 }}
                      animation="wave"
                    />
                    <Skeleton
                      variant="rounded"
                      height={38}
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