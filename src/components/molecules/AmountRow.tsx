import React from "react";
import { Box, BoxProps, Typography } from "@mui/material";
import PriceLabel from "../atoms/PriceLabel";
import { Currency } from "@/enums/currency";
import { useTheme } from "@mui/material";
import Theme from "@/theme/theme";

interface AmountRowProps extends BoxProps {
  label: string;
  value: string;
  amountColor?: string;
  currency?: Currency;
}

export const AmountRow: React.FC<AmountRowProps> = ({
  label,
  value,
  amountColor,
  currency = Currency.COP,
  sx,
  ...rest
}) => {
  const themeMUI = useTheme();
  const theme = Theme;
  return (
    <Box
      display="flex"
      justifyContent="space-between"
      alignItems="center"
      mb={1}
      sx={sx}
      {...rest}
    >
      <Typography variant="body2" color="text.secondary" fontSize={"16px"}>
        {label}
      </Typography>

      <PriceLabel
        number={value}
        currency={currency}
        color={amountColor}
        sx={{
          fontSize: `calc(${theme.fontSize.amountLabel.md} - 0.15rem)`,
          letterSpacing: "-0.5px",
          [themeMUI.breakpoints.down("md")]: {
            fontSize: `calc(${theme.fontSize.amountLabel.xs} - 0.15rem)`,
          },
        }}
      />
    </Box>
  );
};
