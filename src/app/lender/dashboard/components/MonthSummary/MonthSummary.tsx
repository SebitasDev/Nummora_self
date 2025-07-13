import { Box, Divider, Typography, useTheme } from "@mui/material";
import { useMediaQuery } from "@mui/system";
import Theme from "@/theme/theme";
import SectionHeader from "@/components/atoms/SectionHeader";
import PriceLabel from "@/components/atoms/PriceLabel";
import { Currency } from "@/enums";
import { CustomCard } from "@/components/atoms/CustomCard";
import { useStyles } from "@/hooks/useStyles";

export const MonthSummary = () => {
  const { theme, isMdDown } = useStyles();

  return (
    <CustomCard
      sx={{
        gridColumn: {
          xs: "1 / -1",
          md: "span 4",
        },
        order: {
          xs: 8,
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
      <SectionHeader title={"Resumen del mes"} titleSize={isMdDown ? 15 : 20} />

      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          gap: 2.5,
        }}
      >
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <Typography
            variant={"body1"}
            color={"gray"}
            fontSize={
              isMdDown ? theme.fontSize.subtitle.xs : theme.fontSize.subtitle.md
            }
            fontWeight={"bold"}
          >
            Ingresos totales
          </Typography>

          <PriceLabel
            number={"45.000"}
            currency={Currency.COP}
            sx={{
              color: theme.palette.primary.dark,
            }}
          />
        </Box>

        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <Typography
            variant={"body1"}
            color={"gray"}
            fontSize={
              isMdDown ? theme.fontSize.subtitle.xs : theme.fontSize.subtitle.md
            }
            fontWeight={"bold"}
          >
            Prestamos activos
          </Typography>

          <Typography variant={"body1"} fontSize={"16px"} fontWeight={"800"}>
            5
          </Typography>
        </Box>

        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <Typography
            variant={"body1"}
            color={"gray"}
            fontSize={
              isMdDown ? theme.fontSize.subtitle.xs : theme.fontSize.subtitle.md
            }
            fontWeight={"bold"}
          >
            Tasa de retorno
          </Typography>

          <Typography
            variant={"body1"}
            fontSize={"16px"}
            fontWeight={"800"}
            color={theme.palette.secondary.dark}
          >
            15,2%
          </Typography>
        </Box>
      </Box>

      <Divider />

      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <Typography 
            variant={"body1"}
            fontSize={
                isMdDown ? theme.fontSize.subtitle.xs : theme.fontSize.subtitle.md
            }
        >
          Rendimiento
        </Typography>

        <Typography variant={"body1"} fontSize={"16px"} fontWeight={"800"}>
          Excelente
        </Typography>
      </Box>
    </CustomCard>
  );
};
