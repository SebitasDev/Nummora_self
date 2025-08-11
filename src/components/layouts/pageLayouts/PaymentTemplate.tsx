"use client";

import { Box, useMediaQuery, useTheme } from "@mui/material";
import { PaymentConfirmation } from "@/app/lender/payment/components/Payment/PaymentConfirmation";
import { LoanProgress } from "@/app/lender/payment/components/LoanProgress/LoanProgress";
import { PaymentSchedule } from "@/app/lender/payment/components/PaymentSchedule/PaymentSchedule";
import { BorrowerInfoCard } from "@/app/lender/payment/components/BorrowerInfo/BorrowerInfoCard";
import { LoanDetailsCard } from "@/app/lender/payment/components/LoanDetails/LoanDetailsCard";
import { QuickActionsCard } from "@/app/lender/payment/components/QuickActions/QuickActionsCard";

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
        <PaymentSchedule />
      </Box>
      <Box gridArea="rightCol" display="flex" flexDirection="column" gap={3}>
        <BorrowerInfoCard />
        <LoanDetailsCard />
        <QuickActionsCard />
      </Box>
    </Box>
  );
}
