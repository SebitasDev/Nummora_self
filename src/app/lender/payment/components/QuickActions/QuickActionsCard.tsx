import { Typography, useMediaQuery, useTheme, Stack } from "@mui/material";
import { CustomCard } from "@/components/atoms/CustomCard";
import SectionHeader from "@/components/atoms/SectionHeader";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import ErrorOutlineIcon from "@mui/icons-material/ErrorOutline";
import DownloadIcon from "@mui/icons-material/Download";

export const QuickActionsCard = () => {
  const themeMUI = useTheme();
  const isMdUp = useMediaQuery(themeMUI.breakpoints.up("md"));

  const actions = [
    {
      label: "Ver Cronograma Completo",
      icon: <CalendarMonthIcon />,
      onClick: () => console.log("Ver Cronograma"),
    },
    {
      label: "Reportar Problema",
      icon: <ErrorOutlineIcon />,
      onClick: () => console.log("Reportar Problema"),
    },
    {
      label: "Descargar Recibo",
      icon: <DownloadIcon />,
      onClick: () => console.log("Descargar Recibo"),
    },
  ];

  return (
    <CustomCard display="flex" flexDirection="column" gap={3} p={3}>
      <SectionHeader title="Acciones Rápidas" />
      <Stack spacing={1.5}>
        {actions.map((action, index) => (
          <CustomCard
            key={index}
            display="flex"
            alignItems="center"
            gap={1.5}
            p={2}
            sx={{
              cursor: "pointer",
              "&:hover": {
                backgroundColor: "#f9fafb",
              },
            }}
            onClick={action.onClick}
          >
            {action.icon}
            <Typography
              variant="body1"
              color="text.secondary"
              fontSize={isMdUp ? 14 : 11}
              fontWeight="bold"
            >
              {action.label}
            </Typography>
          </CustomCard>
        ))}
      </Stack>
    </CustomCard>
  );
};
