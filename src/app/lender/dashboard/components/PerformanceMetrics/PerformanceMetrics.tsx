import { Box, Typography, useTheme } from "@mui/material";
import React from "react";
import { useMediaQuery } from "@mui/system";
import Theme from "@/theme/theme";
import SectionHeader from "@/components/atoms/SectionHeader";
import AutoGraphIcon from "@mui/icons-material/AutoGraph";
import { PerformanceMetricProgress } from "@/app/lender/dashboard/components/PerformanceMetrics/PerformanceMetricProgress";
import { CustomCard } from "@/components/atoms/CustomCard";
import { useStyles } from "@/hooks/useStyles";
import { ColouredCard } from "@/components/molecules/ColouredCard";

export const PerformanceMetrics = () => {
  const { theme, isMdDown } = useStyles();

  return (
    <CustomCard
      sx={{
        gridColumn: {
          xs: "1 / -1",
          md: "span 6",
        },
        order: {
          xs: 6,
          md: "initial",
        },
        width: "100%",
        height: "450px",
        padding: 2.9,
        display: "flex",
        flexDirection: "column",
        gap: 2.5,
      }}
    >
      <SectionHeader
        title={"Métricas de rendimiento"}
        subtitle={isMdDown ? "" : "Indicadores claves de tu inversión"}
        titleSize={isMdDown ? 15 : 20}
        subtitleSize={15}
        icon={<AutoGraphIcon sx={{ fontSize: "20px", fontWeight: "bold" }} />}
      />

      <Box
        sx={{
          display: "flex",
          gap: 2,
        }}
      >
        <ColouredCard
          backgroundColor={theme.palette.secondary.background}
          subtitle="Tasa de cobro"
        >
          <Typography
            color={theme.palette.secondary.dark}
            fontWeight={"bold"}
            fontSize={"25px"}
          >
            98.5%
          </Typography>
        </ColouredCard>

        <ColouredCard
          backgroundColor={theme.palette.primary.background}
          subtitle="días promedio"
        >
          <Typography
            color={theme.palette.primary.dark}
            fontWeight={"bold"}
            fontSize={"25px"}
          >
            24
          </Typography>
        </ColouredCard>
      </Box>

      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          gap: 2,
        }}
      >
        <PerformanceMetricProgress
          value={85}
          name={"Diversificación"}
          color={theme.palette.loan.active.main}
        />

        <PerformanceMetricProgress
          value={72}
          name={"Liquidez"}
          color={theme.palette.loan.pending.main}
        />

        <PerformanceMetricProgress
          value={91}
          name={"Estabilidad"}
          color={theme.palette.loan.completed.main}
        />
      </Box>
    </CustomCard>
  );
};
