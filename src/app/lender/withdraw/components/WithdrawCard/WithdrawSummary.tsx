import React from "react";
import { Box, Typography } from "@mui/material";
import { AmountRow } from "@/components/molecules/AmountRow";
import { useInvestAmount } from "@/app/lender/withdraw/hooks/useInvestAmount";

export const WithdrawSummary = () => {
  const { amount, commission, totalIncome } = useInvestAmount();
  return (
    <Box
      mt={2}
      p={2}
      border="1px solid #e0e0e0"
      borderRadius={2}
      bgcolor="#FAFAFA"
    >
      <Typography variant="subtitle2" fontWeight="bold" mb={2}>
        Resumen del Retiro
      </Typography>

      <AmountRow label="Monto solicitado" value={amount} />
      <AmountRow label="Comisión" value={commission} />
      <AmountRow
        label="Total a recibir"
        value={totalIncome}
        amountColor="success.light"
      />
    </Box>
  );
};
