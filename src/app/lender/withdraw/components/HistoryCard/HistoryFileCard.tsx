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
  const shortenAddress = useShortenedAddress;
  const fontSize = {
    xs: "0.6rem",
    sm: "0.9rem",
    md: "1rem",
  };

  const theme = useTheme();
  return (
    <CustomCard
      sx={{
        borderRadius: 2,
        overflow: "hidden",
        borderWidth: 2,
        borderStyle: "solid",
        px: 2,
        py: 4,
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
              bgcolor: "#E8F9F0",
              color: "green",
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
            <img
              src="/arrow.svg"
              alt="withdrawImage"
              style={{
                width: "40%",
                height: "40%",
                objectFit: "contain",
              }}
            />
          </Avatar>
          <Stack spacing={1}>
            <PriceLabel
              number={value}
              currency={Currency.COP}
              sx={{
                fontSize: "1rem",
                [theme.breakpoints.down("md")]: {
                  fontSize: "0.7rem",
                },
                width: "fit-content",
              }}
            />
            <Typography
              variant="body2"
              color="text.secondary"
              sx={{ fontSize }}
            >
              Lemon (Crypto) {shortenAddress(accountAddress)}
            </Typography>
          </Stack>
        </Box>
        <Box>
          <Stack alignItems={"center"} spacing={1}>
            <CustomChip
              fontSizeXs={"0.6rem"}
              fontSizeMd="0.8rem"
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
              fontSize={isMdUp ? "0.8rem" : "0.6rem"}
            >
              {date}
            </Typography>
          </Stack>
        </Box>
      </Box>
    </CustomCard>
  );
};
