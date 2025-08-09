import { CustomCard } from "@/components/atoms/CustomCard";
import SectionHeader from "@/components/atoms/SectionHeader";
import PriceLabel from "@/components/atoms/PriceLabel";
import { PaymentDetail } from "./PaymentDetail";
import { Box, Typography, useTheme, useMediaQuery } from "@mui/material";
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";
import Theme from "@/theme/theme";
import { Currency } from "@/enums";
import { CustomChip } from "@/components/atoms/CustomChip";

export const PaymentConfirmation = () => {
  const themeMUI = useTheme();
  const isMdUp = useMediaQuery(themeMUI.breakpoints.up("md"));
  const theme = Theme;
  return (
    <CustomCard
      sx={{
        gap: 2,
        p: 3,
        display: "grid",
        gridTemplateColumns: "1fr 1fr",
        gridTemplateAreas: `
            "header header"
            "leftCol rightCol"
          `,
      }}
    >
      <Box sx={{ gridArea: "header" }}>
        <SectionHeader
          title="Pago Completado"
          subtitle="Informacion del pago recibido"
          icon={
            <CheckCircleOutlineIcon
              fontSize="large"
              sx={{ color: theme.palette.primary.dark }}
            />
          }
        />
      </Box>
      <Box
        gridArea={"leftCol"}
        display={"flex"}
        alignItems={"start"}
        justifyContent={"center"}
        flexDirection={"column"}
        sx={{
          borderRadius: "8px",
          height: "auto",
        }}
      >
        <PaymentDetail
          title="Monto del Pago"
          content={
            <PriceLabel
              number="8.900"
              currency={Currency.COP}
              sx={{
                color: theme.palette.primary.dark,
              }}
            />
          }
        />
        <PaymentDetail
          title="Fecha del Pago"
          content={
            <Typography fontWeight={600} fontSize={isMdUp ? 18 : 16}>
              8/8/2025
            </Typography>
          }
        />
        <PaymentDetail
          title="Metodo de Pago"
          content={
            <Typography fontWeight={600} fontSize={isMdUp ? 18 : 16}>
              Transferencia Bancaria
            </Typography>
          }
        />
      </Box>
      <Box
        gridArea={"rightCol"}
        display={"flex"}
        alignItems={"start"}
        justifyContent={"center"}
        flexDirection={"column"}
        sx={{
          borderRadius: "8px",
          height: "auto",
        }}
      >
        <PaymentDetail
          title="Estado"
          content={
            <CustomChip
              fontSizeXs={"12px"}
              fontSizeMd={"14px"}
              sx={{
                backgroundColor: "#E8F9F0",
                color: "green",
                px: isMdUp ? 2 : 1.5,
                py: 0.3,
                borderRadius: "20px",
              }}
            >
              Completado
            </CustomChip>
          }
        />
        <PaymentDetail
          title="Fecha de Vencimiento"
          content={
            <Typography fontWeight={600} fontSize={isMdUp ? 18 : 16}>
              8/8/2025
            </Typography>
          }
        />
        <PaymentDetail
          title="Referencia"
          content={
            <Typography fontWeight={600} fontSize={isMdUp ? 18 : 16}>
              TXN-789456123
            </Typography>
          }
        />
      </Box>
    </CustomCard>
  );
};
