import SectionTitle from "@/components/atoms/SectionTitle";
import { Box, useMediaQuery, useTheme } from "@mui/material";

export default function TransactionsHistory() {
  const themeMUI = useTheme();
  const isDesktop = useMediaQuery(themeMUI.breakpoints.up("md"));
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        gap: 3,
        [themeMUI.breakpoints.up("md")]: {
          display: "grid",
          gridTemplateColumns: "2fr 1fr",
          gridTemplateAreas: `
            "header header"
            "leftCol rightCol"
          `,
          gap: 3,
        },
      }}
    >
      {isDesktop && (
        <Box sx={{ gridArea: "header" }}>
          <SectionTitle>Actividad Reciente</SectionTitle>
          <p>Histortial Completo de tus transacciones</p>
        </Box>
      )}
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          gap: 3,
          gridArea: "leftCol",
          backgroundColor: "lightblue",
        }}
      ></Box>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          gap: 3,
          gridArea: "rightCol",
          backgroundColor: "lightred",
        }}
      ></Box>
    </Box>
  );
}
