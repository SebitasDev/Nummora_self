import {Box, Button, Typography} from "@mui/material";
import SectionHeader from "@/components/atoms/SectionHeader";
import React from "react";
import {MonthToggle} from "@/app/lender/dashboard/components/Earnings/MonthToggle";
import PriceLabel from "@/components/atoms/PriceLabel";
import {Currency} from "@/enums";
import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import {EarningChart} from "@/app/lender/dashboard/components/Earnings/EarningChart";
import {useMediaQuery, useTheme} from "@mui/system";
import {useEarningStore} from "@/app/lender/dashboard/store";
import Theme from "@/theme/theme";

export const MyEarnings = () => {
    const themeMUI = useTheme();
    const isMdUp = useMediaQuery(themeMUI.breakpoints.up("md"));
    const { period } = useEarningStore();
    const theme = Theme;
    return (
        <Box 
            sx={{
                gridColumn: {
                    xs: "1 / -1",
                    md: "span 8"
                },
                order: {
                    xs: 2,
                    md: 'initial'
                },
                width : '100%',
                height: "470px",
                padding: 2.9,
                backgroundColor: "#fff",
                borderRadius: "12px",
                boxShadow: "0px 2px 8px rgba(0, 0, 0, 0.05)",
                [themeMUI.breakpoints.down('md')]: {
                    height: "auto",
                }
            }}
        >
            <Box 
                sx={{ 
                    display: "flex",
                    alignItems: "center"
                }}
            >
                <SectionHeader
                    title={"Mis ganancias"}
                    subtitle={
                        isMdUp ? `Evaluacion de ingresos en los ultimos ${period} meses` : ""
                    }
                    titleSize={isMdUp ? 20 : 15}
                    subtitleSize={15}
                />

                <Box sx={{marginLeft: "auto"}}>
                    <MonthToggle/>
                </Box>
                
            </Box>

            <PriceLabel
                number={"150.000"}
                currency={Currency.COP}
                sx={{
                    color: theme.palette.loandColors.active,
                    fontSize: "24px",
                    mt: 2,
                    width: 'fit-content'
                }}
            />

            <Box sx={{ display: "flex", gap: 1, mt: 1 }}>
                <Box
                    sx={{
                        display: "flex",
                        alignItems: "center",
                        gap: 0.5,
                    }}
                >
                    <TrendingUpIcon sx={{ color: theme.palette.primary.main, fontSize: "15px", fontWeight: "bold" }}/>
                    <Typography
                        color={theme.palette.primary.main}
                        variant={"body1"}
                        fontSize={13}
                        fontWeight={"bold"}
                    >
                        +12% este mes
                    </Typography>
                </Box>

                <Button
                    variant="outlined"
                    sx={{
                        color: "text.primary",
                        borderColor: "#E4E4E7",
                        fontSize: 15,
                        fontWeight: "600",
                        textTransform: "none",
                        borderRadius: 1.8,
                        "&:hover": {
                            backgroundColor: "rgba(0, 0, 0, 0.04)"
                        },
                        [themeMUI.breakpoints.down("md")]: {
                            marginLeft: "auto"
                        }
                    }}
                >
                    Expandir
                </Button>

            </Box>

            <EarningChart/>
        </Box>
    )
}