import { Box, Typography } from "@mui/material";
import { CustomCard } from "@/components/atoms/CustomCard";
import React from "react";
import { useInvest } from "@/app/lender/invest/hooks";

export const InvestSummary = () => {
  const { amount, theme } = useInvest();

  return (
    <CustomCard
      sx={{
        border: "0px",
        backgroundColor: "#F9FAFB",
        p: 2,
      }}
    >
      <Typography variant="subtitle1" fontWeight="bold">
        Resumen de Inversión
      </Typography>
      <Box
        sx={{
          display: "flex",
        }}
      >
        <Box sx={{ width: "50%" }}>
          <Typography variant="caption" color="gray">
            Monto inicial:
          </Typography>
          <Typography variant="body2" fontWeight="bold">
            ${amount.toLocaleString()}
          </Typography>
        </Box>
        <Box sx={{ width: "50%" }}>
          <Typography variant="caption" color="gray">
            Tipo:
          </Typography>
          <Typography variant="body2" fontWeight="bold">
            Flexible
          </Typography>
        </Box>
      </Box>
      <Box>
        <Box sx={{ width: "100%" }}>
          <Typography variant="caption" color="gray">
            Tasa esperada:
          </Typography>
          <Typography
            variant="body2"
            fontWeight="bold"
            sx={{ color: theme.palette.primary.dark }}
          >
            4.0% - 12.0% anual aproximadamente
          </Typography>
        </Box>
      </Box>
    </CustomCard>
  );
};
