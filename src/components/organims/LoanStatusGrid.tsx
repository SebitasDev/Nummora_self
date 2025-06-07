'use client'

import {Box, useTheme} from "@mui/material";
import {LoanStatusCard} from "@/components/molecules/LoanStatusCard";
import {LoanIssuedIcon} from "@/components/atoms/LoanIssuedIcon";
import {Currency} from "@/enums";
import {MoneyInIcon} from "@/components/atoms/MoneyInIcon";
import {LoanReceivedIcon} from "@/components/atoms/LoanReceivedIcon";
import {SeeMoreCard} from "@/components/molecules/SeeMoreCard";

export const LoanStatusGrid = () => {
    const themeMUI = useTheme();
    return (
        <Box
            sx={{
                display: "grid",
                gridTemplateColumns: "1fr 1fr",
                gap: 1.8,

                [themeMUI.breakpoints.down('sm')]: {
                    mt: 2.5
                },
            }}
        >
            <LoanStatusCard
                icon={<LoanIssuedIcon/>}
                cardTitle={"Activos"}
                cardSubTitle={"Total: 5 préstamos"}
                total={"89.900"}
                currency={Currency.COP}
            />
            <LoanStatusCard
                icon={<MoneyInIcon/>}
                cardTitle={"Pendientes"}
                cardSubTitle={"Total: 2 préstamos"}
                total={"43.500"}
                currency={Currency.COP}
            />
            <LoanStatusCard
                icon={<LoanReceivedIcon/>}
                cardTitle={"Terminados"}
                cardSubTitle={"Total: 8 préstamos"}
                total={"1.009.000"}
                currency={Currency.COP}
            />
            <SeeMoreCard/>
        </Box>
    );
}