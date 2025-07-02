import { CustomCard } from "@/components/atoms/CustomCard";
import { Box } from "@mui/material";
import CalculateOutlinedIcon from "@mui/icons-material/CalculateOutlined";
import { useInvest } from "@/app/lender/invest/hooks";
import SectionHeader from "@/components/atoms/SectionHeader";
import {
  AdditionalMetrics,
  AutomaticReinvestment,
  ProfitFirstMonth,
  ReinvestmentComparison,
  TotalProfit,
} from "@/app/lender/invest/components";

export const ProfitCalculator = () => {
  const { theme } = useInvest();

  return (
    <CustomCard
      sx={{
        height: "auto",
        background: "linear-gradient(135deg, #f0fdf4 0%, #dcfce7 100%)",
        border: "1px solid #bbf7d0",
        display: "flex",
        flexDirection: "column",
        gap: 3,
      }}
    >
      <SectionHeader
        icon={
          <CalculateOutlinedIcon sx={{ color: theme.palette.primary.dark }} />
        }
        title={"Calculadora de Ganancias con Reinversión"}
        titleColor={theme.palette.primary.dark}
      />
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          gap: 3,
        }}
      >
        {/* Primer Mes */}
        <ProfitFirstMonth />

        {/* Ganancia Total */}
        <TotalProfit />

        {/* Métricas adicionales */}
        <AdditionalMetrics />

        {/* Comparación */}
        <ReinvestmentComparison />

        {/* Reinversión Automática */}
        <AutomaticReinvestment />
      </Box>
    </CustomCard>
  );
};
