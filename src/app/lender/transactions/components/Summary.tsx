import { CustomCard } from "@/components/atoms/CustomCard";
import SectionHeader from "@/components/atoms/SectionHeader";
import { AmountRow } from "@/components/molecules/AmountRow";
import { Box, Typography } from "@mui/material";
import Theme from "@/theme/theme";
import AttachMoneyIcon from "@mui/icons-material/AttachMoney";
import PriceLabel from "@/components/atoms/PriceLabel";
import { Currency } from "@/enums";

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
      <CustomCard
        gridArea={"leftCol"}
        display={"flex"}
        alignItems={"center"}
        justifyContent={"center"}
        flexDirection={"column"}
        sx={{
          px: 1,
          py: 1.5,
          borderRadius: "8px",
          height: "80px",
          backgroundColor: "#edfdf4",
          borderColor: "#edfdf4",
          gridArea: "Total",
          display: "flex",
          flexDirection: "column",
          gap: 1,
        }}
      >
        <PriceLabel
          number={"65.000"}
          currency={Currency.COP}
          sx={{
            color: theme.palette.primary.dark,
          }}
        />
        <Typography variant="h6" fontSize={"14px"} color={"gray"}>
          Total en Actividades
        </Typography>
      </CustomCard>
      <CustomCard
        gridArea={"leftCol"}
        display={"flex"}
        alignItems={"center"}
        justifyContent={"center"}
        flexDirection={"column"}
        sx={{
          p: 1,
          borderRadius: "8px",

          height: "80px",
          backgroundColor: "#eaf4fd",
          borderColor: "#eaf4fd",
        }}
      >
        <Typography
          variant="h4"
          color={theme.palette.secondary.dark}
          fontWeight={"bold"}
          fontSize={"25px"}
        >
          1
        </Typography>
        <Typography variant="h6" fontSize={"14px"} color={"gray"}>
          Completadas
        </Typography>
      </CustomCard>
      <CustomCard
        gridArea={"rightCol"}
        display={"flex"}
        alignItems={"center"}
        justifyContent={"center"}
        flexDirection={"column"}
        sx={{
          px: 1,
          py: 1.5,
          borderRadius: "8px",
          height: "80px",
          backgroundColor: "#FFFDBD",
          borderColor: "#FFFDBD",
        }}
      >
        <Typography
          variant="h4"
          color={"#7B491F"}
          fontWeight={"bold"}
          fontSize={"25px"}
        >
          0
        </Typography>
        <Typography variant="h6" fontSize={"14px"} color={"gray"}>
          Activas
        </Typography>
      </CustomCard>
    </CustomCard>
  );
};
