import { CustomCard } from "@/components/atoms/CustomCard";
import SectionHeader from "@/components/atoms/SectionHeader";
import { Box, Typography } from "@mui/material";
import WalletOutlinedIcon from "@mui/icons-material/WalletOutlined";
import ShieldOutlinedIcon from "@mui/icons-material/ShieldOutlined";
import CheckCircleOutlinedIcon from "@mui/icons-material/CheckCircleOutlined";
import { useInvest } from "@/app/lender/invest/hooks";

export const ImportantInfo = () => {
  const { theme } = useInvest();
  return (
    <CustomCard sx={{ height: "auto" }}>
      <SectionHeader title={"Información Importante"} />
      <Box sx={{ pt: 0, mt: 2 }}>
        <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
          <Box sx={{ display: "flex", alignItems: "flex-start", gap: 1 }}>
            <ShieldOutlinedIcon
              sx={{
                color: theme.palette.secondary.main,
                mt: 0.5,
                fontSize: 16,
              }}
            />
            <Box>
              <Typography variant="subtitle2" fontWeight="bold">
                Diversificación
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Recomendamos diversificar en múltiples préstamos
              </Typography>
            </Box>
          </Box>

          <Box sx={{ display: "flex", alignItems: "flex-start", gap: 1 }}>
            <CheckCircleOutlinedIcon
              sx={{ color: theme.palette.primary.main, mt: 0.5, fontSize: 16 }}
            />
            <Box>
              <Typography variant="subtitle2" fontWeight="bold">
                Inversión Segura
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Tu inversión está protegida por nuestro fondo de seguridad.
              </Typography>
            </Box>
          </Box>

          <Box sx={{ display: "flex", alignItems: "flex-start", gap: 1 }}>
            <WalletOutlinedIcon
              sx={{ color: theme.palette.primary.main, mt: 0.5, fontSize: 16 }}
            />
            <Box>
              <Typography variant="subtitle2" fontWeight="bold">
                Liquidez
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Fondos disponibles después del plazo
              </Typography>
            </Box>
          </Box>
        </Box>
      </Box>
    </CustomCard>
  );
};
