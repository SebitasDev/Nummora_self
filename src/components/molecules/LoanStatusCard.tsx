'use client'

import {Paper, Typography} from "@mui/material";
import {useTheme} from "@mui/system";
import CardTitle from "@/components/atoms/CardTitle";
import PriceLabel from "@/components/atoms/PriceLabel";
import {Currency} from "@/enums";
import {ReactNode} from "react";

interface LoanStatusCardProps {
    icon: ReactNode,
    cardTitle: string,
    cardSubTitle: string,
    total?: string,
    currency: Currency
}

export const LoanStatusCard = (
    { icon, cardTitle, cardSubTitle, total = "0", currency} : LoanStatusCardProps
) => {
    const themeMUI = useTheme()
    return (
        <Paper
            elevation={2}
            sx={{
                display: "flex",
                flexDirection: "column",
                borderRadius: 5,
                p: 1.8,
                gap: 0.4,
                alignItems: "flex-start",
                [themeMUI.breakpoints.down('md')]: {
                    height: "auto"
                }
            }}
        >
            {icon}
            <CardTitle sx={{ mt: 1.2 }}>{cardTitle}</CardTitle>

            <Typography
                color={"#23142E9E"}
                variant="body2"
                sx={{
                    fontSize: "13px"
                }}
            >
                {cardSubTitle}
            </Typography>

            <PriceLabel
                number={total}
                currency={currency}
                sx={{
                    fontSize: "14px !important"
                }}
            />

        </Paper>
    );
}