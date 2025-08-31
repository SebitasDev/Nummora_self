import { CustomCard } from "@/components/atoms/CustomCard";
import SectionHeader from "@/components/atoms/SectionHeader";
import { Box, Typography } from "@mui/material";
import Theme from "@/theme/theme";
import AttachMoneyIcon from "@mui/icons-material/AttachMoney";
import PriceLabel from "@/components/atoms/PriceLabel";
import { Currency } from "@/enums";
import { ColouredCard } from "@/components/molecules/ColouredCard";

export const Summary = () => {
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
             "Total Total"
            "leftCol rightCol"
           
          `,
      }}
    >
      <Box sx={{ gridArea: "header" }}>
        <SectionHeader
          icon={<AttachMoneyIcon sx={{ color: theme.palette.primary.dark }} />}
          title="Resumen"
        />
      </Box>
      <ColouredCard
        backgroundColor="#edfdf4"
        subtitle="Total en Actividades"
        gridArea="Total"
      >
        <PriceLabel
          number={"65.000"}
          currency={Currency.COP}
          sx={{
            mb: 0.5,
            color: theme.palette.primary.dark,
          }}
        />
      </ColouredCard>
      <ColouredCard backgroundColor="#eaf4fd" subtitle="Completadas">
        <Typography
          variant="h4"
          color={theme.palette.secondary.dark}
          fontWeight={"bold"}
          fontSize={"25px"}
        >
          1
        </Typography>
      </ColouredCard>
      <ColouredCard backgroundColor="#FFFDBD" subtitle="Activas">
        <Typography
          variant="h4"
          color={"#7B491F"}
          fontWeight={"bold"}
          fontSize={"25px"}
        >
          0
        </Typography>
      </ColouredCard>
    </CustomCard>
  );
};
