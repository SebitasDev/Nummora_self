import PriceLabel from "@/components/atoms/PriceLabel";
import { Currency } from "@/enums";
import {Box, Button, Typography} from "@mui/material";
import React from "react";
import {useTheme} from "@mui/system";
import TrendingUpIcon from '@mui/icons-material/TrendingUp';

export const MyEarningsCard = () => {
    const themeMUI = useTheme();
    
    return (
        <Box
            sx={{
                flex: 1,
                minWidth: {
                    xs: "calc(50% - 11.6px)",
                    md: "0",
                },
                height: "160px",
                padding: 2.9,
                background: "linear-gradient(135deg, #4ade80, #22c55e)",
                borderRadius: "12px",
                boxShadow: "0px 2px 8px rgba(0, 0, 0, 0.05)",
                color: "white",
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-around",
                [themeMUI.breakpoints.down('md')]: {
                    padding: 2,
                    gap: 1
                }
            }}
        >
            <Box
                sx={{
                    width: "100%",
                    height: "16px",
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                }}
            >
                <Typography
                    variant={"h6"}
                    sx={{
                        fontSize: "16px",
                        [themeMUI.breakpoints.down("md")]: {
                            fontSize: "15px",
                        }
                    }}
                >
                    Mis ganancias
                </Typography>

                <TrendingUpIcon sx={{ fontSize: "20px", fontWeight: "bold" }}/>

            </Box>

            <PriceLabel
                number={"150.000"}
                currency={Currency.COP}
                sx={{
                    color: "white",
                    letterSpacing: "-0.2px",
                    fontSize: "22px",
                }}
            />

            <Box
                sx={{
                    width: "100%",
                    height: "16px",
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    mb: 1.5,
                    [themeMUI.breakpoints.down("md")]: {
                        flexDirection: "column",
                        alignItems: "flex-start",
                        height: "auto",
                        gap: 1,
                        mb: 0
                    }
                }}
            >
                <Typography
                    variant={"body1"}
                    fontWeight={500}
                    sx={{
                        fontSize: "16px",
                        [themeMUI.breakpoints.down("md")]: {
                            fontSize: "15px",
                        }
                    }}
                >
                    +12% este mes
                </Typography>

                <Button
                    variant="contained"
                    sx={{
                        backgroundColor: "rgba(255,255,255,0.19)",
                        color: "#fff",
                        fontSize: 15,
                        fontWeight: 600,
                        textTransform: "none",
                        borderRadius: 1.8,
                        boxShadow: "none",
                        backdropFilter: "blur(2px)",
                        "&:hover": {
                            backgroundColor: "rgba(255, 255, 255, 0.25)",
                            boxShadow: "none",
                        },
                        [themeMUI.breakpoints.down("md")]: {
                            margin: "auto",
                            width: "85%",
                        },
                    }}
                >
                    Expandir
                </Button>
            </Box>
        </Box>
    );
}