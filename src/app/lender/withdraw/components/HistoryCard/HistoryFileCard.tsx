import {CustomCard} from "@/components/atoms/CustomCard";
import {Avatar, Box, Stack, Typography, ChipProps} from "@mui/material";
import React from "react";
import {shortenAddress} from "@/app/lender/withdraw/components/WithdrawCard/DropdownAddressSelect";
import {CustomChip} from "@/components/atoms/CustomChip";
import {useTheme, useMediaQuery} from "@mui/material";


interface HistoryFileCardProps extends ChipProps {
    value: string;
    accountAddress: string;
    label: string;
    date: string;
}

export const HistoryFileCard = ({value, accountAddress, label, date, sx}: HistoryFileCardProps) => {
    const themeMUI = useTheme();
    const isMdUp = useMediaQuery(themeMUI.breakpoints.up("md"));
    return (
        <CustomCard
            sx={{
                borderRadius: 2,
                overflow: "hidden",
                borderWidth: 2,
                borderStyle: "solid",
                px: 2,
                py: 4,
            }}
        >
                <Box
                    sx={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "space-between",
                        height: "0.3rem",

                    }}
                    position={'initial'}
                >
                    <Box
                        display="flex"
                        alignItems="center"
                        gap={2}
                    >
                        <Avatar
                            sx={{
                                bgcolor: "#E8F9F0",
                                color: "green",
                                width: {
                                    xs :30,
                                    md:35,
                                },
                                height: {
                                    xs :30,
                                    md:35,
                                }
                            }}
                        >
                            <img
                                src="/arrow.svg"
                                alt="withdrawImage"
                                style={{
                                    width: "40%",
                                    height: "40%",
                                    objectFit: "contain",
                                }}
                            />
                        </Avatar>
                        <Stack spacing={1}>
                            <Typography
                                fontWeight="bold"
                                sx={{
                                    fontSize: {
                                        xs: '0.6rem',
                                        sm: '0.7rem',
                                        md: '0.8rem',
                                        lg: '0.8rem',
                                    },
                                }}
                            >
                                $ {value}
                            </Typography>
                            <Typography
                                variant="body2"
                                color="text.secondary"
                                sx={{
                                    fontSize: {
                                        xs: '0.5rem',
                                        sm: '0.6rem',
                                        md: '0.8rem',
                                        lg: '0.8rem',
                                    },
                                }}
                            >
                                Lemon (Crypto) {shortenAddress(accountAddress)}
                            </Typography>
                        </Stack>
                    </Box>
                    <Box   >
                        <Stack alignItems={'center'} spacing={1}>
                            <CustomChip
                                sx={{
                                    backgroundColor: "#E8F9F0",
                                    color: "green",
                                    px: isMdUp ? 2 : 1.5,
                                    ...sx
                                }}
                            >
                                <Typography
                                    fontSize={isMdUp ? "0.8rem" : "0.6rem" }
                                >
                                    {label}
                                </Typography>
                            </CustomChip>
                            <Typography
                                variant="body2"
                                color="text.secondary"
                                fontSize={isMdUp ? "0.8rem" : "0.6rem" }
                            >
                                {date}
                            </Typography>
                        </Stack>
                    </Box>
                </Box>
        </CustomCard>
    )
}