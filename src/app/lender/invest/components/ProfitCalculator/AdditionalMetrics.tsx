import { Box, Typography } from "@mui/material";
import { CustomCard } from "@/components/atoms/CustomCard";
import { useInvest } from "@/app/lender/invest/hooks";

export const AdditionalMetrics = () => {
  const { theme, amount } = useInvest();

  return (
    <Box
      sx={{
        display: "flex",
        flexWrap: "nowrap",
        gap: 1.5,
        width: "100%",
      }}
    >
      <Box sx={{ flex: 1, minWidth: 0 }}>
        <CustomCard
          sx={{
            bgcolor: "white",
            textAlign: "center",
            p: 1.5,
            border: "1px solid #bbf7d0",
            height: "90px",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            width: "100%",
          }}
        >
          <Typography
            variant="h6"
            fontWeight="bold"
            sx={{
              color: theme.palette.primary.dark,
              overflow: "hidden",
              textOverflow: "ellipsis",
              whiteSpace: "nowrap",
              maxWidth: "100%",
            }}
          >
            {Math.floor(amount / 25000)}
          </Typography>
          <Typography
            variant="body2"
            color="text.secondary"
            sx={{
              lineHeight: "normal",
              wordWrap: "break-word",
            }}
          >
            Personas al final
          </Typography>
        </CustomCard>
      </Box>
      <Box sx={{ flex: 1, minWidth: 0 }}>
        <CustomCard
          sx={{
            textAlign: "center",
            p: 1.5,
            border: "1px solid #bbf7d0",
            height: "90px",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            width: "100%",
          }}
        >
          <Typography
            variant="h6"
            fontWeight="bold"
            sx={{
              color: theme.palette.primary.dark,
              overflow: "hidden",
              textOverflow: "ellipsis",
              whiteSpace: "nowrap",
              maxWidth: "100%",
            }}
          >
            144%
          </Typography>
          <Typography
            variant="body2"
            color="text.secondary"
            sx={{
              lineHeight: "normal",
            }}
          >
            Rentabilidad aprox.
          </Typography>
        </CustomCard>
      </Box>
      <Box sx={{ flex: 1, minWidth: 0 }}>
        <CustomCard
          sx={{
            bgcolor: "white",
            textAlign: "center",
            p: 1.5,
            border: "1px solid #bbf7d0",
            height: "90px",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            width: "100%",
          }}
        >
          <Typography
            variant="h6"
            fontWeight="bold"
            sx={{
              color: theme.palette.primary.dark,
              overflow: "hidden",
              textOverflow: "ellipsis",
              whiteSpace: "nowrap",
              maxWidth: "100%",
            }}
          >
            {Math.floor(amount / 30000)}
          </Typography>
          <Typography
            variant="body2"
            color="text.secondary"
            sx={{
              lineHeight: "normal",
              wordWrap: "break-word",
            }}
          >
            Personas extra
          </Typography>
        </CustomCard>
      </Box>
    </Box>
  );
};
