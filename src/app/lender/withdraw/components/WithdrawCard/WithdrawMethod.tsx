import {
  Avatar,
  Box,
  Collapse,
  Stack,
  Typography,
  SelectChangeEvent,
  useTheme,
} from "@mui/material";
import React from "react";
import { CustomCard } from "@/components/atoms/CustomCard";
import Link from "@mui/material/Link";
import { CustomChip } from "@/components/atoms/CustomChip";
import { TimeText } from "@/components/atoms/TimeText";
import { DropdownAddressSelect } from "@/app/lender/withdraw/components/WithdrawCard/DropdownAddressSelect";
import { WithdrawSummary } from "@/app/lender/withdraw/components/WithdrawCard/WithdrawSummary";
import { useWithdrawCard } from "../../hooks/useWithdrawCard";
import Theme from "@/theme/theme";

interface WithdrawMethodProps {
  selectedAddress: string;
  setSelectedAddress: (addr: string) => void;
}

export const WithdrawMethod = ({
  selectedAddress,
  setSelectedAddress,
}: WithdrawMethodProps) => {
  const { expanded, handleToggle, isMdUp, addressOptions } = useWithdrawCard();
  const theme = Theme;
  const themeMUI = useTheme();

  return (
    <Box>
      <Typography variant="subtitle1" fontWeight="bold" mb={1}>
        Método de Retiro
      </Typography>

      <CustomCard
        sx={{
          borderRadius: 2,
          overflow: "hidden",
          borderColor: expanded ? "success.light" : "divider",
          borderWidth: 2,
          borderStyle: "solid",
          backgroundColor: expanded ? "#edfdf4" : "background.paper",
          px: 2,
          py: 1.5,
        }}
      >
        <Box
          onClick={handleToggle}
          sx={{
            display: "grid",
            gridTemplateColumns: "0.5fr 1.5fr 1fr 1fr",
            gridTemplateAreas: {
              xs: `"image lemon lemon lemon"
                                  "image learn learn learn"
                                  "select select select select"`,
              sm: `"image lemon lemon select"
                            "image lemon lemon select"
                            "image learn learn select"`,
            },
          }}
        >
          <Box
            sx={{
              gridArea: "image",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              maxWidth: {
                xs: "100%",
                md: "70%",
              },
              cursor: "pointer",
            }}
          >
            <Avatar
              src="https://i.postimg.cc/QNQJd1PN/download.jpg"
              alt="Lemon"
              sx={{
                width: {
                  xs: 33,
                  md: 60,
                },
                height: {
                  xs: 33,
                  md: 60,
                },
                mr: { xs: 2, md: 0 },
              }}
            />
          </Box>
          <Box
            sx={{
              gridArea: "lemon",
              ml: {
                xs: 0,
                md: -1.5,
              },
            }}
          >
            <Stack spacing={0.5}>
              <Typography
                fontWeight="bold"
                sx={{
                  fontSize: `calc(${theme.fontSize.amountLabel.md} - 0.15rem)`,
                  letterSpacing: "-0.5px",
                  [themeMUI.breakpoints.down("md")]: {
                    fontSize: `calc(${theme.fontSize.amountLabel.xs} - 0.15rem)`,
                  },
                }}
              >
                Lemon (Crypto)
              </Typography>
              <Typography
                variant="body2"
                sx={{ fontSize: isMdUp ? 14 : 11 }}
                color="text.secondary"
              >
                Comisión:{""}
                <Box
                  component="span"
                  color="success.main"
                  fontWeight="bold"
                  sx={{ ml: 0.5 }}
                >
                  1.5%
                </Box>
              </Typography>
            </Stack>
          </Box>
          <Box
            sx={{
              gridArea: "learn",
              mt: 0.5,
            }}
          >
            <Link
              sx={{
                fontSize: isMdUp ? 14 : 11,
                ml: {
                  xs: 0,
                  md: -1.5,
                },
                color: "primary.main",
                display: "flex",
                alignItems: "center",
                gap: 0.5,
                "&:hover": { textDecoration: "underline" },
              }}
              href="#"
              underline="hover"
            >
              📖 Aprende a retirar con Lemon
            </Link>
          </Box>
          <Box
            sx={{
              display: "flex",
              gridArea: "select",
              alignItems: "center",
              justifyContent: "flex-end",
              mt: {
                xs: 1,
                sm: 0,
              },
            }}
          >
            <Stack
              direction={{
                xs: "row",
                sm: "column",
              }}
              alignItems="center"
              spacing={0.3}
              justifyContent={{
                xs: "space-between",
                sm: "center",
              }}
              sx={{ width: { xs: "100%", sm: "70%" }, mx: -0.5 }}
            >
              <TimeText timeFrame={"5-15 minutos"} />
              <CustomChip
                fontSizeXs={"11px"}
                fontSizeMd={"14px"}
                sx={{
                  backgroundColor: expanded ? "success.light" : "#E8F9F0",
                  color: expanded ? "white" : "green",
                  px: isMdUp ? 2 : 1.5,
                  py: 0.3,
                  borderRadius: "20px",
                }}
              >
                Seleccionar
              </CustomChip>
            </Stack>
          </Box>
        </Box>
      </CustomCard>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <Box sx={{ mt: 3 }} display="flex" flexDirection="column">
          <DropdownAddressSelect
            options={addressOptions}
            value={selectedAddress}
            onChange={(e: SelectChangeEvent) =>
              setSelectedAddress(e.target.value)
            }
          />
          <WithdrawSummary />
        </Box>
      </Collapse>
    </Box>
  );
};
