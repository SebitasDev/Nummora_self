import { CustomCard } from "@/components/atoms/CustomCard";
import SectionHeader from "@/components/atoms/SectionHeader";
import { AmountRow } from "@/components/molecules/AmountRow";
import { Box, Typography } from "@mui/material";

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
  return (
    <CustomCard
      sx={{
        gap: 2,
        padding: 4,
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
      <CustomCard
        gridArea={"leftCol"}
        display={"flex"}
        alignItems={"center"}
        justifyContent={"center"}
        flexDirection={"column"}
        sx={{
          backgroundColor: "#edfdf4",
          borderColor: "#edfdf4",
        }}
      >
        <Typography
          variant="h4"
          fontWeight={600}
          color="success.light"
          fontSize={numberFontSize}
        >
          4
        </Typography>
        <Typography variant="h6" fontWeight={600} fontSize={fontSize}>
          Retiros Exitosos
        </Typography>
      </CustomCard>
      <CustomCard
        gridArea={"rightCol"}
        display={"flex"}
        alignItems={"center"}
        justifyContent={"center"}
        flexDirection={"column"}
        sx={{
          backgroundColor: "#eaf4fd",
          borderColor: "#eaf4fd",
        }}
      >
        <Typography
          variant="h4"
          fontWeight={600}
          color="#2563EB"
          fontSize={numberFontSize}
        >
          1.2
        </Typography>
        <Typography variant="h6" fontWeight={600} fontSize={fontSize}>
          Dias Promedio
        </Typography>
      </CustomCard>
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
          <Typography variant="body2" color="text.secondary" sx={{ fontSize }}>
            Metodo mas Usado
          </Typography>
          <Typography
            variant="body2"
            color="text.primary"
            sx={{ fontSize, fontWeight: 800 }}
          >
            Transferencia
          </Typography>
        </Box>
        <AmountRow label={"Comisiones Pagadas"} value={"1.200"} />
      </Box>
    </CustomCard>
  );
};
