import { Box, useMediaQuery, useTheme } from "@mui/material";
import { SetWithdrawCard } from "@/app/lender/withdraw/components/WithdrawCard/SetWithdrawCard";
import { WithdrawHistoryCard } from "@/app/lender/withdraw/components/HistoryCard/WithdrawHistoryCard";
import { SummaryCard } from "@/app/lender/withdraw/components/SummaryCard/SummaryCard";
import { StatisticsCard } from "@/app/lender/withdraw/components/Statistics/StatisticsCard";
import ImportantInfo from "@/app/lender/withdraw/components/Important Info/ImportantInfo";
import SectionTitle from "@/components/atoms/SectionTitle";

export default function WithdrawTemplate() {
  const themeMUI = useTheme();
  const isDesktop = useMediaQuery(themeMUI.breakpoints.up("md"));

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
      }}
    >
      {isDesktop && (
        <Box sx={{ gridArea: "header" }}>
          <SectionTitle>Retirar Dinero</SectionTitle>
          <p>Retira tus ganancias de forma segura </p>
        </Box>
      )}
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          gap: 3,
          gridArea: "leftCol",
        }}
      >
        <SetWithdrawCard />
        <WithdrawHistoryCard />
      </Box>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          gap: 3,
          gridArea: "rightCol",
        }}
      >
        <Box>
          <SummaryCard />
        </Box>
        <Box>
          <StatisticsCard />
        </Box>
        <Box>
          <ImportantInfo />
        </Box>
      </Box>
    </Box>
  );
}
