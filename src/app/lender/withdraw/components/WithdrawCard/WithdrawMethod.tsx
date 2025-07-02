import {
  Avatar,
  Box,
  Collapse,
  Stack,
  Typography,
  SelectChangeEvent,
} from "@mui/material";
import React from "react";
import { CustomCard } from "@/components/atoms/CustomCard";
import Link from "@mui/material/Link";
import { CustomChip } from "@/components/atoms/CustomChip";
import { TimeText } from "@/components/atoms/TimeText";
import { DropdownAddressSelect } from "@/app/lender/withdraw/components/WithdrawCard/DropdownAddressSelect";
import { WithdrawSummary } from "@/app/lender/withdraw/components/WithdrawCard/WithdrawSummary";
import { useWithdrawCard } from "../../hooks/useWithdrawCard";

interface WithdrawMethodProps {
  selectedAddress: string;
  setSelectedAddress: (addr: string) => void;
}

export const WithdrawMethod = ({
  selectedAddress,
  setSelectedAddress,
}: WithdrawMethodProps) => {
  const { expanded, handleToggle, isMdUp, addressOptions } = useWithdrawCard();
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
              maxWidth: "100%",
              mr: 1.5,
              ml: -0.5,
              cursor: "pointer",
            }}
          >
            <Box
              sx={{
                borderRadius: "50%",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                width: {
                  xs: 30,
                  md: 50,
                },
                height: {
                  xs: 35,
                  md: 50,
                },
              }}
            >
              <Avatar
                src="https://i.postimg.cc/QNQJd1PN/download.jpg"
                alt="Lemon"
                sx={{
                  width: {
                    xs: 33,
                    md: 50,
                  },
                  height: {
                    xs: 33,
                    md: 50,
                  },
                }}
              />
            </Box>
          </Box>
          <Box
            sx={{
              gridArea: "lemon",
            }}
          >
            <Stack spacing={0.3}>
              <Typography
                fontWeight="bold"
                sx={{
                  fontSize: { xs: "0.8rem", sm: "0.9rem", md: "0.8rem" },
                }}
              >
                Lemon (Crypto)
              </Typography>
              <Typography
                variant="body2"
                sx={{ fontSize: { xs: "0.7rem", sm: "0.9rem", md: "1rem" } }}
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
              mt: 0.3,
            }}
          >
            <Link
              sx={{
                fontSize: {
                  xs: "0.54rem",
                  sm: "0.6rem",
                  md: "0.7rem",
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
              gridArea: "select",
              alignItems: "center",
              display: "flex",
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
              sx={{ width: "100%", mx: -0.5, my: -0.5 }}
            >
              <TimeText timeFrame={"5-15 minutos"} />
              <CustomChip
                sx={{
                  backgroundColor: expanded ? "success.light" : "#E8F9F0",
                  color: expanded ? "white" : "green",
                  px: isMdUp ? 2 : 1.5,
                  py: 0.3,
                  borderRadius: "20px",
                }}
              >
                <Typography fontSize={isMdUp ? "1rem" : "0.55rem"}>
                  Seleccionar
                </Typography>
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
          <WithdrawSummary
            montoSolicitado="100.000"
            comision="1.500"
            totalRecibir="98.500"
          />
        </Box>
      </Collapse>
    </Box>
  );
};
