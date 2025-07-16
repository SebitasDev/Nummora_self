import { Box, Typography, useTheme, useMediaQuery } from "@mui/material";
import { Activity } from "../types/activity";
import { CustomChip } from "@/components/atoms/CustomChip";
import { CustomCard } from "@/components/atoms/CustomCard";
import PriceLabel from "@/components/atoms/PriceLabel";
import { Currency } from "@/enums";
import Theme from "@/theme/theme";
import SectionHeader from "@/components/atoms/SectionHeader";

interface Props {
  activity: Activity;
}

export const ActivityCard = ({ activity }: Props) => {
  const getStatusColor = (status: Activity["status"]) => {
    switch (status) {
      case "Completado":
        return "#E8F9F0";
      case "Procesando":
        return "#FFFDBD";
      case "Activo":
        return "#E1EEFF";
      default:
        return "default";
    }
  };
  const getStatusLabelColor = (status: Activity["status"]) => {
    switch (status) {
      case "Completado":
        return "green";
      case "Procesando":
        return "#7B491F";
      case "Activo":
        return "#2563EB";
      default:
        return "black";
    }
  };
  const themeMUI = useTheme();
  const isMdUp = useMediaQuery(themeMUI.breakpoints.up("md"));
  const theme = Theme;

  return (
    <CustomCard
      display="flex"
      justifyContent="space-between"
      alignItems="center"
    >
      <Box>
        <SectionHeader
          title={activity.title}
          titleSize={isMdUp ? 16 : 12}
          subtitleSize={isMdUp ? 14 : 11}
          subtitle={activity.description}
        />
        <Typography
          variant="body2"
          color="text.secondary"
          sx={{ fontSize: isMdUp ? 14 : 11 }}
        >
          {activity.date}
        </Typography>
      </Box>
      <Box textAlign="right">
        <PriceLabel
          number={activity.amount.toLocaleString()}
          currency={Currency.COP}
          sx={{
            fontSize: `calc(${theme.fontSize.amountLabel.md} - 0.15rem)`,
            letterSpacing: "-0.5px",
            [themeMUI.breakpoints.down("md")]: {
              fontSize: `calc(${theme.fontSize.amountLabel.xs} - 0.15rem)`,
            },
            width: "fit-content",
          }}
        />
        <CustomChip
          fontSizeXs="11px"
          fontSizeMd="14px"
          sx={{
            mt: 1,
            backgroundColor: getStatusColor(activity.status),
            color: getStatusLabelColor(activity.status),
            px: isMdUp ? 2 : 1.5,
            py: 0.3,
            borderRadius: "20px",
          }}
        >
          {activity.status}
        </CustomChip>
      </Box>
    </CustomCard>
  );
};
