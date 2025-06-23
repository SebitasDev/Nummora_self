import {Box, Typography, useTheme} from "@mui/material";
import React from "react";
import PriceLabel from "@/components/atoms/PriceLabel";
import {Currency} from "@/enums";
import CodeIcon from '@mui/icons-material/Code';

interface FinancialSummaryCardProps {
    name: string;
    number: string;
    currency: Currency;
    totalLoans: number;
    color?: string;
    backgroundColor?: string;
    icon?: React.ReactNode;
}

export const FinancialSummaryCard = (
    { name, number, currency, totalLoans, color, backgroundColor, icon }: FinancialSummaryCardProps
) => {
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
                backgroundColor: "#fff",
                borderRadius: "12px",
                boxShadow: "0px 2px 8px rgba(0, 0, 0, 0.05)",
                display: "flex",
                flexDirection: "column",
                gap: 2,
                [themeMUI.breakpoints.down('md')]: {
                    padding: 2,
                    gap: 1
                }
            }}
        >
            <Box
                sx={{
                    display: "flex",
                    alignItems: "center",
                    gap: 2,
                    [themeMUI.breakpoints.down('md')]: {
                        gap: 1,
                    }
                }}
            >
                <Box
                    sx={{
                        width: "40px",
                        height: "40px",
                        backgroundColor: `${backgroundColor || "#8f938f"}`,
                        borderRadius: "12px",
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                    }}
                >
                    {icon || <CodeIcon sx={{ color: "gray" }}/>}
                </Box>
                <Typography
                    variant={"body1"}
                    sx={{
                        fontSize: "18px",
                        fontWeight: "bold",
                        [themeMUI.breakpoints.down('md')]: {
                            fontSize: "15px",
                        }
                    }}
                >
                    {name}
                </Typography>
            </Box>

            <Box sx={{ width: "100%" }}>
                <PriceLabel
                    number={number}
                    currency={currency}
                    sx={{
                        letterSpacing: "-0.2px",
                        fontSize: "22px",
                    }}
                />
            </Box>

            <Box
                sx={{
                    display: "flex",
                    justifyContent: "space-between",
                    [themeMUI.breakpoints.down('md')]: {
                        flexDirection: "column",
                        gap: 1
                    }
                }}
            >
                <Typography
                    sx={{
                        fontSize: "14px",
                        color: "gray"
                    }}
                >
                    {totalLoans} préstamos
                </Typography>

                <Box
                    sx={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        color: `${color || "#8f938f"}`,
                        fontSize: "12px",
                        width: "50px",
                        height: "25px",
                        backgroundColor: `${backgroundColor || "#8f938f"}`,
                        border: `1px solid ${color || "#8f938f"}`,
                        borderRadius: "12px",
                    }}
                >
                    <Typography
                        sx={{
                            fontSize: "13px",
                            fontWeight: "bold",
                        }}
                    >
                        {Currency[currency]}
                    </Typography>
                </Box>
            </Box>
        </Box>
    )
}