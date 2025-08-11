import { CustomCard } from "@/components/atoms/CustomCard";
import PriceLabel from "@/components/atoms/PriceLabel";
import { Currency } from "@/enums";
import {
  Avatar,
  Box,
  Stack,
  Typography,
  useTheme,
  useMediaQuery,
} from "@mui/material";
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import Theme from "@/theme/theme";

interface ScheduledPaymentCardProps {
  value: string;
  date: string;
  isDone: boolean;
  quotaNumber: string;
  balance: string;
}

export const ScheduledPaymentCard = ({
  value,
  date,
  isDone,
  quotaNumber,
  balance,
}: ScheduledPaymentCardProps) => {
  const themeMUI = useTheme();
  const isMdUp = useMediaQuery(themeMUI.breakpoints.up("md"));
  const theme = Theme;
  return (
    <CustomCard
      sx={{
        borderRadius: 2,
        overflow: "hidden",
        borderWidth: 1,
        borderStyle: "solid",
        px: 2,
        py: 4.6,
      }}
    >
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          height: "0.3rem",
        }}
        position={"initial"}
      >
        <Box display="flex" alignItems="center" gap={2}>
          <Avatar
            sx={{
              bgcolor: isDone ? "#edfdf4" : "#f4f5f7",
              color: isDone ? "#edfdf4" : "#f4f5f7",
              width: {
                xs: 35,
                md: 40,
              },
              height: {
                xs: 35,
                md: 40,
              },
            }}
          >
            {isDone ? (
              <CheckCircleOutlineIcon
                sx={{ color: theme.palette.primary.dark }}
              />
            ) : (
              <AccessTimeIcon sx={{ color: "#4b5563" }} />
            )}
          </Avatar>
          <Stack spacing={1}>
            <Typography
              variant="body2"
              color="text.secondary"
              sx={{
                fontSize: `calc(${theme.fontSize.amountLabel.md} - 0.15rem)`,
                letterSpacing: "-0.5px",
                [themeMUI.breakpoints.down("md")]: {
                  fontSize: `calc(${theme.fontSize.amountLabel.xs} - 0.15rem)`,
                },
                width: "fit-content",
              }}
            >
              {quotaNumber}
            </Typography>
            <Typography
              variant="body2"
              color="text.secondary"
              fontSize={isMdUp ? 14 : 11}
            >
              {date}
            </Typography>
          </Stack>
        </Box>
        <Box>
          <Stack spacing={1} alignItems="center">
            <PriceLabel
              number={value}
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
            <Typography
              variant="body2"
              color="text.secondary"
              fontSize={isMdUp ? 14 : 11}
            >
              {balance}
            </Typography>
          </Stack>
        </Box>
      </Box>
    </CustomCard>
  );
};
