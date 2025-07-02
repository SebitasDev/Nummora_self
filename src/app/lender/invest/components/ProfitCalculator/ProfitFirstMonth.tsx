import { Box, Typography } from "@mui/material";
import PriceLabel from "@/components/atoms/PriceLabel";
import { Currency } from "@/enums";
import { CustomCard } from "@/components/atoms/CustomCard";
import { useInvest } from "@/app/lender/invest/hooks";

export const ProfitFirstMonth = () => {
  const { theme, amount } = useInvest();

  return (
    <CustomCard
      sx={{
        backgroundColor: "white",
        border: "1px solid #bbf7d0",
        p: 2,
      }}
    >
      <Typography
        variant="subtitle1"
        fontWeight="medium"
        sx={{ color: theme.palette.primary.dark, mb: 1 }}
      >
        Primer Mes
      </Typography>
      <Box
        sx={{ display: "flex", flexDirection: "column", gap: 1, width: "100%" }}
      >
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <Typography variant="body2" color="text.secondary">
            Tu inversión inicial:
          </Typography>
          <PriceLabel
            number={amount.toLocaleString()}
            currency={Currency.COP}
            sx={{ fontSize: "14px", maxWidth: "50%" }}
          />
        </Box>
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <Typography variant="body2" color="text.secondary">
            Personas que puedes financiar:
          </Typography>
          <Typography fontSize={"14px"} variant="body2" fontWeight="bold">
            {Math.floor(amount / 50000)} personas
          </Typography>
        </Box>
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <Typography variant="body2" color="text.secondary">
            Ganancia del primer mes:
          </Typography>
          <PriceLabel
            number={Math.floor(amount * 0.09).toLocaleString()}
            currency={Currency.COP}
            sx={{ fontSize: "14px", maxWidth: "50%" }}
          />
        </Box>
        <Box sx={{ display: "flex", justifyContent: "space-between" }}>
          <Typography variant="body2" color="text.secondary">
            Capital para el mes 2:
          </Typography>
          <PriceLabel
            number={Math.floor(amount * 1.09).toLocaleString()}
            currency={Currency.COP}
            sx={{
              fontSize: "14px",
              maxWidth: "50%",
              color: theme.palette.primary.dark,
            }}
          />
        </Box>
      </Box>
    </CustomCard>
  );
};
