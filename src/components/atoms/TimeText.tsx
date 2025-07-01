import AccessTimeIcon from "@mui/icons-material/AccessTime";
import { Box, Typography } from "@mui/material";
import React from "react";

interface TimeTextProps {
  timeFrame: string;
}

export const TimeText = ({ timeFrame }: TimeTextProps) => {
  const fontSize = {
    xs: "0.63rem",
    sm: "0.8rem",
    md: "0.9rem",
  };
  return (
    <Box display="inline-flex" gap={0.4} alignItems={"center"}>
      <AccessTimeIcon
        sx={{
          fontSize,
          color: "text.secondary",
        }}
      />
      <Typography variant="body2" color="text.secondary" sx={{ fontSize }}>
        {timeFrame}
      </Typography>
    </Box>
  );
};
