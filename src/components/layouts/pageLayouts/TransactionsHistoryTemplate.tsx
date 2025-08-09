"use client";

import SectionHeader from "@/components/atoms/SectionHeader";
import { Box, useMediaQuery, useTheme } from "@mui/material";
import { ActivityFilters } from "@/app/lender/transactions/components/ActivityFilters";
import { useFilteredActivities } from "@/app/lender/transactions/hooks/useFilteredActivities";
import { ActivityList } from "@/app/lender/transactions/components/ActivityList";
import { Summary } from "@/app/lender/transactions/components/Summary";
import { QuickFilters } from "@/app/lender/transactions/components/QuickFilters";

export default function TransactionsHistoryTemplate() {
  const themeMUI = useTheme();
  const isDesktop = useMediaQuery(themeMUI.breakpoints.up("md"));
  const { filters, handleFilterChange, filteredActivities, activities } =
    useFilteredActivities();

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        gap: 3,
        [themeMUI.breakpoints.up("md")]: {
          display: "grid",
          gridTemplateColumns: "2fr 1fr",
          gridTemplateAreas: `
            "header header"
            "leftCol rightCol"
          `,
          gap: 3,
        },
        mb: 15,
      }}
    >
      {isDesktop && (
        <SectionHeader
          title="Actividad Reciente"
          subtitle="Histortial Completo de tus transacciones"
        />
      )}
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          gap: 3,
          gridArea: "leftCol",
          width: "100%",
          height: "100%",
        }}
      >
        <ActivityFilters
          filters={filters}
          onFilterChange={handleFilterChange}
        />
        <ActivityList
          activities={filteredActivities}
          total={activities.length}
        />
      </Box>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          gap: 3,
          gridArea: "rightCol",
          width: "100%",
          height: "30rem",
        }}
      >
        <Summary />
        <QuickFilters filters={filters} onFilterChange={handleFilterChange} />
      </Box>
    </Box>
  );
}
