import {Box} from "@mui/material";
import {useTheme} from "@mui/system";
import React from "react";
import {MyEarningsCard} from "@/app/lender/dashboard/components/FinancialSummary/MyEarningsCard";
import {FinancialSummaryCard} from "@/app/lender/dashboard/components/FinancialSummary/FinancialSummaryCard";
import {Currency} from "@/enums";
import WalletIcon from '@mui/icons-material/Wallet';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import TaskAltIcon from '@mui/icons-material/TaskAlt';
import Theme from "@/theme/theme";

export const FinancialSummary = () => {
    const themeMUI = useTheme(); 
    const theme = Theme;
    return (
        <Box
            sx={{
                gridColumn: {
                    xs: "1 / -1",
                    md: "span 12"
                },
                order: {
                    xs: 3,
                    md: 'initial'
                },
                width : '100%',
                height: "auto",
                display: 'flex',
                flexWrap: "wrap",
                gap: 3.5,
                [themeMUI.breakpoints.down('md')]: {
                    gap: 1.7
                }
            }}
        >
           <MyEarningsCard/>
            
            <FinancialSummaryCard
                name="Activos"
                number="89.000"
                currency={Currency.COP}
                totalLoans={5}
                color={theme.palette.loan.active.main}
                backgroundColor={theme.palette.loan.active.background}
                icon={<WalletIcon sx={{color: theme.palette.loan.active.main}}/>}
            />

            <FinancialSummaryCard
                name="Pendientes"
                number="43.500"
                currency={Currency.COP}
                totalLoans={2}
                color={theme.palette.loan.pending.main}
                backgroundColor={theme.palette.loan.pending.background}
                icon={<AccessTimeIcon sx={{color: theme.palette.loan.pending.main}}/>}
            />

            <FinancialSummaryCard
                name="Terminados"
                number="1.009.000"
                currency={Currency.COP}
                totalLoans={3}
                color={theme.palette.loan.completed.main}
                backgroundColor={theme.palette.loan.completed.background}
                icon={<TaskAltIcon sx={{color: theme.palette.loan.completed.main}}/>}
            />
        </Box>
    );
}