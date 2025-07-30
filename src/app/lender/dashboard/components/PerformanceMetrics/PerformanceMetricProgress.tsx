import { Box, Typography } from "@mui/material";
import { CustomProgress } from "@/components/atoms/CustomProgress";
import React from "react";
import { useStyles } from "@/hooks/useStyles";

interface PerformanceProgressProps {
  value?: number;
  color?: string;
  name?: string;
}

export const PerformanceMetricProgress = ({
  value = 10,
  color = "gray",
  name = "Null",
}: PerformanceProgressProps) => {
  const { theme, isMdDown } = useStyles();

  return (
    <Box sx={{ display: "flex", justifyContent: "space-between" }}>
      <Typography
        color={"gray"}
        fontWeight={"bold"}
        fontSize={
          isMdDown ? theme.fontSize.subtitle.xs : theme.fontSize.subtitle.md
        }
      >
        {name}
      </Typography>
      <CustomProgress value={value} color={color} />
    </Box>
  );
};
