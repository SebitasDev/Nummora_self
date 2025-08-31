import { Box, Typography } from "@mui/material";
import PriceLabel from "@/components/atoms/PriceLabel";
import { Currency } from "@/enums";
import { CustomCard } from "@/components/atoms/CustomCard";
import { useInvest } from "@/app/lender/invest/hooks";

export const TotalProfit = () => {
  const { amount, themeMUI, theme } = useInvest();

  return (
    <CustomCard
      sx={{
        background: "linear-gradient(135deg, #4ade80, #22c55e)",
        color: "white",
        p: 2,
      }}
    >
      <Box sx={{ textAlign: "center", mb: 2 }}>
        <PriceLabel
          number={Math.floor(amount * 1.44 - amount).toLocaleString()}
          currency={Currency.COP}
          sx={{
            color: "white"
          }}
        />
        <Typography variant="body2" sx={{ opacity: 0.9 }}>
          Ganancia total después de 12 meses
        </Typography>
      </Box>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
        }}
      >
        <Box
          sx={{
            width: "50%",
            textAlign: "center",
            display: "flex",
            flexDirection: "column",
          }}
        >
          <PriceLabel
            number={Math.floor(amount * 1.44).toLocaleString()}
            currency={Currency.COP}
            sx={{
              color: "white",
              lineHeight: "body2.lineHeight",
            }}
          />
          <Typography variant="body2" sx={{ opacity: 0.9 }}>
            Capital final
          </Typography>
        </Box>
        <Box
          sx={{
            width: "50%",
            textAlign: "center",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
          }}
        >
          <Typography variant="h6" fontWeight="bold">
            144%
          </Typography>
          <Typography variant="body2" sx={{ opacity: 0.9 }}>
            Rentabilidad anual esperada
          </Typography>
        </Box>
      </Box>
    </CustomCard>
  );
};
