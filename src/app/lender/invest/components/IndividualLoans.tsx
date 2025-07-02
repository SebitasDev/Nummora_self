import { CustomCard } from "@/components/atoms/CustomCard";
import { CustomChip } from "@/components/atoms/CustomChip";
import SectionHeader from "@/components/atoms/SectionHeader";
import { Box, Button, Typography } from "@mui/material";
import { useInvest } from "@/app/lender/invest/hooks";

export const IndividualLoans = () => {
  const { theme, isMobile } = useInvest();
  const loans = [
    {
      name: "María González",
      purpose: "Gastos personales",
      amount: 50000,
      term: "1 mes",
      profit: 4500,
      total: 54500,
    },
    {
      name: "Carlos Rodríguez",
      purpose: "Pago de servicios",
      amount: 70000,
      term: "2 meses",
      profit: 6000,
      total: 76000,
    },
    {
      name: "Ana Martínez",
      purpose: "Compra de medicamentos",
      amount: 80000,
      term: "3 meses",
      profit: 7200,
      total: 87200,
    },
  ];

  return (
    <CustomCard sx={{ height: "auto" }}>
      <SectionHeader
        title={"Préstamos Individuales"}
        subtitle={
          "Cada préstamo es financiado completamente por un solo inversionista"
        }
      />
      <Box sx={{ pt: 0, mt: 2 }}>
        <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
          {loans.map((loan, index) => (
            <CustomCard key={index} sx={{ "&:hover": { bgcolor: "grey.50" } }}>
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: isMobile ? "center" : "flex-start",
                  mb: 1,
                }}
              >
                <SectionHeader
                  title={loan.name}
                  subtitle={loan.purpose}
                  titleSize={"1.2rem"}
                  subtitleSize={"0.8rem"}
                />
                <CustomChip
                  sx={{
                    p: 0.3,
                    color: theme.palette.primary.dark,
                    backgroundColor: theme.palette.primary.background,
                    border: `1px solid ${theme.palette.primary.light}`,
                    px: 0.6,
                  }}
                >
                  {`+$${loan.profit.toLocaleString()}`}
                </CustomChip>
              </Box>

              <Box sx={{ mb: 2, display: "flex" }}>
                <Box sx={{ width: "50%" }}>
                  <Typography
                    fontSize={"0.8rem"}
                    variant="caption"
                    color="text.secondary"
                  >
                    Monto
                  </Typography>
                  <Typography variant="body2" fontWeight="bold">
                    ${loan.amount.toLocaleString()}
                  </Typography>
                </Box>
                <Box
                  sx={{
                    width: "50%",
                    textAlign: isMobile ? "right" : "initial",
                  }}
                >
                  <Typography
                    fontSize={"0.8rem"}
                    variant="caption"
                    color="text.secondary"
                  >
                    Plazo
                  </Typography>
                  <Typography variant="body2" fontWeight="bold">
                    {loan.term}
                  </Typography>
                </Box>
              </Box>

              <Box
                sx={{
                  mb: 2,
                  bgcolor: theme.palette.secondary.background,
                  border: `1.5px solid ${theme.palette.secondary.light}`,
                  borderRadius: "8px",
                  color: theme.palette.secondary.main,
                  height: "40px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <Typography
                  fontSize={"0.775rem"}
                  variant="caption"
                  sx={{ textAlign: "center", fontWeight: "bold" }}
                >
                  Inviertes: ${loan.amount.toLocaleString()} → Recibes: $
                  {loan.total.toLocaleString()}
                </Typography>
              </Box>

              <Button
                variant="contained"
                fullWidth
                sx={{
                  height: "40px",
                  backgroundColor: "black",
                  borderRadius: "8px",
                  fontSize: "0.8rem",
                }}
              >
                Financiar préstamo completo
              </Button>
            </CustomCard>
          ))}
        </Box>
      </Box>
    </CustomCard>
  );
};
