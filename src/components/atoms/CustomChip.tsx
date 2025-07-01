import { Box, BoxProps } from "@mui/material";
import React from "react";

interface CustomChipProps extends BoxProps {}

export const CustomChip = ({ children, sx, ...rest }: CustomChipProps) => {
  return (
    <Box
      sx={{
        fontWeight: "bold",
        borderRadius: "20px",
        color: "#fff",
        backgroundColor: "#8f938f",
        ...sx,
      }}
      {...rest}
    >
      {children}
    </Box>
  );
};
