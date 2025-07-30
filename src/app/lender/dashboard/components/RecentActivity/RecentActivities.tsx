import { Box } from "@mui/material";
import SectionHeader from "@/components/atoms/SectionHeader";
import { CardRecentActivity } from "@/app/lender/dashboard/components/RecentActivity/CardRecentActivity";
import { useRecentActivities } from "@/app/lender/dashboard/hooks";
import WalletIcon from "@mui/icons-material/Wallet";
import CreditCardIcon from "@mui/icons-material/CreditCard";
import SavingsIcon from "@mui/icons-material/Savings";
import { CustomCard } from "@/components/atoms/CustomCard";
import { CustomButton } from "@/components/atoms/CustomButton";
import { useStyles } from "@/hooks/useStyles";

export const RecentActivities = () => {
  const { themeMUI, isMdDown, theme } = useStyles();

  return (
    <CustomCard
      sx={{
        gridColumn: {
          xs: "1 / -1",
          md: "span 8",
        },
        order: {
          xs: 7,
          md: "initial",
        },
        width: "100%",
        height: "300px",
        padding: 2.9,
        display: "flex",
        flexDirection: "column",
        gap: 2.5,
      }}
    >
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <SectionHeader
          title={"Actividad reciente"}
          titleSize={isMdDown ? 15 : 20}
        />

        <CustomButton key="History" href="/lender/transactions">
          Ver todo
        </CustomButton>
      </Box>

      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          gap: 3,
        }}
      >
        <CardRecentActivity
          title={"Pago recibido - Prestamo #1234"}
          subtitle={"Hace 2 horas"}
          icon={
            <WalletIcon
              sx={{
                color: theme.palette.loan.completed.main,
                [themeMUI.breakpoints.down("md")]: {
                  fontSize: "24px",
                },
              }}
            />
          }
          amount={"15.000"}
          color={theme.palette.loan.completed.main}
          backgroundColor={theme.palette.loan.completed.background}
          status={"Completado"}
        />

        <CardRecentActivity
          title={"Nuevo préstamo aprobado - Prestamo #1235"}
          subtitle={"Hace 1 día"}
          icon={
            <CreditCardIcon
              sx={{
                color: theme.palette.loan.pending.main,
                [themeMUI.breakpoints.down("md")]: {
                  fontSize: "24px",
                },
              }}
            />
          }
          amount={"50.000"}
          color={theme.palette.loan.pending.main}
          backgroundColor={theme.palette.loan.pending.background}
          status={"Pendiente"}
        />

        <CardRecentActivity
          title={"Inversión realizada - Portafolio diversificado"}
          subtitle={"Hace 2 días"}
          icon={
            <SavingsIcon
              sx={{
                color: theme.palette.loan.active.main,
                [themeMUI.breakpoints.down("md")]: {
                  fontSize: "24px",
                },
              }}
            />
          }
          amount={"25.000"}
          color={theme.palette.loan.active.main}
          backgroundColor={theme.palette.loan.active.background}
          status={"Activo"}
        />
      </Box>
    </CustomCard>
  );
};
