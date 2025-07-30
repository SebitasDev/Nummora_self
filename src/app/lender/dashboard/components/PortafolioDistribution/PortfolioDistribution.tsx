import { Box } from "@mui/material";
import SectionHeader from "@/components/atoms/SectionHeader";
import React from "react";
import { Currency } from "@/enums";
import { usePortfolioDistribution } from "@/app/lender/dashboard/hooks";
import { DonutChart } from "@/app/lender/dashboard/components/PortafolioDistribution/DonutChart";
import { ItemPortfolioDistribution } from "@/app/lender/dashboard/components/PortafolioDistribution/ItemPortfolioDistribution";
import { CustomCard } from "@/components/atoms/CustomCard";
import {useStyles} from "@/hooks/useStyles";

export const PortfolioDistribution = () => {
  const { theme, isMdDown } = useStyles();

  return (
    <CustomCard
      sx={{
        gridColumn: {
          xs: "1 / -1",
          md: "span 4",
        },
        order: {
          xs: 4,
          md: "initial",
        },
        width: "100%",
        height: "470px",
        padding: 2.9,
      }}
    >
      <SectionHeader
        title={"Distribucion del portafolio"}
        subtitle={isMdDown ? '' : `Estado actual de tus prestamos`}
        titleSize={isMdDown ? 15 : 20}
        subtitleSize={15}
      />

      <DonutChart />

      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          gap: 1.4,
          mt: 2,
          color: "#4B5563",
          width: "100%",
        }}
      >
        <ItemPortfolioDistribution
          itemName={"Activos"}
          itemColor={theme.palette.loan.active.main}
          itemValue={"89.000"}
          itemCurrency={Currency.COP}
          itemLoanCount={5}
        />

        <ItemPortfolioDistribution
          itemName={"Pendientes"}
          itemColor={theme.palette.loan.pending.main}
          itemValue={"43.500"}
          itemCurrency={Currency.COP}
          itemLoanCount={2}
        />

        <ItemPortfolioDistribution
          itemName={"Terminados"}
          itemColor={theme.palette.loan.completed.main}
          itemValue={"1.009.000"}
          itemCurrency={Currency.COP}
          itemLoanCount={5}
        />
      </Box>
    </CustomCard>
  );
};
