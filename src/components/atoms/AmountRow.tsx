import React from "react";
import { Box, BoxProps, Typography } from "@mui/material";

interface AmountRowProps extends BoxProps {
  label: string;
  value: string;
  bold?: boolean;
  amountColor?: string;
}

export const AmountRow: React.FC<AmountRowProps> = ({
  label,
  value,
  bold = false,
  amountColor,
  sx,
  ...rest
}) => {
  const fontSize = {
    xs: "0.7rem",
    sm: "0.9rem",
    md: "1rem",
  };

  return (
    <Box
      display="flex"
      justifyContent="space-between"
      alignItems="center"
      mb={1}
      sx={sx}
      {...rest}
    >
      <Typography variant="body2" color="text.secondary" sx={{ fontSize }}>
        {label}
      </Typography>

      <Typography
        variant="body2"
        fontWeight={bold ? "bold" : "normal"}
        color={amountColor || (bold ? "text.primary" : "text.secondary")}
        sx={{ fontSize }}
      >
        {value}
      </Typography>
    </Box>
  );
};
