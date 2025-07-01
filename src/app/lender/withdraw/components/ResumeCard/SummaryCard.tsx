import { AmountRow } from "@/components/atoms/AmountRow";
import { CustomCard } from "@/components/atoms/CustomCard";
import { DonutLarge } from "@mui/icons-material";
import {
  Box,
  CardContent,
  CardHeader,
  Divider,
  LinearProgress,
  Stack,
  Typography,
} from "@mui/material";

export const SummaryCard = () => {
  return (
    <CustomCard sx={{ p: 1.2 }}>
      <CardHeader
        title={
          <Stack direction="row" spacing={1} alignItems={"center"}>
            <DonutLarge
              sx={{
                fontSize: 30,
                color: "primary.main",
              }}
            />
            <Typography variant="h5" fontWeight={700}>
              Resumen del Saldo
            </Typography>
          </Stack>
        }
      />
      <CardContent>
        <Box>
          <AmountRow
            label="Saldo disponible"
            value="245.000"
            amountColor="success.light"
          />
          <AmountRow
            label="Retiros pendientes"
            value="15.000"
            amountColor="warning.light"
          />
          <AmountRow
            label="Total Retirado"
            value="180.000"
            amountColor="text.primary"
          />
        </Box>
        <Divider sx={{ my: 2.5 }} />
        <Box>
          <AmountRow
            label={"Liquidez Total"}
            value="260.000"
            amountColor="text.primary"
            bold
          />
          <LinearProgress
            variant="determinate"
            value={75}
            sx={{
              height: 8,
              borderRadius: 5,
              backgroundColor: "#f5f5f5",
              "& .MuiLinearProgress-bar": {
                backgroundColor: "black",
              },
            }}
          />
          <Typography
            variant="caption"
            color="text.secondary"
            sx={{
              mt: 1,
              textAlign: "center",
              fontSize: {
                xs: "0.7rem",
                sm: "0.9rem",
                md: "1rem",
              },
            }}
          >
            75% de tus ganancias disponibles
          </Typography>
        </Box>
      </CardContent>
    </CustomCard>
  );
};
