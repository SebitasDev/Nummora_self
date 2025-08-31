import AccessTimeIcon from "@mui/icons-material/AccessTime";
import { Box, Typography, useMediaQuery, useTheme } from "@mui/material";
import React from "react";

interface TimeTextProps {
  timeFrame: string;
}

export const TimeText = ({ timeFrame }: TimeTextProps) => {
  const themeMUI = useTheme();
  const isMdUp = useMediaQuery(themeMUI.breakpoints.up("md"));
  return (
    <Box display="inline-flex" gap={0.4} alignItems={"center"}>
      <AccessTimeIcon
        sx={{
          fontSize: isMdUp ? 14 : 11,
          color: "text.secondary",
        }}
      />
      <Typography
        variant="body2"
        color="text.secondary"
        sx={{ fontSize: isMdUp ? 14 : 11 }}
      >
        {timeFrame}
      </Typography>
    </Box>
  );
};
