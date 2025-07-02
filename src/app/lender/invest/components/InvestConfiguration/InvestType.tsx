import { CustomCard } from "@/components/atoms/CustomCard";
import CheckCircleOutlinedIcon from "@mui/icons-material/CheckCircleOutlined";
import { Box, Typography } from "@mui/material";
import { Wallet } from "@mui/icons-material";
import { useInvest } from "@/app/lender/invest/hooks";
export const InvestType = () => {
  const { theme } = useInvest();
  return (
    <Box>
      <Typography
        variant="h6"
        fontSize={"18px"}
        fontWeight="bold"
        sx={{ mb: 1 }}
      >
        Tipo de Inversión
      </Typography>
      <CustomCard
        sx={{
          p: 1.2,
          background:
            "linear-gradient(135deg, #ffffff 0%, #f8f9fa 50%, #ffffff 100%)",
          border: "1px solid #dee2e6",
          borderRadius: 2,
          display: "flex",
          alignItems: "center",
        }}
      >
        <Wallet
          sx={{
            color: theme.palette.primary.dark,
            mr: 1,
            fontSize: "1.3rem",
          }}
        />

        <Box>
          <Typography
            variant="subtitle2"
            fontWeight="medium"
            sx={{ color: "#6c757d" }}
          >
            Inversión a termino fijo
          </Typography>
          <Typography
            variant="body2"
            color="text.secondary"
            sx={{ color: "#adb5bd" }}
          >
            Retira tu dinero en determinados plazos
          </Typography>
        </Box>
      </CustomCard>

      <CustomCard
        sx={{
          p: 1.2,
          mt: 1,
          backgroundColor: "#EFF6FF",
          border: "1.5px solid #BFDBFE",
          display: "flex",
        }}
      >
        <CheckCircleOutlinedIcon
          sx={{
            color: theme.palette.secondary.light,
            mr: 1,
            mt: 0.2,
            fontSize: "1.3rem",
          }}
        />
        <Box>
          <Typography
            color={theme.palette.secondary.main}
            variant="subtitle2"
            fontWeight="medium"
          >
            Inversión sin plazo fijo
          </Typography>
          <Typography color={theme.palette.secondary.light} variant="body2">
            Puedes retirar tu dinero en cualquier momento. Las ganancias se
            calculan diariamente.
          </Typography>
        </Box>
      </CustomCard>
    </Box>
  );
};
