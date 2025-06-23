import {Box, Typography} from "@mui/material"
import SectionHeader from "@/components/atoms/SectionHeader";
import PriceLabel from "@/components/atoms/PriceLabel";
import {Currency} from "@/enums";
import {useRecentActivities} from "@/app/lender/dashboard/hooks";
import React from "react";

interface CardRecentActivityProps {
    title: string;
    subtitle: string;
    icon: React.ReactNode;
    color: string;
    backgroundColor: string;
    amount: string;
    status: string;
}

export const CardRecentActivity = (
    { title, subtitle, amount, icon, color, backgroundColor, status } : CardRecentActivityProps
) => {
    const { themeMUI, isMdUp, theme } = useRecentActivities();
    
    return (
        <Box
            sx={{
                height: "70",
                width: "100%",
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                [themeMUI.breakpoints.down("md")]: {
                    height: "auto"
                }
            }}
        >
            <Box
                sx={{
                    display: "flex",
                    gap: 1.5,
                    alignItems: "center",
                }}
            >
                <Box
                    sx={{
                        width: "40px",
                        height: "40px",
                        backgroundColor: backgroundColor,
                        borderRadius: "20px",
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        ml: 1,
                        p: 1,
                        [themeMUI.breakpoints.down("md")]: {
                            ml: 0
                        }
                    }}
                >
                    {icon}
                </Box>
                <SectionHeader
                    title={title}
                    titleSize={isMdUp ? 16 : 12}
                    subtitleSize={isMdUp ? 14 : 11}
                    subtitle={subtitle}
                />
            </Box>

            <Box
                sx={{
                    display: "flex",
                    flexDirection: 'column',
                    gap: 1.5,
                    alignItems: "flex-end",
                    mr: 2,
                    [themeMUI.breakpoints.down("md")]: {
                        mr: 0.5,
                        gap: 0.8
                    }
                }}
            >
                <PriceLabel
                    number={amount}
                    currency={Currency.COP}
                    sx={{
                        fontSize: "18px",
                        letterSpacing: "-0.5px",
                        [themeMUI.breakpoints.down("md")]: {
                            fontSize: "14px"
                        }
                    }}
                />
                <Box
                    sx={{
                        width: "140px",
                        height: "20px",
                        backgroundColor: backgroundColor,
                        border: `1px solid ${color}`,
                        borderRadius: "20px",
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        p: 1.2,
                        [themeMUI.breakpoints.down("md")]: {
                            width: "100px",
                            p: 0.5
                        }
                    }}
                >
                    <Typography
                        variant={"body1"}
                        color={color}
                        sx={{
                            fontSize: isMdUp ? "14px" : "13px",
                            fontWeight: 600,
                            textAlign: "center"
                        }}
                    >
                        {status}
                    </Typography>
                </Box>
            </Box>
        </Box>
    )
}