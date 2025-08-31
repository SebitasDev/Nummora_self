import { Box, Typography } from "@mui/material";
import PriceLabel from "@/components/atoms/PriceLabel";
import { Currency } from "@/enums";
import { useStyles } from "@/hooks/useStyles";

interface InfoCardEarningPredictionProps {
  backgroundColor?: string;
  color?: string;
  title?: string;
  number: string;
  currency: Currency;
}

export const InfoCardEarningPrediction = ({
  backgroundColor = "#F9FAFB",
  color = "gray",
  title = "NT",
  number,
  currency,
}: InfoCardEarningPredictionProps) => {
  const { theme, isMdDown } = useStyles();

  return (
    <Box
      sx={{
        flex: 1,
        height: "auto",
        backgroundColor: backgroundColor,
        padding: 1,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        borderRadius: "12px",
        gap: 0.5,
      }}
    >
      <Typography
        variant={"h6"}
        color={color}
        fontSize={
          isMdDown ? theme.fontSize.labels.xs : theme.fontSize.labels.md
        }
        fontWeight={"bold"}
      >
        {title}
      </Typography>
      <PriceLabel
        number={number}
        currency={currency}
        sx={{
          color: color,
        }}
      />
    </Box>
  );
};
