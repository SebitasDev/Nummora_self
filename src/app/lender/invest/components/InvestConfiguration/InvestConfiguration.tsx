"use client";

import React from "react";
import { Box } from "@mui/material";
import SavingsOutlinedIcon from "@mui/icons-material/SavingsOutlined";
import { CustomCard } from "@/components/atoms/CustomCard";
import SectionHeader from "@/components/atoms/SectionHeader";
import {
  AssuranceSecurity,
  InvestAmount,
  InvestSummary,
  InvestType,
} from "@/app/lender/invest/components";
import { useInvest } from "@/app/lender/invest/hooks";

export const InvestConfiguration = () => {
  const { theme, isMobile } = useInvest();

  return (
    <CustomCard
      sx={{
        height: "auto",
        display: "flex",
        flexDirection: "column",
        gap: 3,
      }}
    >
      <SectionHeader
        icon={
          <SavingsOutlinedIcon sx={{ color: theme.palette.primary.dark }} />
        }
        title={"Configurar Inversión"}
        subtitle={
          "Define el monto y términos de tu inversión para calcular las ganancias potenciales"
        }
      />
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          gap: 4,
        }}
      >
        {/* Monto a Invertir */}
        <InvestAmount />

        {/* Tipo de Inversión */}
        <InvestType />

        {/* Garantía de Seguridad */}
        <AssuranceSecurity />

        {/* Resumen de Inversión */}
        <InvestSummary />
      </Box>
    </CustomCard>
  );
};
