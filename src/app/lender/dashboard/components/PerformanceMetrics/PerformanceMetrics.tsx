import {Box, Typography, useTheme} from "@mui/material";
import React from "react";
import {useMediaQuery} from "@mui/system";
import Theme from "@/theme/theme";
import SectionHeader from "@/components/atoms/SectionHeader";
import AutoGraphIcon from '@mui/icons-material/AutoGraph';
import {
    PerformanceMetricProgress
} from "@/app/lender/dashboard/components/PerformanceMetrics/PerformanceMetricProgress";
import {CustomCard} from "@/components/atoms/CustomCard";

export const PerformanceMetrics = () => {
    const themeMUI = useTheme();
    const isMdUp = useMediaQuery(themeMUI.breakpoints.up("md"));
    const theme = Theme;
    
    return (
        <CustomCard 
            sx={{
                gridColumn: {
                    xs: "1 / -1",
                    md: "span 6"
                },
                order: {
                    xs: 6,
                    md: 'initial'
                },
                width : '100%',
                height: "450px",
                padding: 2.9,
                display: "flex",
                flexDirection: "column",
                gap: 2.5
            }}
        >
            <SectionHeader
                title={"Métricas de rendimiento"}
                subtitle={
                    isMdUp ? `Indicadores claves de tu inversión` : ""
                }
                titleSize={isMdUp ? 20 : 15}
                subtitleSize={15}
                icon={<AutoGraphIcon sx={{ fontSize: "20px", fontWeight: "bold" }}/>}
            />

            {/* TODO(Sebastian): Pasar a componente*/}
            <Box
                sx={{
                    display: "flex",
                    gap: 2
                }}
            >
                <Box
                    sx={{
                        flex: 1,
                        backgroundColor: theme.palette.loan.active.background,
                        padding: 1,
                        borderRadius: "8px",
                        height: "80px",
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                    }}
                >
                    <Typography
                        color={theme.palette.loan.active.main}
                        fontWeight={"bold"}
                        fontSize={"25px"}
                    >
                        98.5%
                    </Typography>
                    <Typography
                        fontSize={"14px"}
                        color={"gray"}
                    >
                        Tasa de cobro
                    </Typography>
                </Box>

                <Box
                    sx={{
                        flex: 1,
                        backgroundColor: theme.palette.loan.completed.background,
                        padding: 1,
                        borderRadius: "8px",
                        height: "80px",
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                    }}
                >
                    <Typography
                        color={theme.palette.loan.completed.main}
                        fontWeight={"bold"}
                        fontSize={"25px"}
                    >
                        24
                    </Typography>
                    <Typography
                        fontSize={"14px"}
                        color={"gray"}
                    >
                        días promedio
                    </Typography>
                </Box>
            </Box>

            <Box
                sx={{
                    display: "flex",
                    flexDirection: "column",
                    gap: 2,
                }}
            >
                <PerformanceMetricProgress 
                    value={85}
                    name={"Diversificación"}
                    color={theme.palette.loan.active.main}
                />

                <PerformanceMetricProgress
                    value={72}
                    name={"Liquidez"}
                    color={theme.palette.loan.pending.main}
                />

                <PerformanceMetricProgress
                    value={91}
                    name={"Estabilidad"}
                    color={theme.palette.loan.completed.main}
                />
            </Box>
        </CustomCard>
    )
}