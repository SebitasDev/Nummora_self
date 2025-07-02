"use client";

import { Typography, TypographyProps, Tooltip } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import { Currency } from "@/enums/currency";

interface PriceLabelProps extends TypographyProps {
  number: string;
  currency: Currency;
  color?: string;
}

export default function PriceLabel({
  number,
  currency,
  sx,
  color = "text.primary",
  ...rest
}: PriceLabelProps) {
  const theme = useTheme();

  return (
    <Tooltip
      title={`$${number} ${Currency[currency]}`}
      arrow
      enterTouchDelay={0}
      leaveTouchDelay={3000}
      placement="bottom"
    >
      <Typography
        variant="body2"
        noWrap
        color={color}
        sx={{
          fontFamily: "Inter",
          fontWeight: 800,
          lineHeight: 1,
          letterSpacing: "0.02em",
          textAlign: "inherit",
          overflow: "hidden",
          textOverflow: "ellipsis",
          whiteSpace: "nowrap",
          cursor: "default",
          ...sx,
        }}
        {...rest}
      >
        ${number} {Currency[currency]}
      </Typography>
    </Tooltip>
  );
}
