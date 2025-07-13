import { Box, Typography, useTheme } from "@mui/material";
import PriceLabel from "@/components/atoms/PriceLabel";
import { Currency } from "@/enums";
import React from "react";
import { StatusCircle } from "@/components/atoms/StatusCircle";
import { useStyles } from "@/hooks/useStyles";

interface ItemDistributionProps {
  itemName: string;
  itemColor: string;
  itemValue: string;
  itemCurrency: Currency;
  itemLoanCount: number;
}

export const ItemPortfolioDistribution = ({
  itemName,
  itemColor,
  itemValue,
  itemCurrency,
  itemLoanCount,
}: ItemDistributionProps) => {
  const { theme, isMdDown } = useStyles();

  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "space-between",
        gap: 0.5,
      }}
    >
      <Box sx={{ display: "flex", alignItems: "center" }}>
        <StatusCircle statusColor={itemColor} />
        <strong>{itemName}</strong>
      </Box>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "end",
          gap: 0.2,
        }}
      >
        <PriceLabel
          number={itemValue}
          currency={itemCurrency}
          sx={{
            fontSize: "initial",
            letterSpacing: "-0.5px",
            fontWeight: "bold",
          }}
        />
        <Typography
          sx={{
            color: "gray",
            fontSize: isMdDown
              ? theme.fontSize.labels.xs
              : theme.fontSize.labels.md,
          }}
        >
          {itemLoanCount} prestamos
        </Typography>
      </Box>
    </Box>
  );
};
