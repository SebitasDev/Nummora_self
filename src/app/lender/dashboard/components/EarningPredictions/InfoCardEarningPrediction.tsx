import {Box, Typography} from "@mui/material";
import PriceLabel from "@/components/atoms/PriceLabel";
import {Currency} from "@/enums";

interface InfoCardEarningPredictionProps {
    backgroundColor?: string;
    color?: string;
    title?: string;
    number: string;
    currency: Currency;
}

export const InfoCardEarningPrediction = (
    { backgroundColor = "#F9FAFB", color = "gray", title = "NT", number, currency }: InfoCardEarningPredictionProps
) => {
    
    return (
        <Box
            sx={{
                flex: 1,
                height: "60px",
                backgroundColor: backgroundColor,
                padding: 1,
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                borderRadius: "12px",
                gap: 0.5
            }}
        >
            <Typography
                variant={"h6"}
                color={color}
                fontSize={"13px"}
                fontWeight={"bold"}
            >
                {title}
            </Typography>
            <PriceLabel
                number={number}
                currency={currency}
                sx={{
                    fontSize: "18px",
                    color: color
                }}
            />
        </Box>
    )
}