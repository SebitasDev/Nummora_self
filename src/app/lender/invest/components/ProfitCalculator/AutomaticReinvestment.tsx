import { CustomCard } from "@/components/atoms/CustomCard";
import { Box, Typography } from "@mui/material";
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";

export const AutomaticReinvestment = () => {
  return (
    <CustomCard
      sx={{ backgroundColor: "#FEFCE8", border: "1.5px solid #FEF08A" }}
    >
      <Box sx={{ display: "flex", alignItems: "flex-start", gap: 1 }}>
        <CheckCircleOutlineIcon
          sx={{ color: "#F3B94D", mt: 0.5, fontSize: 16 }}
        />
        <Box>
          <Typography
            variant="subtitle2"
            fontWeight="bold"
            sx={{ color: "#F3B94D" }}
          >
            Reinversión Automática
          </Typography>
          <Typography variant="body2" sx={{ color: "#FEC657" }}>
            Cada mes las ganancias se suman al capital para financiar más
            personas y generar mayor rentabilidad.
          </Typography>
        </Box>
      </Box>
    </CustomCard>
  );
};
