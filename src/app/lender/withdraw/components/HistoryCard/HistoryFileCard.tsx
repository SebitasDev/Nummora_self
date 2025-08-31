import { CustomCard } from "@/components/atoms/CustomCard";
import {
  Avatar,
  Box,
  Stack,
  Typography,
  ChipProps,
  useMediaQuery,
} from "@mui/material";
import React from "react";
import { useShortenedAddress } from "@/app/lender/dashboard/hooks/useShortenedAddress";
import { CustomChip } from "@/components/atoms/CustomChip";
import PriceLabel from "@/components/atoms/PriceLabel";
import { Currency } from "@/enums/currency";
import { useTheme } from "@mui/material/styles";
import TrendingDownIcon from "@mui/icons-material/TrendingDown";
import Theme from "@/theme/theme";

interface HistoryFileCardProps extends ChipProps {
  value: string;
  accountAddress: string;
  label: string;
  date: string;
}

export const HistoryFileCard = ({
  value,
  accountAddress,
  label,
  date,
  sx,
}: HistoryFileCardProps) => {
  const themeMUI = useTheme();
  const isMdUp = useMediaQuery(themeMUI.breakpoints.up("md"));
  const theme = Theme;
  const shortenAddress = useShortenedAddress;

  return (
    <CustomCard
      sx={{
        borderRadius: 2,
        overflow: "hidden",
        borderWidth: 2,
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
              bgcolor: "#eaf4fd",
              color: "#eaf4fd",
              width: {
                xs: 30,
                md: 35,
              },
              height: {
                xs: 30,
                md: 35,
              },
            }}
          >
            <TrendingDownIcon sx={{ color: "#2563EB" }} />
          </Avatar>
          <Stack spacing={1}>
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
              sx={{ fontSize: isMdUp ? 14 : 11 }}
            >
              Lemon (Crypto) ● {shortenAddress(accountAddress)}
            </Typography>
          </Stack>
        </Box>
        <Box>
          <Stack spacing={1} alignItems="center">
            <CustomChip
              fontSizeXs={"11px"}
              fontSizeMd={"14px"}
              sx={{
                backgroundColor: "#E8F9F0",
                color: "green",
                px: isMdUp ? 2 : 1.5,
                py: 0.3,
                borderRadius: "20px",
                ...sx,
              }}
            >
              {label}
            </CustomChip>
            <Typography
              variant="body2"
              color="text.secondary"
              fontSize={isMdUp ? 14 : 11}
            >
              {date}
            </Typography>
          </Stack>
        </Box>
      </Box>
    </CustomCard>
  );
};
