import { CustomCard } from "@/components/atoms/CustomCard";
import SectionHeader from "@/components/atoms/SectionHeader";
import { ColouredCard } from "@/components/molecules/ColouredCard";
import { Box, LinearProgress, Stack, Typography } from "@mui/material";
import Theme from "@/theme/theme";
import PriceLabel from "@/components/atoms/PriceLabel";
import { Currency } from "@/enums";

export const LoanProgress = () => {
  const theme = Theme;
  return (
    <CustomCard
      sx={{
        display: "flex",
        flexDirection: "column",
        gap: 3,
        p: 3,
      }}
    >
      <SectionHeader
        title="Progreso del Prestamo"
        subtitle="Estado actual del prestamo asociado"
      />
      <Box>
        <Box justifyContent="space-between" display="flex" flexDirection="row">
          <Typography variant="body2" sx={{ fontWeight: "600" }}>
            Progreso del Pago
          </Typography>
          <Typography variant="body2" sx={{ fontWeight: "600" }}>
            55%
          </Typography>
        </Box>
        <LinearProgress
          variant="determinate"
          value={55}
          sx={{
            height: 8,
            borderRadius: 5,
            backgroundColor: "#f5f5f5",
            "& .MuiLinearProgress-bar": {
              backgroundColor: "black",
            },
            my: 0.5,
          }}
        />
      </Box>
      <Box display="grid" gridTemplateColumns="1fr 1fr 1fr" gap={2}>
        <ColouredCard backgroundColor="#eaf4fd" subtitle="Monto Original">
          <PriceLabel
            number={"100.000"}
            currency={Currency.COP}
            sx={{
              mb: 0.5,
              color: theme.palette.secondary.dark,
            }}
          />
        </ColouredCard>
        <ColouredCard backgroundColor="#edfdf4" subtitle="Pagado">
          <PriceLabel
            number={"100.000"}
            currency={Currency.COP}
            sx={{
              mb: 0.5,
              color: theme.palette.primary.dark,
            }}
          />
        </ColouredCard>
        <ColouredCard backgroundColor="#FFFDBD" subtitle="Saldo Pendiente">
          <PriceLabel
            number={"65.000"}
            currency={Currency.COP}
            sx={{
              mb: 0.5,
              color: "#7B491F",
            }}
          />
        </ColouredCard>
      </Box>
    </CustomCard>
  );
};
