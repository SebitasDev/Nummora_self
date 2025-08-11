import { CustomCard } from "@/components/atoms/CustomCard";
import SectionHeader from "@/components/atoms/SectionHeader";
import { AmountRow } from "@/components/molecules/AmountRow";
import { Box, Typography } from "@mui/material";
import Theme from "@/theme/theme";
import { ColouredCard } from "@/components/molecules/ColouredCard";

export const StatisticsCard = () => {
  const fontSize = {
    xs: "0.54rem",
    sm: "0.7rem",
    md: "1rem",
  };
  const numberFontSize = {
    xs: "1.2rem",
    sm: "1.5rem",
    md: "2rem",
  };
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
            "InfoRow InfoRow"
          `,
      }}
    >
      <Box sx={{ gridArea: "header" }}>
        <SectionHeader title="Estadisticas del Mes" />
      </Box>
      <ColouredCard
        backgroundColor="#edfdf4"
        subtitle="Retiros Exitosos"
        gridArea={"leftCol"}
      >
        <Typography
          variant="h4"
          color={theme.palette.primary.dark}
          fontWeight={"bold"}
          fontSize={"25px"}
        >
          4
        </Typography>
      </ColouredCard>
      <ColouredCard
        backgroundColor="#eaf4fd"
        subtitle="Dias Promedio"
        gridArea={"rightCol"}
      >
        <Typography
          variant="h4"
          color={theme.palette.secondary.dark}
          fontWeight={"bold"}
          fontSize={"25px"}
        >
          1.2
        </Typography>
      </ColouredCard>
      <Box
        sx={{
          gridArea: "InfoRow",
          display: "flex",
          flexDirection: "column",
          gap: 1,
        }}
      >
        <Box
          display="flex"
          justifyContent="space-between"
          alignItems="center"
          my={1}
        >
          <Typography variant="body2" color="text.secondary" fontSize={"16px"}>
            Metodo mas Usado
          </Typography>
          <Typography
            variant="body2"
            color="text.primary"
            fontSize={"16px"}
            fontWeight={"bold"}
          >
            Transferencia
          </Typography>
        </Box>
        <AmountRow label={"Comisiones Pagadas"} value={"1.200"} />
      </Box>
    </CustomCard>
  );
};
