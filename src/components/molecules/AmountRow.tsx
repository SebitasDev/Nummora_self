import React from "react";
import { Box, BoxProps, Typography } from "@mui/material";
import PriceLabel from "../atoms/PriceLabel";
import { Currency } from "@/enums/currency";
import { useTheme } from "@mui/material/styles";

interface AmountRowProps extends BoxProps {
  label: string;
  value: string;
  amountColor?: string;
}

export const AmountRow: React.FC<AmountRowProps> = ({
  label,
  value,
  amountColor,
  sx,
  ...rest
}) => {
  const fontSize = {
    xs: "0.7rem",
    sm: "0.9rem",
    md: "1rem",
  };
  const theme = useTheme();

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

      <PriceLabel
        number={value}
        currency={Currency.COP}
        color={amountColor}
        sx={{
          fontSize: "1rem",
          [theme.breakpoints.down("md")]: {
            fontSize: "0.7rem",
          },
        }}
      />
    </Box>
  );
};
