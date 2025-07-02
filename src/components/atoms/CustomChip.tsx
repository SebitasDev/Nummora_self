import { Box, BoxProps } from "@mui/material";
import React from "react";
import Theme from "@/theme/theme";

interface CustomChipProps extends BoxProps {}

export const CustomChip = ({ children, sx, ...rest }: CustomChipProps) => {
  const theme = Theme;
  return (
    <Box
      sx={{
        fontWeight: "bold",
        borderRadius: "12px",
        color: "#fff",
        backgroundColor: "#8f938f",
        fontSize: {
          xs: theme.fontSize.chip.xs,
          md: theme.fontSize.chip.md,
        },
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
          "& .MuiTypography-root, & > p, & > span, & > div": {
          fontSize: {
            xs: theme.fontSize.chip.xs,
            md: theme.fontSize.chip.md,
          },
          fontWeight: "bold",
          textAlign: "center",
        },
        ...sx,
      }}
      {...rest}
    >
      {children}
    </Box>
  );
};
