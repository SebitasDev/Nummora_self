import { CustomCard } from "@/components/atoms/CustomCard";
import { Box, Typography } from "@mui/material";
import { useInvest } from "@/app/lender/invest/hooks";

export const ReinvestmentComparison = () => {
  const { amount, theme } = useInvest();

  return (
    <CustomCard
      sx={{
        backgroundColor: "#EFF6FF",
        border: "1.5px solid #BFDBFE",
      }}
    >
      <Typography
        color={theme.palette.secondary.dark}
        variant="subtitle2"
        fontWeight="bold"
        sx={{ mb: 1 }}
      >
        Comparación:
      </Typography>
      <Box sx={{ display: "flex" }}>
        <Box sx={{ width: "50%" }}>
          <Typography variant="caption" color="text.secondary">
            Sin reinversión:
          </Typography>
          <Typography variant="body2" fontWeight="bold">
            ${Math.floor(amount * 1.12).toLocaleString()}
          </Typography>
        </Box>
        <Box sx={{ width: "50%" }}>
          <Typography variant="caption" color="text.secondary">
            Con reinversión:
          </Typography>
          <Typography
            variant="body2"
            fontWeight="bold"
            sx={{ color: theme.palette.primary.dark }}
          >
            ${Math.floor(amount * 1.44).toLocaleString()}
          </Typography>
        </Box>
      </Box>
      <Typography
        variant="body2"
        sx={{ color: theme.palette.primary.dark, fontWeight: "bold", mt: 1 }}
      >
        Ganancia adicional: ${Math.floor(amount * 0.32).toLocaleString()}
      </Typography>
    </CustomCard>
  );
};
