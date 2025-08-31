"use client";

import { Typography, TypographyProps, Tooltip } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import { Currency } from "@/enums/currency";
import Theme from "@/theme/theme";

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
  const themeMUI = useTheme();
  const theme = Theme;

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
          fontSize: theme.fontSize.amountLabel.md,
          lineHeight: 1,
          letterSpacing: "0.02em",
          textAlign: "inherit",
          overflow: "hidden",
          textOverflow: "ellipsis",
          whiteSpace: "nowrap",
          cursor: "default",
          [themeMUI.breakpoints.down("md")]: {
            fontSize: theme.fontSize.amountLabel.xs,
          },
          ...sx,
        }}
        {...rest}
      >
        ${number} {Currency[currency]}
      </Typography>
    </Tooltip>
  );
}
