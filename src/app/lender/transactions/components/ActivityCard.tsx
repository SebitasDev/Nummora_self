import { Box, Typography, Avatar, Stack } from "@mui/material";
import { Activity } from "../types/activity";
import { CustomChip } from "@/components/atoms/CustomChip";
import { CustomCard } from "@/components/atoms/CustomCard";
import PriceLabel from "@/components/atoms/PriceLabel";
import { Currency } from "@/enums";
import SectionHeader from "@/components/atoms/SectionHeader";
import { useActivityCardInfo } from "../hooks/useActivityCard";

interface Props {
  activity: Activity;
}

export const ActivityCard = ({ activity }: Props) => {
  const {
    icon,
    bgColor,
    isMdUp,
    theme,
    themeMUI,
    statusColor,
    statusLabelColor,
  } = useActivityCardInfo(activity);

  return (
    <CustomCard
      sx={{
        padding: isMdUp ? 2 : 1.5,
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
      }}
    >
      <Stack display="flex" flexDirection="row" alignItems="center" gap={1}>
        <Avatar
          sx={{
            bgcolor: bgColor,
            width: isMdUp ? 45 : 40,
            height: isMdUp ? 45 : 40,
            borderRadius: "40px",
          }}
        >
          {icon}
        </Avatar>
        <Box sx={{ ml: isMdUp ? 1 : 0 }}>
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
      </Stack>
      <Box textAlign="right">
        <PriceLabel
          number={activity.amount.toLocaleString()}
          currency={Currency.COP}
          sx={{
            fontSize: `calc(${theme.fontSize.amountLabel.md} - 0.20rem)`,
            letterSpacing: "-0.5px",
            [themeMUI.breakpoints.down("md")]: {
              fontSize: `calc(${theme.fontSize.amountLabel.xs} - 0.20rem)`,
            },
            width: "fit-content",
          }}
        />
        <CustomChip
          fontSizeXs="11px"
          fontSizeMd="14px"
          sx={{
            mt: 1,
            backgroundColor: statusColor,
            color: statusLabelColor,
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
