import {Box, Typography} from "@mui/material"
import SectionHeader from "@/components/atoms/SectionHeader";
import PriceLabel from "@/components/atoms/PriceLabel";
import {Currency} from "@/enums";
import React from "react";
import {CustomChip} from "@/components/atoms/CustomChip";
import {useStyles} from "@/hooks/useStyles";

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
    const { themeMUI, isMdDown, theme } = useStyles();
    
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
                    titleSize={isMdDown ? 14 : 16}
                    subtitleSize={isMdDown ? theme.fontSize.labels.xs : theme.fontSize.labels.md}
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
                        fontSize: `calc(${theme.fontSize.amountLabel.md} - 0.15rem)`,
                        letterSpacing: "-0.5px",
                        [themeMUI.breakpoints.down("md")]: {
                            fontSize: `calc(${theme.fontSize.amountLabel.xs} - 0.15rem)`
                        }
                    }}
                />
                <CustomChip
                    sx={{
                        width: "140px",
                        height: "20px",
                        backgroundColor: backgroundColor,
                        border: `0.5px solid ${color}`,
                        p: 1.3,
                        [themeMUI.breakpoints.down("md")]: {
                            width: "100px",
                            p: 0.5
                        }
                    }}
                >
                    <Typography
                        variant={"body1"}
                        color={color}
                    >
                        {status}
                    </Typography>
                </CustomChip>
            </Box>
        </Box>
    )
}