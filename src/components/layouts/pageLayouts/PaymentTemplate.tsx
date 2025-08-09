"use client";

import { Box, useMediaQuery, useTheme } from "@mui/material";
import { PaymentConfirmation } from "@/app/lender/payment/components/PaymentConfirmation";
import { LoanProgress } from "@/app/lender/payment/components/LoanProgress";

export default function TransactionsHistory() {
  const themeMUI = useTheme();
  const isDesktop = useMediaQuery(themeMUI.breakpoints.up("md"));

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        gap: 3,
        [themeMUI.breakpoints.up("md")]: {
          display: "grid",
          gridTemplateColumns: "2fr 1fr",
          gridTemplateAreas: `
            "header header"
            "leftCol rightCol"
          `,
          gap: 3,
        },
      }}
    >
      <Box gridArea="leftCol" display="flex" flexDirection="column" gap={3}>
        <PaymentConfirmation />
        <LoanProgress />
      </Box>
    </Box>
  );
}
