import { Box, BoxProps } from "@mui/material";
import React from "react";
import Theme from "@/theme/theme";

interface CustomChipProps extends BoxProps {
  fontSizeMd?: string;
  fontSizeXs?: string;
}

export const CustomChip = ({
  children,
  sx,
  fontSizeMd,
  fontSizeXs,
  ...rest
}: CustomChipProps) => {
  const theme = Theme;
  return (
    <Box
      sx={{
        fontWeight: "bold",
        borderRadius: "12px",
        color: "#fff",
        backgroundColor: "#8f938f",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        fontSize: {
          xs: fontSizeXs ?? theme.fontSize.chip.xs,
          md: fontSizeMd ?? theme.fontSize.chip.md,
        },
        "& .MuiTypography-root, & > p, & > span, & > div": {
          fontSize: {
            xs: fontSizeXs ?? theme.fontSize.chip.xs,
            md: fontSizeMd ?? theme.fontSize.chip.md,
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
