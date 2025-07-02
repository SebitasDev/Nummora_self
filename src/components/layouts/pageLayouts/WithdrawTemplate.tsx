import { Box, useTheme } from "@mui/material";
import { SetWithdrawCard } from "@/app/lender/withdraw/components/WithdrawCard/SetWithdrawCard";
import { WithdrawHistoryCard } from "@/app/lender/withdraw/components/HistoryCard/WithdrawHistoryCard";

export default function WithdrawTemplate() {
  const theme = useTheme();

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        gap: 3,
        [theme.breakpoints.up("md")]: {
          display: "grid",
          gridTemplateColumns: "2fr 1fr",
          gridTemplateAreas: `
                     "title           title"
                     "formulario      saldoResumen"
                     "historial       estadisticas"
                     ".               infoImportante"
                     `,
          gap: 3,
        },
      }}
    >
      <Box gridArea="title">
        <h2>Retirar Dinero</h2>
        <p>Retira tus ganancias de forma segura </p>
      </Box>

      <Box gridArea="formulario">
        <SetWithdrawCard />
      </Box>

      {/* Historial de retiros */}
      <Box gridArea="historial">
        <WithdrawHistoryCard />
      </Box>

      {/* Resumen de saldo */}
      <Box gridArea="saldoResumen">
        {/* SummaryCard */}
        <h2>Resumen</h2>
      </Box>

      {/* Estadísticas del mes */}
      <Box gridArea="estadisticas">
        {/* StatsCard */}
        <h2>Estadisticas</h2>
      </Box>

      {/* Información importante */}
      <Box gridArea="infoImportante">
        {/* ImportantInfoCard */}
        <h2>Info Importante</h2>
      </Box>
    </Box>
  );
}
