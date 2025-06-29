import React from "react";
import { Box, BoxProps, Typography } from "@mui/material";

interface AmountRowProps extends BoxProps {
  label: string;
  value: string;
  bold?: boolean;
  green?: boolean;
}

export const AmountRow = ({
  label,
  value,
  bold = false,
  sx,
  green = false,
  ...rest
}: AmountRowProps) => {
  return (
    <Box
      display="flex"
      justifyContent="space-between"
      alignItems="center"
      mb={1}
      sx={{ ...sx }}
      {...rest}
    >
      <Typography
        variant="body2"
        color="text.secondary"
        sx={{
          fontSize: {
            xs: "0.6rem",
            sm: "0.7rem",
            md: "0.8rem",
          },
        }}
      >
        {label}
      </Typography>
      <Typography
        variant="body2"
        fontWeight={bold ? "bold" : "normal"}
        color={
          green ? "success.light" : bold ? "text.primary" : "text.secondary"
        }
        sx={{
          fontSize: {
            xs: "0.6rem",
            sm: "0.7rem",
            md: "0.8rem",
          },
        }}
      >
        {value}
      </Typography>
    </Box>
  );
};
