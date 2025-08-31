import { CustomCard } from "@/components/atoms/CustomCard";
import { Box, CardContent, CardHeader } from "@mui/material";
import React from "react";
import { HistoryFileCard } from "@/app/lender/withdraw/components/HistoryCard/HistoryFileCard";
import { Stack } from "@mui/material";
import SectionHeader from "@/components/atoms/SectionHeader";

export const WithdrawHistoryCard = () => {
  return (
    <CustomCard>
      <CardHeader
        title={
          <SectionHeader
            title="Historial de Retiros"
            subtitle="Tus ultimos movimientos en retiros"
          />
        }
      />
      <Box sx={{ p: -1 }}>
        <Stack spacing={1}>
          <HistoryFileCard
            sx={{
              backgroundColor: "#E8F9F0",
              color: "green",
            }}
            label={"Completado"}
            date={"2025-06-23"}
            value={"50.000"}
            accountAddress={"asasdbaobsdahvsdpavhvaspva"}
          />
          <HistoryFileCard
            sx={{
              backgroundColor: "#FFFDBD",
              color: "#7B491F",
            }}
            label={"Procesando"}
            date={"2025-01-07"}
            value={"30.000"}
            accountAddress={"SDFVEvwdvVSASrvaadfasf"}
          />
          <HistoryFileCard
            sx={{
              backgroundColor: "#E8F9F0",
              color: "green",
            }}
            label={"Completado"}
            date={"2024-07-13"}
            value={"100.000"}
            accountAddress={"asasdbaobsdahvsdpavhvaspva"}
          />
          <HistoryFileCard
            sx={{
              backgroundColor: "#E8F9F0",
              color: "green",
            }}
            label={"Completado"}
            date={"2025-04-30"}
            value={"28.000"}
            accountAddress={"asasdbaobsdahvsdpavhvaspva"}
          />
        </Stack>
      </Box>
    </CustomCard>
  );
};
