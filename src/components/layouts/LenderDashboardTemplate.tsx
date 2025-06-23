'use client'

import {Box, Button, Typography, useTheme} from "@mui/material";
import SectionHeader from "@/components/atoms/SectionHeader";
import {MyEarnings} from "@/app/lender/dashboard/components/Earnings/MyEarnings";
import {PortfolioDistribution} from "@/app/lender/dashboard/components/PortafolioDistribution";
import {FinancialSummary} from "@/app/lender/dashboard/components/FinancialSummary";
import React from "react";
import {EarningPrediction} from "@/app/lender/dashboard/components/EarningPredictions";
import {PerformanceMetrics} from "@/app/lender/dashboard/components/PerformanceMetrics";
import {useMediaQuery} from "@mui/system";
import Theme from "@/theme/theme";
import {RecentActivities} from "@/app/lender/dashboard/components/RecentActivity";

export const LenderDashboardTemplate = () => {
    const themeMUI = useTheme();
    
    return (
        <Box
            sx={{
                display: 'grid',
                gap: 3.5,
                gridTemplateColumns: {
                    xs: '1fr',
                    md: 'repeat(12, 1fr)',
                },
                [themeMUI.breakpoints.down('md')]: {
                    gap: 1.7
                }
            }}
        >

            { /* Titulo */ }
            <Box sx={{ 
                gridColumn: { 
                    xs: "1 / -1", 
                    md: "span 12" 
                },
                order: {
                    xs: 1,
                    md: 'initial'
                },
                width : '100%',
                height: "80px",
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                [themeMUI.breakpoints.down('md')]: {
                    display: 'none'
                }
            }}>
                <SectionHeader 
                    title={"Mis prestamos"}
                    subtitle={"Panel de control con analisis detallado de tu portafolio"}
                    titleSize={35}
                    subtitleSize={17}
                />
            </Box>

            { /* Mis ganancias */ }
            <MyEarnings/>

            { /* Distribuicion del portafolio */ }
            <PortfolioDistribution/>

            { /* Resumen financiero en cards */ }
            <FinancialSummary/>

            { /* Prediccion de ganancias a futuro */ }
            <EarningPrediction/>

            { /* Metricas de rendimiento */ }
            <PerformanceMetrics/>

            { /* Actividad reciente */ }
            <RecentActivities/>

            { /* Resumen del mes */ }
            <Box sx={{
                gridColumn: {
                    xs: "1 / -1",
                    md: "span 3"
                },
                order: {
                    xs: 8,
                    md: 'initial'
                },
                backgroundColor: "firebrick",
                width : '100%',
                height: "150px"
            }}>
                Resumen del mes
            </Box>
        </Box>
    );
}